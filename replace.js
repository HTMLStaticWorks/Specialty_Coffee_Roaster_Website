const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let original = content;

    // header menus
    content = content.replace(/<a href="about\.html" class="nav-link([^"]*)">\s*About\s*<\/a>/g, '<a href="about.html" class="nav-link$1">Origin</a>');
    
    content = content.replace(/<a href="gallery\.html" class="nav-link([^"]*)">\s*Gallery\s*<\/a>/g, '<a href="gallery.html" class="nav-link$1">Moments</a>');
    
    content = content.replace(/<a href="contact\.html" class="nav-link([^"]*)">\s*Contact\s*<\/a>/g, '<a href="contact.html" class="nav-link$1">Connect</a>');

    // signUp button replacements
    content = content.replace(/<a href="register\.html" class="btn btn-primary([^"]*)" aria-label="Sign Up" title="Sign Up">([^<]*)<\/a>/gi, '<a href="register.html" class="btn btn-primary$1" aria-label="Sign Up" title="Sign Up">SignUp</a>');
    
    if (content !== original) {
        fs.writeFileSync(f, content);
        console.log(`Updated ${f}`);
    }
});
console.log('All replacements completed successfully.');
