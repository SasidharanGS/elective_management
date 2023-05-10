console.log("Hello friend")

const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    console.log('Here again')
    // res.sendStatus(500)
    // res.status(500).send("A message just tagging along")
    // res.status(500).json({ message: "Error"})
    // res.json({message: "Error"})
    // res.download("server.js")
    res.render("index", { text: "what even is this"})
})

app.listen(3000)