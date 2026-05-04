const fs = require('fs');
let code = fs.readFileSync('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/build_checklists.cjs', 'utf8');

// I will just completely replace the HTML generation part, and update some data text.
let newHTMLGen = 

Object.keys(data).forEach((key, index) => {
  const pData = data[key];
  const isActive = index === 0 ? 'is-active' : '';
  html += \\\n<div class="chk-content \" id="content-\">\;
  
  pData.sections.forEach((sec, sIdx) => {
    html += \<div class="chk-section">
      <h2 class="chk-section__title">0\. \</h2>\;
    
    sec.items.forEach((item, iIdx) => {
      
      let questionText = item.q;
      // if it doesn't end with a question mark, make it a question
      if (!questionText.endsWith('?')) {
        // try to make it a question logically, or just append ?
        if (questionText.startsWith('Conversions are')) questionText = 'Are ' + questionText.charAt(0).toLowerCase() + questionText.slice(1);
        else if (questionText.startsWith('All extensions')) questionText = 'Are ' + questionText.charAt(0).toLowerCase() + questionText.slice(1);
        else if (questionText.startsWith('You')) questionText = 'Are ' + questionText.charAt(0).toLowerCase() + questionText.slice(1);
        else if (questionText.startsWith('Using')) questionText = 'Are you ' + questionText.charAt(0).toLowerCase() + questionText.slice(1);
        else if (questionText.startsWith('Regularly')) questionText = 'Are you ' + questionText.charAt(0).toLowerCase() + questionText.slice(1);
        // default fallback
        
        if(!questionText.startsWith('Are') && !questionText.startsWith('Do ') && !questionText.startsWith('Is ')) {
           // just add ? at end
        }
        questionText = questionText + '?';
      }

      html += \
      <div class="chk-item">
        <div class="chk-item__header">
          <h3 class="chk-item__title"><span style="color:#03dac5; margin-right:0.5rem; font-weight:600;">\.\</span> \</h3>
          <div class="chk-options">
            <button class="chk-option-btn state-yes" onclick="answer(this, 'yes', '\-\-\')">Yes</button>
            <button class="chk-option-btn state-no" onclick="answer(this, 'no', '\-\-\')">No</button>
          </div>
        </div>
        <div class="chk-result-wrapper" id="wrapper-\-\-\">
            <div class="chk-result is-good" id="result-yes-\-\-\">
            <strong style="color:#03dac5; display:block; margin-bottom:0.25rem;">Best Practice Confirmed</strong>
            <div id="compliment-\-\-\"></div>
            </div>
            <div class="chk-result is-bad" id="result-no-\-\-\">
            <strong style="color:#ff3e68; display:block; margin-bottom:0.25rem;">Fix Required</strong> 
            \
            </div>
        </div>
      </div>\;
    });
    html += \</div>\;
  });
  
  html += \\\n</div>\;
});
;

code = code.replace(/Object\.keys\(data\)\.forEach\(\(key\, index\) \=\> \{[\s\S]*?html \+\= \\\n<\/div>\;\n\}\);/, newHTMLGen);

fs.writeFileSync('C:/Users/sam/Desktop/vscode-weflair/weflair-clean/build_checklists.cjs', code);

