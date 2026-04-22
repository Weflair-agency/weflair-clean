const fs = require('fs');
let html = fs.readFileSync('services/performance-design.html', 'utf8');

html = html.replace('</style>\r\n\r\n</section>', '</style>\r\n       </div>\n     </div>\n    </section>');
html = html.replace('</style>\n\n</section>', '</style>\n       </div>\n     </div>\n    </section>');

fs.writeFileSync('services/performance-design.html', html);
console.log('Fixed tags.');
