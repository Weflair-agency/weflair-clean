import { chromium } from 'playwright';

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        
        console.log("Going to 127.0.0.1:5995/services/go-to-market-systems.html...");
        await page.goto('http://127.0.0.1:5995/services/go-to-market-systems.html', { waitUntil: 'load' });
        await page.waitForTimeout(2000);
        
        console.log("Evaluating...");
        const info = await page.evaluate(() => {
            const body = document.body;
            const html = document.documentElement;
            
            // Check overflow
            const htmlStyle = window.getComputedStyle(html);
            const bodyStyle = window.getComputedStyle(body);
            
            // Checking the wheel events
            const middleEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
            
            return {
                html: {
                    h: html.clientHeight,
                    sh: html.scrollHeight,
                    overflowY: htmlStyle.overflowY,
                    overflow: htmlStyle.overflow,
                    position: htmlStyle.position,
                    height: htmlStyle.height
                },
                body: {
                    h: body.clientHeight,
                    sh: body.scrollHeight,
                    overflowY: bodyStyle.overflowY,
                    overflow: bodyStyle.overflow,
                    position: bodyStyle.position,
                    height: bodyStyle.height
                },
                middleElement: middleEl ? middleEl.className || middleEl.tagName : 'None',
                mainBounds: document.querySelector('main') ? document.querySelector('main').getBoundingClientRect().toJSON() : null
            };
        });
        
        console.log(JSON.stringify(info, null, 2));
        
        // Take screenshot
        await page.screenshot({ path: 'weflair-clean/debug-scroll.png', fullPage: true });
        console.log("Screenshot saved.");
        
        await browser.close();
    } catch (e) {
        console.error("Error:", e);
    }
})();