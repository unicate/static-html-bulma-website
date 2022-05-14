const replace = require('replace-in-file');

const PUBLIC_HTML_PATH = './public/**/*.html';
const VERSION = require('../../package.json').version;
const VERSION_STRING = 'V' + VERSION + '-' + Math.floor(Date.now()/1000);

/**
 * Replace Version in Script tags and style includes.
 */
replace.sync({files: PUBLIC_HTML_PATH, from: /@VERSION@/g, to: VERSION_STRING});
replace.sync({files: PUBLIC_HTML_PATH, from: /bundle.js/g, to: 'bundle-'+VERSION_STRING+'.js'});
replace.sync({files: PUBLIC_HTML_PATH, from: /styles.css/g, to: 'styles-'+VERSION_STRING+'.css'});

/**
 * CSS
 */
const fs = require('fs');

fs.rename('./public/dist/css/styles.css', './public/dist/css/styles-' + VERSION_STRING + '.css', function (err) {
    if (err) console.log('ERROR: ' + err);
});

/**
 * JS
 */
fs.rename('./public/dist/js/bundle.js', './public/dist/js/bundle-' + VERSION_STRING + '.js', function (err) {
    if (err) console.log('ERROR: ' + err);
});