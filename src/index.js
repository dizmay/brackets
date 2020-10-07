module.exports = function check(str, bracketsConfig) {
  let count = 1;
  while(count === 1) {
      let newStr = str;
      bracketsConfig.map(e => str = str.replace(e[0] + e[1], ''));
      if (newStr === str) count = 0;
  }
  return str.length === 0
}
