const fs = require('fs');
let html = fs.readFileSync('services/performance-design.html', 'utf8');

html = html.replace('</style>\r\n\r\n</section>', '</style>\r\n       </div>\r\n     </div>\r\n    </section>');

fs.writeFileSync('services/performance-design.html', html);
console.log('Fixed tags exactly.');
