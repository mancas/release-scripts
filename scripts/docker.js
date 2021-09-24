const childProcess = require('child_process');
const helpers = require('./helpers');
const pjson = require(`${process.env.PWD}/package.json`);

const args = helpers.getArgsObject();

const build = args['pre'] || args['dev'] || 'pro';

let imageName = `${pjson.dockerName}/${pjson.dockerName}:${pjson.name}_v${pjson.version}`;

if (build === 'pre') {
  imageName += '_pre';
} else if (build === 'dev') {
  imageName += '_dev';
}

childProcess.execSync(`docker build -t ${imageName} .`, {
  cwd: process.env.PWD,
  stdio: 'inherit',
});

childProcess.execSync(`docker push ${imageName}`, {
  cwd: process.env.PWD,
  stdio: 'inherit',
});
