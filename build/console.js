const chalk = require('chalk')

const log = console.log
// const underline = chalk.underline

const info = chalk.cyan
const bgInfo = chalk.white.bgCyan
exports.logInfo = (text) => log(`${bgInfo(' INFO ')} ${info(text)}\n`)

const success = chalk.green
const bgSuccess = chalk.white.bgGreen
exports.logSuccess = (text) => log(`${bgSuccess(' SUCCESS ')} ${success(text)}\n`)

const error = chalk.red
const bgError = chalk.white.bgRed
exports.logError = (text) => log(`${bgError(' ERROR ')} ${error(text)}\n`)