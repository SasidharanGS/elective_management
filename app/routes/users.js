// This is essentially a mini application inside the application

const express = require("express")
const router = express.Router()

//The router works exactly the same as an app

router.get("/", (req, res) =>{
    res.send("User List")
})

// router.get("/new", (req, res) =>{
//     res.send("New form!")
// })

// router.get("/:id", (req, res) =>{
//     res.send(`Get user with ID ${req.params.id}!`)
// })

// router.put("/:id", (req, res) =>{
//     res.send(`Update user with ID ${req.params.id}!`)
// })

// router.delete("/:id", (req, res) =>{
//     res.send(`Delete user with ID ${req.params.id}!`)
// })

//A MORE CONCISE WAY OF DOING THE ABOVE IS:
router.route("/:id")
.get((req, res) =>{
    res.send(`Get user with ID ${req.params.id}!`)
})
.put((req, res) =>{
    res.send(`Update user with ID ${req.params.id}!`)
})
.delete((req, res) =>{
    res.send(`Delete user with ID ${req.params.id}!`)
})

//Remember that the routing goes top to bottom on this page
//So put the strongest condition last!

module.exports = router