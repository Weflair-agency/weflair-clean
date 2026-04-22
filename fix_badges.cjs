const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const badgesStart = html.indexOf('<div class="weflair-credentials__badges">');
// Find the closing div of the badges section by counting divs
let divCount = 1;
let i = badgesStart + '<div class="weflair-credentials__badges">'.length;
while(divCount > 0 && i < html.length) {
    const nextStart = html.indexOf('<div', i);
    const nextEnd = html.indexOf('</div', i);
    
    if (nextStart !== -1 && nextStart < nextEnd) {
        divCount++;
        i = nextStart + 4;
    } else if (nextEnd !== -1) {
        divCount--;
        i = nextEnd + 6;
    } else {
        break;
    }
}
const badgesEnd = i;

const replacement = `<div class="weflair-credentials__badges" style="transform: scale(1.15); transform-origin: center top;">
            <div class="weflair-credentials__badge-wall">
              <div class="weflair-credentials__badge-row is-wide" aria-label="E-commerce and Paid Media Partnerships">
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/images.png" alt="Shopify Partners badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/images (1).png" alt="Klaviyo Partner badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/660ea0489aeb028f51938bfb_certificate-google-marketing-platform.avif" alt="Google Marketing Platform certification badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/660ea324950fc02759a448b8_certificate-bing-ads.avif" alt="Bing Ads certification badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-round">
                  <img src="/66fd0f9805003e034cd7ee0c_4.webp" alt="LinkedIn Marketing Insider badge" loading="lazy" decoding="async">
                </figure>
              </div>
              <div class="weflair-credentials__badge-row is-mixed" aria-label="Certifications and awards">
                <figure class="weflair-credentials__badge-figure is-shield">
                  <img src="/66fd0f9881702f8222596258_5.webp" alt="Microsoft Advertising Certified Expert badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-round">
                  <img src="/dfsv.svg" alt="Google certification badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-round">
                  <img src="/edfrgt.svg" alt="Marketing certification badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-round">
                  <img src="/66fd0f9dde617cc8161ceaf0_21.webp" alt="Digital Marketing and Certification badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/semrush-agency-partner-badge.png" alt="Semrush Certified Agency Partner badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-wide">
                  <img src="/Screenshot 2026-04-20 151006.png" alt="GoodFirms excellent rating badge" loading="lazy" decoding="async">
                </figure>
                <figure class="weflair-credentials__badge-figure is-round">
                  <img src="/68de2bf38e268733b6191853_clients-love-us 1-p-500.webp" alt="Clients Love Us badge" loading="lazy" decoding="async">
                </figure>
              </div>
            </div>
          </div>`;

if (badgesStart !== -1) {
    const newHtml = html.substring(0, badgesStart) + replacement + html.substring(badgesEnd);
    fs.writeFileSync('index.html', newHtml, 'utf8');
    console.log("Successfully replaced badges block.");
} else {
    console.log("Could not find badges block.");
}
