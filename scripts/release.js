const path = require('path')
const helpers = require('./helpers')
const ownPath = path.dirname(
  require.resolve(path.join(__dirname, '..'))
)

const args = helpers.getArgsObject()

const isPre = !!args.pre || false
const binFolder = `${ownPath}/node_modules/.bin`
const childProcess = require('child_process')

// release-it use GITHUB_TOKEN to create a release in github
// You need to add to your process.env your GITHUB_TOKEN
// Then, in your project root you should add an .env file with:
// GITHUB_TOKEN=32423434322342335325....
// Doc release-it: https://github.com/release-it/release-it#github-releases
// Aditional doc to understand it better: https://github.com/dwyl/env2
const release = () => {
  const preParameter = isPre ? '--preRelease=pre' : ''

  childProcess.execSync(
    `${binFolder}/env-cmd ./.env.release ${binFolder}/release-it ${preParameter}`,
    { 
      cwd: process.env.PWD,
      stdio: 'inherit'
    }
  )
}

module.exports = release
