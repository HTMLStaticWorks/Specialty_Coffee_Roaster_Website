const fs = require('fs');
const files = ['about.html', 'blog.html', 'contact.html', 'gallery.html', 'home2.html', 'index.html', 'menu.html'];
const regex = /<a href=\"register\.html\" class=\"btn btn-primary([^>]*)\" aria-label=\"Sign Up\" title=\"Sign Up\"[^>]*>[\s\S]*?<\/a>/g;
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    let r = c.replace(regex, (m, t) => `<a href=\"register.html\" class=\"btn btn-primary${t}\" aria-label=\"Sign Up\" title=\"Sign Up\">signUp</a>`);
    fs.writeFileSync(f, r);
});
console.log('Done');
