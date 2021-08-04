/*
const get=require('./1-module-export')
console.log(get)
console.log(get.degistir)
*/

/*
const sayHi=require('./2-utils')
sayHi('susan')
sayHi(get.peter)
sayHi(get.jhon)
*/

/*
require('./3-ming-grenade')
*/

/*
const os = require('os')
const user=os.userInfo();
console.log(user) 
*/

/*
const os= require('os')
currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)
*/

/* PATH YOLLARI İLE İLGİLİ İŞLEMLER 

Bulunan path yolunu gösterir
- const path = require('path');
console.log(path.sep)
Bulunduğun dizinden sonraki folderları gösterir
- const filePath = path.join('/content/','subfolder','text.txt');
console.log(filePath)
Bulunduğun yer ve sonrasındaki Tüm dizinleri gösterir.
- const base= path.basename(filePath)
console.log(base)
Bulunduğun yer ve sonrasaındaki dizinleri gösterir ve dosyaları da gösterir.
- const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
*/


/* DOSYAYA YAZMA VE OKUMA

const {readFileSync,writeFileSync} = require('fs')
 
const first=readFileSync('./content/subfolder/first.txt','utf8')
const second=readFileSync('./content/subfolder/second.txt','utf8')

writeFileSync("./content/resync.txt",`here is the result : ${first},${second}`)
 console.log(first,second)
*/


/*
 FS MODULE ASYNC FILE WRITE AND READ

const {readFile,writeFile}=require('fs')

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
            console.log(result)
        })
    })
  }
)
*/


/* FS MODULE SYNC FILE WRITE AND READ
const { readFileSync, writeFileSync}=require('fs')
console.log("start")
const first=readFileSync('./content/subfolder/first.txt',"utf8")
const second=readFileSync('./content/subfolder/second.txt',"utf8")

writeFileSync('./content/resync.txt',`Here is the result: ${first} , ${second}`,
{flag:'a'}
)
console.log('done with this task')
console.log('starting the next one')
*/

/*
const http=require('http')

const server=http.createServer((req,res)=>{
  
    if(req.url==='/'){
        res.write('Welcome to NodeJS')
    }
    else if(req.url==='/about')
    {
        res.write('About History')
    }
    else
    {
        res.end(
            `<h1>Oops!</h1>
            <p> Page not found </p>
            <a href="/">Back to homepage </a>
            `)
    }
    res.end()
})
server.listen(5000);
*/
 

