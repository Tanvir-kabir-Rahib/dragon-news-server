const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 4000;
app.use(cors())
const categories = require("./data/categories.json")

app.get("/", (req, res) => {
    res.send("hello world news api running")
})

app.get("/new-categories", (req, res)=>{
    res.send(categories)
})

app.listen(port, () => {
    console.log("example running on", port)
})