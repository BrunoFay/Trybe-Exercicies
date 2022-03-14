const fs = require('fs').promises

 function createFile(fileName, content) {
if(fileName && typeof(fileName)!== 'object' && content && typeof(content)!== 'object'){
  fs.writeFile(`${fileName}.txt`,content)
  return 'ok' 
}
else {
  throw new TypeError('both parameters need to be filled')
}
}


module.exports = createFile