
//Bu bölümde async yöntemi anlatılmıştır. Kod bloğu sıralı çalışmak yerine işlemi ilk biteni consola yazdırmıştır. 
const {readFile,writeFile}=require('fs')

console.log("start")
readFile('./content/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile('./content/error-file.txt',`Content : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log('writefile is error')
                return
            }
            console.log("done with this task")
        })
    })
  }
)
console.log("starting next task")