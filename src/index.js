module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(item => !isNaN(item[0] - item[0]) ? `${item[0]}${item[1]}` : `\\${item[0]}\\${item[1]}`)
  let regex = new RegExp(`${bracketsConfig.join('|')}`, 'g')

  while (regex.test(str)) {
    str = str.replace(regex, '')
  }

  return !str.length
}