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

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
})