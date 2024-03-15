const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

/* time to connect our db to our app */
mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(5050)