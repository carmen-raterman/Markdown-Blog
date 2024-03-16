const mongoose = require('mongoose')
//adding slugify to convert our title into a url friendly slug to use
const slugify = require('slugify')
//adding marked to create markdown and turn it into html
const marked = require('marked')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now /* gives current date as 'Created At' */
    },
    slug: {
      type: String,
      required: true,
      unique: true  
    }
})

//some before attributes
articleSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true }) //this step makes the title lowercase and also removes any special characters (like a colon) that might be in the title
        //we set this up to create a slug from our title for every time we validate
    }

    next();
})

module.exports = mongoose.model('Article', articleSchema)