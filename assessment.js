const questions = [
  {
    title: "Who do you primarily sell to?",
    options: ["Enterprise SaaS / Tech", "Mid-Market Services / Agencies", "SMB / High-Volume", "E-commerce / D2C"]
  },
  {
    title: "What is your Average Contract Value (ACV)?",
    options: ["Under $5k", "$5k - $20k", "$20k - $50k", "$50k+"]
  },
  {
    title: "How do you currently handle outbound?",
    options: ["Founder-led sales", "In-house SDRs / BDRs", "Outsourced Agency", "No outbound right now"]
  },
  {
    title: "What is your primary bottleneck?",
    options: ["Not enough leads", "Low reply rates", "Poor data quality", "Manual CRM updates taking too much time"]
  },
  {
    title: "Are you ready to invest in technical infrastructure?",
    options: ["Yes, we need a scalable system", "We just want a quick list of leads", "Not sure, need to learn more"]
  }
];

let currentQuestion = 0;
let answers = [];

function renderQuestion() {
  const container = document.getElementById('assessment-container');
  if (!container) return;

  if (currentQuestion >= questions.length) {
    // Show completion state
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <div style="width: 64px; height: 64px; background: rgba(34,197,94,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: #3EFF68;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 16px;">System Mapped.</h3>
        <p style="color: rgba(246,243,238,0.7); margin-bottom: 24px;">Based on your answers, we see clear opportunities to optimize your signal-based outbound and CRM architecture.</p>
        <a href="/contact.html" class="btn" style="background: #3EFF68; color: #0A0A0F; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-block;">Get Your Custom Breakdown</a>
      </div>
    `;
    return;
  }

  const q = questions[currentQuestion];
  const progress = Math.round((currentQuestion / questions.length) * 100);

  let html = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.85rem; color: #3EFF68; font-weight: 600; letter-spacing: 1px;">
      <span>QUESTION ${currentQuestion + 1} OF ${questions.length}</span>
      <span>${progress}% COMPLETED</span>
    </div>
    <h3 style="color: #F5F5F7; font-size: 1.5rem; font-weight: 600; margin-bottom: 24px;">${q.title}</h3>
    <div style="display: flex; flex-direction: column; gap: 12px;">
  `;

  q.options.forEach((opt, idx) => {
    html += `
      <button onclick="answerQuestion(${idx})" style="width: 100%; text-align: left; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #F5F5F7; font-size: 1rem; cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(34,197,94,0.1)'; this.style.borderColor='rgba(34,197,94,0.3)';" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='rgba(255,255,255,0.1)';">
        ${opt}
      </button>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

window.answerQuestion = function(optionIndex) {
  answers.push({
    question: questions[currentQuestion].title,
    answer: questions[currentQuestion].options[optionIndex]
  });
  
  const container = document.getElementById('assessment-container');
  container.style.opacity = '0.5';
  
  setTimeout(() => {
    currentQuestion++;
    renderQuestion();
    container.style.opacity = '1';
  }, 200);
};

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion();
});
