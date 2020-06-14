const fs = require('fs')

// const book = {
//     title: 'O nome do vento',
//     author: 'Felipe'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Felipe'
data.age = 23

const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)