const fs = require('fs');
const path = require('path');

// Copy partners.html to partners/index.html to fix directory 403 error
const partnersHtml = path.join(__dirname, '../out/partners.html');
const partnersIndex = path.join(__dirname, '../out/partners/index.html');

if (fs.existsSync(partnersHtml)) {
  fs.copyFileSync(partnersHtml, partnersIndex);
  console.log('✓ Copied partners.html to partners/index.html');
} else {
  console.log('⚠ partners.html not found');
}
