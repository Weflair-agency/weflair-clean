
const fs = require('fs');

const path1 = 'resources/checklists.html';
const path2 = 'dist/resources/checklists.html';
const html = fs.readFileSync(path1, 'utf8');

const newCSS = \
    .chk-page { background: #050508; color: #F8F8FA; font-family: 'Onest', 'Inter', sans-serif; overflow-x: hidden; }
    
    /* ANIMATIONS */
    @keyframes slideUpFade { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes floatingLight { 0% { transform: translate(0, 0) rotate(0deg); filter: blur(80px) opacity(0.8); } 50% { transform: translate(2%, 4%) rotate(5deg); filter: blur(100px) opacity(1); } 100% { transform: translate(0, 0) rotate(0deg); filter: blur(80px) opacity(0.8); } }
    @keyframes staggerFade { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes shimmer { 100% { transform: translateX(100%); } }
    @keyframes popClick { 0% { transform: scale(1); } 50% { transform: scale(0.95); } 100% { transform: scale(1); } }

    /* HERO - AESTHETIC POLISH */
    .chk-hero { position: relative; padding: clamp(10rem, 15vw, 14rem) 2rem clamp(5rem, 10vw, 8rem); text-align: center; border-bottom: 1px solid rgba(255,255,255,0.03); overflow: hidden; background: radial-gradient(circle at 50% -20%, rgba(34, 197, 94, 0.08), transparent 70%); }
    .chk-hero::before { content: ''; position: absolute; inset: -20%; background: radial-gradient(circle at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 50%); filter: blur(80px); animation: floatingLight 15s ease-in-out infinite; z-index: 0; pointer-events: none; }
    .chk-hero__inner { position: relative; z-index: 1; max-width: 60rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .chk-hero__title { font-size: clamp(3.2rem, 6vw, 5.5rem); line-height: 1.05; font-weight: 600; letter-spacing: -0.04em; margin: 0 0 1.5rem; text-wrap: balance; font-family: 'Space Grotesk', sans-serif; color: #ffffff; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
    .chk-hero__sub { font-size: clamp(1.1rem, 1.5vw, 1.25rem); line-height: 1.6; color: rgba(246,243,238,0.7); max-width: 50rem; margin: 0 auto; text-wrap: balance; font-weight: 500; }

    /* LAYOUT */
    .chk-layout { max-width: 86rem; margin: 0 auto; display: flex; flex-direction: column; gap: 3rem; padding: clamp(4rem, 6vw, 6rem) 2rem; align-items: center; position: relative; z-index: 2; }

    /* TABS - SLEEK PILLS */
    .chk-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-bottom: 2rem; background: rgba(5,5,8,0.8); padding: 0.5rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(12px); box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3); transform: translateY(-20px); animation: slideUpFade 0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .chk-tab-btn { background: transparent; border: 1px solid transparent; color: rgba(246,243,238,0.5); padding: 0.85rem 1.6rem; border-radius: 999px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); font-family: inherit; letter-spacing: 0.02em; }
    .chk-tab-btn:hover { color: #fff; background: rgba(255,255,255,0.04); }
    .chk-tab-btn.is-active { background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ADE80; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15); }

    /* PROGRESS BAR - FLOATING NEON */
    .chk-progress-wrap { position: sticky; top: 6rem; z-index: 100; background: rgba(13, 13, 20, 0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); padding: 1.25rem 2rem; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.03); margin-bottom: 3rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-10px); animation: slideUpFade 0.8s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; width: 100%; max-width: 54rem; transition: transform 0.3s ease, border-color 0.3s ease; }
    .chk-progress-wrap:hover { border-color: rgba(34,197,94,0.35); }
    .chk-progress-text { font-size: 1.05rem; font-weight: 600; color: #fff; white-space: nowrap; letter-spacing: -0.01em; }
    .chk-progress-bar { flex: 1; height: 10px; background: rgba(0,0,0,0.6); border-radius: 999px; overflow: hidden; position: relative; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.04); }
    .chk-progress-fill { position: absolute; left: 0; top: 0; height: 100%; background: linear-gradient(90deg, #166534, #22C55E, #4ADE80); border-radius: 999px; width: 0%; transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 0 16px rgba(34,197,94,0.7); }
    .chk-progress-fill::after { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); transform: translateX(-100%); animation: shimmer 2s infinite; }
    .chk-progress-score { font-size: 1.8rem; font-weight: 700; color: #4ADE80; font-family: 'Space Grotesk', sans-serif; min-width: 4.5rem; text-align: right; text-shadow: 0 0 20px rgba(34,197,94,0.4); }

    /* CHECKLIST CONTAINER & SECTION HEADERS */
    .chk-container { width: 100%; max-width: 54rem; }
    .chk-content { display: none; }
    .chk-content.is-active { display: block; animation: staggerFade 0.5s ease-out forwards; }
    .chk-section-title { font-size: 1.4rem; font-weight: 600; color: #4ADE80; margin: 3.5rem 0 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(34,197,94,0.15); letter-spacing: -0.02em; font-family: 'Space Grotesk', sans-serif; position: relative; }
    .chk-section-title::after { content: ''; position: absolute; left: 0; bottom: -1px; height: 1px; width: 60px; background: #22C55E; box-shadow: 0 0 10px #22C55E; }

    /* ELEVATED CHECKLIST ITEMS */
    .chk-item { background: rgba(20,20,27,0.75); border: 1px solid rgba(255,255,255,0.06); border-radius: 1.25rem; padding: 1.75rem 2.25rem; margin-bottom: 1.25rem; display: grid; grid-template-columns: 1fr auto; gap: 2.5rem; align-items: start; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); box-shadow: 0 4px 20px rgba(0,0,0,0.3); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); position: relative; overflow: hidden; }
    .chk-item::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%); pointer-events: none; }
    .chk-item:hover { border-color: rgba(34,197,94,0.3); background: rgba(25,25,35,0.9); transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(34,197,94,0.1); }
    
    .chk-item__left { display: flex; flex-direction: column; gap: 0.5rem; position: relative; z-index: 1; }
    .chk-item__title { font-size: 1.2rem; font-weight: 600; color: #fff; margin: 0; line-height: 1.4; letter-spacing: -0.01em; transition: color 0.3s ease; }
    .chk-item:hover .chk-item__title { color: #4ADE80; }
    .chk-item__desc { font-size: 0.95rem; color: rgba(246,243,238,0.6); line-height: 1.5; margin: 0; font-family: 'Onest', 'Inter', sans-serif; }
    
    .chk-item__tip-toggle { background: none; border: none; padding: 0.4rem 0.85rem; margin-top: 0.75rem; color: #4ADE80; font-size: 0.85rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; border-radius: 99px; background: rgba(34,197,94,0.08); transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); align-self: flex-start; border: 1px solid rgba(34,197,94,0.15); }
    .chk-item__tip-toggle:hover { background: rgba(34,197,94,0.2); transform: translateY(-1px); border-color: rgba(34,197,94,0.3); box-shadow: 0 4px 12px rgba(34,197,94,0.1); }
    .chk-item__tip-toggle svg { width: 1.1rem; height: 1.1rem; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
    .chk-item__tip-toggle.is-open svg { transform: rotate(180deg); }
    
    .chk-item__tip-content { display: none; margin-top: 1.25rem; padding: 1.5rem 1.75rem; background: rgba(5,5,8,0.6); border-left: 2px solid #22C55E; border-radius: 0 0.75rem 0.75rem 0; font-size: 0.95rem; color: rgba(246,243,238,0.8); line-height: 1.7; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5); backdrop-filter: blur(10px); }

    .chk-link { color: #4ADE80; text-decoration: none; border-bottom: 1px solid rgba(74,222,128,0.4); text-underline-offset: 2px; transition: all 0.2s ease; }
    .chk-link:hover { color: #fff; border-bottom-color: #fff; }

    .checklist-question-image { max-width: 100%; border-radius: 0.75rem; margin-top: 1.25rem; border: 1px solid rgba(255,255,255,0.06); box-shadow: 0 10px 30px rgba(0,0,0,0.4); display: block; }
    .checklist-question-image.is-small { max-width: 500px; }

    /* MODERN YES/NO SWITCHES */
    .chk-toggle { display: flex; gap: 0.35rem; background: rgba(5,5,8,0.9); border-radius: 0.75rem; padding: 0.35rem; border: 1px solid rgba(255,255,255,0.05); position: relative; z-index: 1; box-shadow: inset 0 4px 8px rgba(0,0,0,0.6); }
    .chk-toggle-btn { background: transparent; border: none; color: rgba(255,255,255,0.35); padding: 0.65rem 1.5rem; border-radius: 0.5rem; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; font-family: 'Inter', sans-serif; letter-spacing: 0.03em; text-transform: uppercase; }
    .chk-toggle-btn:hover { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.03); }
    
    .chk-toggle-btn.is-yes.is-active { background: #22C55E; color: #050508; box-shadow: 0 4px 15px rgba(34,197,94,0.4); text-shadow: none; animation: popClick 0.3s ease; }
    .chk-toggle-btn.is-no.is-active { background: #EF4444; color: #050508; box-shadow: 0 4px 15px rgba(239,68,68,0.4); text-shadow: none; animation: popClick 0.3s ease; }
    
    /* CTA CAPTURE */
    .chk-cta { margin-top: 5rem; text-align: center; background: radial-gradient(circle at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 60%), rgba(13,13,20,0.85); border: 1px solid rgba(255,255,255,0.06); border-radius: 2rem; padding: clamp(4rem, 8vw, 6rem) 2rem; position: relative; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); transform: translateY(0); transition: transform 0.4s ease, box-shadow 0.4s ease; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
    .chk-cta:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(34,197,94,0.12); border-color: rgba(34,197,94,0.3); }
    .chk-cta::before { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent); }
    .chk-cta__title { font-size: clamp(2.2rem, 4vw, 3.2rem); font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #fff; margin: 0 0 1rem; letter-spacing: -0.03em; text-wrap: balance; text-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .chk-cta__desc { font-size: 1.15rem; color: rgba(246,243,238,0.7); max-width: 44rem; margin: 0 auto 2.5rem; line-height: 1.6; font-weight: 500; font-family: 'Onest', 'Inter', sans-serif; }
    
    @media(max-width: 768px) {
      .chk-progress-wrap { flex-direction: column; gap: 1.25rem; align-items: stretch; text-align: center; padding: 1.5rem; top: 5rem; }
      .chk-progress-score { text-align: center; }
      .chk-item { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
      .chk-tabs { flex-direction: column; border-radius: 1.25rem; padding: 0.75rem; }
      .chk-tab-btn { text-align: center; border-radius: 0.75rem; }
      .chk-toggle { width: 100%; display: grid; grid-template-columns: 1fr 1fr; }
      .chk-toggle-btn { text-align: center; padding: 0.8rem; }
    }
\

const newHTML = html.replace(/<style>[\s\S]*?<\/style>/, \<style>\n\\n  </style>\);

fs.writeFileSync(path1, newHTML);
fs.writeFileSync(path2, newHTML);
console.log('Successfully polished the checklist design!');

