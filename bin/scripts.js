#!/usr/bin/env node

const childProcess = require('child_process')
const path = require('path')
const chalk = require('chalk')
var emoji = require('node-emoji')
const helpers = require('../scripts/helpers')
const ownPath = path.dirname(
  require.resolve(path.join(__dirname, '..', 'package.json'))
)

const args = helpers.getArgsObject()

const cmds = ['release', 'changelog']

const cmd = cmds.find(c => Object.keys(args).some(key => key === c))

const release = require(`${ownPath}/scripts/release`)
const binFolder = `${ownPath}/node_modules/.bin`

switch (cmd) {
  case 'release':
    console.log(
      'Preparing release...',
      emoji.get('hand_with_index_and_middle_fingers_crossed')
    )
    release(ownPath)
    console.log(emoji.get('sunglasses'), chalk.green('Release process done :)'))
    return
  case 'changelog':
    require(`${ownPath}/scripts/changelog`)
    return
  default:
    console.log(
      emoji.get('sos'),
      chalk.red('You sould to use a valid comand as first parameter: ' + cmds)
    )
}
