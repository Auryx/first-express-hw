////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
const app = express()
//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get("/greeting", (req, res) => {
    console.log(req.params)
    res.send(`<h1>"Hey there, pardner!!"</h1>`)
})

app.get("/greeting/:name", (req, res) => {
    console.log(req.params.name) // req.params = url params
    res.send(`Good tidings unto thee, ${req.params.name}`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    let total = (req.params.total)
    let tipPercentage = (req.params.tipPercentage)
    let final = total * (tipPercentage / 100)
    res.send(`Your tip will be $${final}`)
})

app.get("/magic/:question", (req, res) => {
    let randInt = Math.floor(Math.random() * 19)
    const eightBall = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it", 
        "As I see it yes",
        "Most likely", 
        "Outlook good",
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later",
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again",
        "Don't count on it", 
        "My reply is no", 
        "My sources say no",
        "Outlook not so good", 
        "Very doubtful"
    ] 
    // THANKS DAVID!!!
    res.send(`<h1>${req.params.question}?</h1>
    <h1>${eightBall[randInt]}</h1>`)

})

// FIBONACCI
// while x <= fibo num, 
//// if x = fibo num
////// res.send(`is fibonacci`)
//// else
////// res.send (`is not fibo`)
app.get("/fibonacci/:num", (req, res) => {
    let x = 1
    let y = 0
    while (x <= req.params.num) {
        const next = y + x
        console.log(y, x)
        y = x
        console.log(y, x)
        x = next
        console.log(y, x)
        if (x == req.params.num) {
            res.send(`<h3>Very good. It is Fibonacci.</h3>`)
        }  

    }
    res.send(`<h3>Very bad. It is not Fibonacci.</h3>`)
})


///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
})