const childProcess = require('child_process');
const helpers = require('./helpers');

const args = helpers.getArgsObject();

const preset = args['preset'] || 'angular';
const stoutput = args['stoutput'];
// This will overwrite any previous changelog if exist.
// If you first time use this tool and want to generate all previous changelog, matbe will be good
const entire = args['entire'];

let parameters = `-p ${preset} -i CHANGELOG.md`;
if (!stoutput) {
  parameters += ' -s';
}

if (entire) {
  parameters += ' -r 0';
}

childProcess.execSync(
  `${__dirname}/../node_modules/.bin/conventional-changelog ${parameters}`,
  {
    cwd: process.env.PWD,
    stdio: 'inherit',
  }
);
