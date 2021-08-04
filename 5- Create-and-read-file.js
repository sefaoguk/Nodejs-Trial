const {readFileSync,writeFileSync} = require('fs')
 
const first=readFileSync('./content/subfolder/first.txt','utf8')
const second=readFileSync('./content/subfolder/second.txt','utf8')

writeFileSync("./content/resync.txt",`here is the result : ${first},${second}`,(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)
})
 //console.log(first,second)

