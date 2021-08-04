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