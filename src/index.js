module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;

  bracketsConfig = bracketsConfig.map(item => typeof +item[0] === 'number' ? item[0] + item[1] : `[\\]${item[0]}[\\]${item[1]}`)
  let regex = new RegExp(`${bracketsConfig.join('|')}`, 'g')

  console.log(bracketsConfig, regex)
  
  while (regex.test(str)) {
    str = str.replace(regex, '')
  }
  
  return !str.length
}
