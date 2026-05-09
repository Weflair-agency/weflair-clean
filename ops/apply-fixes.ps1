param(
  [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path
)

$excludeDirs = @('node_modules','dist','_archive','_recovery_snapshots','.git')
$report = [ordered]@{ filesScanned = 0; emailFixed = 0; trackerFixed = 0; touchedFiles = @() }

function ShouldSkip([string]$path) {
  foreach ($d in $excludeDirs) {
    if ($path -match "[\\/]$([regex]::Escape($d))[\\/]") { return $true }
  }
  return $false
}

$guardOpen  = "if(!['localhost','127.0.0.1'].includes(location.hostname)){"
$guardClose = "}"

function Wrap-Tracker([string]$content) {
  # If already gated, skip
  if ($content -match "WEFLAIR_TRACKER_GATED") { return $content }

  $changed = $false

  # GTM block: <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-...');</script>
  $gtmRe = "(?s)(<!--\s*Google Tag Manager\s*-->\s*)<script>(\(function\(w,d,s,l,i\)\{.*?\}\)\(window,document,'script','dataLayer','GTM-[^']+'\);)</script>"
  if ($content -match $gtmRe) {
    $content = [regex]::Replace($content, $gtmRe, "`$1<script>/*WEFLAIR_TRACKER_GATED*/${guardOpen}`$2${guardClose}</script>")
    $changed = $true
  }

  # Sortlist Radar: <script>!function(e){...}({...});</script>
  $sortRe = "(?s)(<!--\s*Sortlist Radar\s*-->\s*)<script>(!function\(e\)\{.*?\}\(\{[^<]*?\}\);)</script>"
  if ($content -match $sortRe) {
    $content = [regex]::Replace($content, $sortRe, "`$1<script>/*WEFLAIR_TRACKER_GATED*/${guardOpen}`$2${guardClose}</script>")
    $changed = $true
  }

  # Factors.ai: <script>window.faitracker=...;...}();</script>
  $factRe = "(?s)(<!--\s*Factors\.ai\s*-->\s*)<script>(window\.faitracker=.*?\}\(\);)</script>"
  if ($content -match $factRe) {
    $content = [regex]::Replace($content, $factRe, "`$1<script>/*WEFLAIR_TRACKER_GATED*/${guardOpen}`$2${guardClose}</script>")
    $changed = $true
  }

  return ,$content,$changed
}

$files = Get-ChildItem -Path $Root -Recurse -File -Include *.html,*.txt -ErrorAction SilentlyContinue |
  Where-Object { -not (ShouldSkip $_.FullName) }

foreach ($file in $files) {
  $report.filesScanned++
  $orig = Get-Content -Raw -LiteralPath $file.FullName -Encoding UTF8
  if ($null -eq $orig) { continue }
  $new = $orig
  $thisFileChanged = $false

  # Email fix
  if ($new -match 'weflair\.com') {
    $new = $new -replace 'weflair\.com','weflair.co'
    $thisFileChanged = $true
    $report.emailFixed++
  }

  # Tracker gate (only HTML)
  if ($file.Extension -eq '.html') {
    $wrapped = Wrap-Tracker $new
    $new = $wrapped[0]
    if ($wrapped[1]) {
      $thisFileChanged = $true
      $report.trackerFixed++
    }
  }

  if ($thisFileChanged) {
    Set-Content -LiteralPath $file.FullName -Value $new -Encoding UTF8 -NoNewline
    $report.touchedFiles += $file.FullName.Replace($Root,'').TrimStart('\','/')
  }
}

$report | ConvertTo-Json -Depth 4
