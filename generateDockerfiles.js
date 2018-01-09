function run() {
  const fs = require('fs');
  const mustache = require('mustache');
  const config = require('./config.json');

  const template = fs.readFileSync('Dockerfile.template', 'utf8');
  mustache.parse(template);

  for (const dockerfile of config.dockerfiles) {
    const view = {
      ...dockerfile,
      anyInstructions: !!dockerfile.extraInstructions
    };
    const rendered = mustache.render(template, view);
    const name = `out/Dockerfile.${dockerfile.tag}`
    fs.writeFileSync(name, rendered, { encoding: 'utf8' });
    console.log(`Generated ${name}`);
  }
}

if (require.main === module) {
  run();
}
