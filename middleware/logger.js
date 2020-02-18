//Lets create the morgan middleware, but now custom

module.exports = (format) => {
    return (req, res, next) => {
        const ip = req.ip
        const method = req.method
        const url = req.url
        // or you can just destructure the above by doing it this way, const {ip, method,url} = req
        const agent = req.get("user-agent")
                
//we can use parameter defined by our HOF to change the funtionality of our middleware
if(format ===short){
    console.log(`${method} ${url}`)
}
else{
    console.log(`${ip} ${method}  ${url}  ${agent}`)
}
    
next() //this middleware is done, move on to the next piece

//you could also call other middleware instead of next
//  someOtherMiddleware()(req, res, next)
    
    }
   
}