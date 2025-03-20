const express = require('express');
const { postABook , getAllBooks , getSingleBook , updateData , deleteBook} = require('./book.controller');
const router = express.Router();

// post a book
router.post("/create-book", postABook)

// Get all books
router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook )

// Update a book endpoint
router.put("/edit/:id", updateData)

//Delete a Book
router.delete("/delete/:id" , deleteBook)

module.exports =router;