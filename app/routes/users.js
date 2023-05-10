// This is essentially a mini application inside the application

const express = require("express")
const router = express.Router()

//The router works exactly the same as an app

router.get("/", (req, res) =>{
    res.send("User List")
})

router.get("/new", (req, res) =>{
    res.send("New form!")
})

module.exports = router