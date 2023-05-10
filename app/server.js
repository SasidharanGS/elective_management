console.log("Hello world!")
const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    console.log("Were here!")
    // res.send("The most generic send, generally used for testing purposes")
    // res.sendStatus(500)
    // res.status(500).send("When we wanna send a message along with the status code")
    // res.download("server.js")
    // res.json({message: "Error"})
    res.render("index", {text: "Romans, Countrymen, lend me your ears.."})    
})

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.listen(3003)