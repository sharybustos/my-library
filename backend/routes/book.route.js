let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let bookSchema = require('../models/Book')

// CRUD

// Create
//localhost:5000/books/create
router.route('/create').post((req, res, next) => {
    bookSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Books
//localhost:5000/books?userId=1234
router.route('/').get((req, res, next) => {
    bookSchema.find({ userId: req.query.userId }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Books
//localhost:5000/books/1
router.route('/:id').get((req, res, next) => {
    bookSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Books
//localhost:5000/books/edit/2
router.route('/edit/:id').put((req, res, next) => {
    bookSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Student updated successfully !')
            res.json(data)
        }
    })
})

// Delete Books
//localhost:5000/books/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router