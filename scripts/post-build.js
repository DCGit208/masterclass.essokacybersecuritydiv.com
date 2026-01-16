const fs = require('fs');
const path = require('path');

// Copy HTML files to directory index.html to fix 403 errors
const copies = [
  { from: 'partners.html', to: 'partners/index.html' },
  { from: 'admin.html', to: 'admin/index.html' },
  { from: 'admin/login.html', to: 'admin/login/index.html' },
  { from: 'admin/dashboard.html', to: 'admin/dashboard/index.html' },
];

copies.forEach(({ from, to }) => {
  const fromPath = path.join(__dirname, '../out', from);
  const toPath = path.join(__dirname, '../out', to);
  
  if (fs.existsSync(fromPath)) {
    // Create directory if it doesn't exist
    const dir = path.dirname(toPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(fromPath, toPath);
    console.log(`✓ Copied ${from} to ${to}`);
  } else {
    console.log(`⚠ ${from} not found`);
  }
});

