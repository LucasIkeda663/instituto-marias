// gerar-index.js
// Rode com: node gerar-index.js
// No Netlify, adicione ao build command: node gerar-index.js
const fs   = require('fs');
const path = require('path');

const pastas = ['_noticias', '_eventos'];

pastas.forEach(pasta => {
  const dir = path.join(__dirname, pasta);
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir); return; }
  const arquivos = fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse(); // mais recentes primeiro
  fs.writeFileSync(
    path.join(__dirname, pasta, 'index.json'),
    JSON.stringify(arquivos)
  );
  console.log(`✓ ${pasta}/index.json gerado com ${arquivos.length} arquivo(s)`);
});
