const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 4000;
app.use(cors())
const categories = require("./data/categories.json")
const news = require("./data/news.json");
const { response } = require("express");

app.get("/", (req, res) => {
    res.send("hello world news api running")
})

app.get("/new-categories", (req, res) => {
    res.send(categories)
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get("/news", (req, res) => {
    res.send(news)
})

app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === id)
        res.send(selectedCategory)
    }

})

app.listen(port, () => {
    console.log("example running on", port)
})