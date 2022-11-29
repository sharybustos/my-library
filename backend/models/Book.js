const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        min: 868,
        required: true,
    },
    readAt: {
        type: Date
    }
}, {
    collection: 'books'
})

module.exports = mongoose.model('Book', bookSchema)