const fs = require('fs')
const path = require('path')

const ROOT_PATH = process.cwd()
const BASE_PATH = path.resolve(ROOT_PATH, 'node_modules/echarts/lib')
const MODULES_PATH = path.resolve(ROOT_PATH, 'index.js')
const TRAVALSE_DIRS = ['chart', 'component']

// chart && componet both contains below names
// ['parallel', 'radar']
// ensure we only include these names once in `exports.types`
let includeNames = {}

console.log('generating modules to index.js...')
let output = ''
let types = 'exports.types = {'
TRAVALSE_DIRS.forEach(dir => {
  const files = fs.readdirSync(path.resolve(BASE_PATH, dir))
  output += `exports.${dir} = [`
  files.forEach(file => {
    if (file.slice(-3) === '.js') {
      const filename = file.slice(0, -3)
      output += `\n  '${filename}',`
      if (!includeNames[filename]) {
        types += `\n  ${filename}: '${filename}',`
        includeNames[filename] = true
      }
    }
  })
  output = addCloseSquare(output, ']')
})
types = addCloseSquare(types, '}')
output += types

function addCloseSquare (str, symbol) {
  // remove last array comma
  str = str.slice(0, -1)
  str += `\n${symbol}\n`
  return str
}

fs.writeFileSync(MODULES_PATH, output)
console.log('index.js generated success!')
