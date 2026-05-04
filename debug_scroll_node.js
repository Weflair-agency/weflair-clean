const fs = require('fs');
const http = require('http');

const page = fs.readFileSync('weflair-clean/services/go-to-market-systems.html', 'utf-8');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(page + `
    <script>
      setTimeout(() => {
          console.log('body clientHeight', document.body.clientHeight);
          console.log('body scrollHeight', document.body.scrollHeight);
          console.log('html clientHeight', document.documentElement.clientHeight);
          console.log('html scrollHeight', document.documentElement.scrollHeight);
          
          let log = "CSS Overflow:\\n";
          log += "html: " + window.getComputedStyle(document.documentElement).overflow + "\\n";
          log += "body: " + window.getComputedStyle(document.body).overflow + "\\n";
          log += "main: " + window.getComputedStyle(document.querySelector('main')).overflow + "\\n";
          log += "nav-fade pointer-events: " + (document.querySelector('.nav-fade') ? window.getComputedStyle(document.querySelector('.nav-fade')).pointerEvents : 'no nav-fade') + "\\n";
          
          // Check what is catching the wheel event
          let wheelCatcher = null;
          let el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
          log += "Element at center: " + (el ? el.className || el.tagName : 'none') + "\\n";
          
          fetch('http://localhost:8081/log', {
              method: 'POST',
              body: log + '\\n' + 'body scrollH: ' + document.body.scrollHeight + ', clientH: ' + document.body.clientHeight
          });
      }, 500);
    </script>
    `);
}).listen(8080);

const srvr2 = http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log('---- REPORT FROM BROWSER ----');
        console.log(body);
        process.exit(0);
    });
}).listen(8081);

console.log('Servers started on 8080 and 8081.');
