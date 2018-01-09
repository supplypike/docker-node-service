const fs = require('fs');
const mustache = require('mustache');
const config = require('./config.json');

const templateFile = fs.readFileSync('Dockerfile.template', 'utf8');
mustache.parse(templateFile);

for (const dockerfile of config.dockerfiles) {
  const rendered = mustache.render(templateFile, dockerfile);
  const name = `Dockerfile.${dockerfile.tag}`
  fs.writeFileSync(name, rendered, { encoding: 'utf8' });
  console.log(`Generated ${name}`);
}
