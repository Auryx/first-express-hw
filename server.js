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

///////////////////////////
// Server Listener
///////////////////////////

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
})