const fs = require('fs');

let text = fs.readFileSync('public/weflair-hero.js', 'utf8');

const startStr = 'function teamPlaceholderMarkup(pod) {';
const endStr = 'let _activeResultsFilter = "All Cases";';

const startIndex = text.indexOf(startStr);
const endIndex = text.indexOf('  ' + endStr) !== -1 ? text.indexOf('  ' + endStr) : text.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
    const pre = text.substring(0, startIndex);
    const post = text.substring(endIndex);
    const replacement = `function teamPlaceholderMarkup(pod) {
    return \`<div class="weflair-demand-team__showcase is-\${pod.tone}">
      <div class="weflair-org-chart">
        <div class="weflair-org-lead">
          <div class="weflair-org-avatar" style="background-image: url('\${pod.lead.img}')"></div>
          <span class="weflair-org-name">\${pod.lead.name}</span>
        </div>
        <div class="weflair-org-connector"></div>
        <div class="weflair-org-child-nodes">
          \${pod.roles
            .map(
              (role) =>
                \`<div class="weflair-org-node">
                  <div class="weflair-org-avatar is-sm" style="background-image: url('\${role.img}')"></div>
                  <span class="weflair-org-label">\${role.label}</span>
                </div>\`
            )
            .join("")}
        </div>
      </div>
    </div>\`;
  }

  function teamPanelMarkup(pod) {
    return \`<div class="weflair-demand-team__detail-shell"><div class="weflair-demand-team__copy-block"><p class="weflair-demand-team__panel-eyebrow">\${pod.eyebrow}</p><h3 class="h4">\${pod.title}</h3><p class="weflair-demand-team__panel-body">\${pod.body}</p><div class="weflair-demand-team__avatars">\${pod.roles
      .map((role) => \`<div class="weflair-demand-team__avatar" style="background-image: url('\${role.img}')" title="\${role.label}"></div>\`)
      .join("")}</div>\${teamLinkMarkup(
      pod.linkLabel,
      pod.linkHref
    )}</div>\${teamPlaceholderMarkup(pod)}</div>\`;
  }

  `;
    fs.writeFileSync('public/weflair-hero.js', pre + replacement + post);
    console.log("Replaced successfully!");
} else {
    console.log("Could not find start or end index!");
    console.log("Start Index:", startIndex);
    console.log("End Index:", endIndex);
}
