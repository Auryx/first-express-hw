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
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
        <h3><a href="/98">Take one down, pass it around</a></h3>`)
})
app.get("/:number_of_bottles", (req, res) => {
    res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
        <h3><a href="/${(req.params.number_of_bottles - 1)}">Take one down, pass it around</a></h3>`)
})
///////////////////////////
// Server Listener
/////////////////////////// 
app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
})