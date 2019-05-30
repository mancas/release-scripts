const getArgsObject = () => {
  const args = {}
  process.argv.forEach(function (par) {
    const keyValueArr = par.split('=')
    args[keyValueArr[0]] = keyValueArr.length === 2 ? keyValueArr[1] : keyValueArr[0]
  })
  return args
}

module.exports = {
  getArgsObject,
}
