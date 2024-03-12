/* Routes related to our articles: show, edit, etc. */
const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.post('/', (req, res) => {

})

module.exports = router