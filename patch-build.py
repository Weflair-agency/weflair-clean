import os

build_script = r"C:\Users\sam\Desktop\vscode-weflair\weflair-clean\build-site.cjs"

with open(build_script, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the simple copy function with a file-aware one
old_copy = '''function copyRecursiveSync(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}'''

new_copy = '''function copyRecursiveSync(src, dest, ignoreHtml = false) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName), ignoreHtml);
    });
  } else {
    if (ignoreHtml && src.endsWith('.html')) return;
    fs.copyFileSync(src, dest);
  }
}

const foldersToCopyStatic = ['case-studies', 'services', 'resources', 'brand-assets', 'legal', 'images'];
for (const folder of foldersToCopyStatic) {
  const src = path.join(__dirname, folder);
  if (fs.existsSync(src)) {
    copyRecursiveSync(src, path.join(__dirname, 'dist', folder), true);
  }
}
'''

content = content.replace(old_copy, new_copy)

if "function copyRecursiveSync(src, dest, ignoreHtml" not in content:
    # Manual replace if the exact string didn't match
    import re
    content = re.sub(r'function copyRecursiveSync[^}]*fs\.copyFileSync\(src, dest\);\s*\}', new_copy, content, flags=re.DOTALL)
    
    # Also remove any trailing copyRecursiveSync calls so we don't have duplicates
    content = content.replace("copyRecursiveSync(path.join(__dirname, 'public'), path.join(__dirname, 'dist'));", "copyRecursiveSync(path.join(__dirname, 'public'), path.join(__dirname, 'dist'), false);")
    content = content.replace("copyRecursiveSync(path.join(__dirname, 'images'), path.join(__dirname, 'dist', 'images'));", "")


with open(build_script, 'w', encoding='utf-8') as f:
    f.write(content)

print("Build script patched with static asset copying.")
