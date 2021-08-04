const {readFileSync,writeFileSync}=require('fs')

const first =readFileSync('./content/subfolder/first.txt')
const second =readFileSync('./content/subfolder/second.txt')

writeFileSync(
    './content/resync.txt',
    `Here is the result : ${first} , ${second}`, {flag:'a'}
)