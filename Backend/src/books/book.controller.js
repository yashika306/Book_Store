const Book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching book", error);
    res.status(500).send({ message: "Failed to fetch book" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book  Not Found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book", error);
    res.status(500).send({ message: "Failed to fetch book" });
  }
};

const updateData = async (req, res) => {
    try {
      const {id} = req.params;
      const updatedbook = await Book.findByIdAndUpdate(id , req.body ,{new:true});
      if (!updatedbook) {
        res.status(404).send({ message: "Book  Not Found" });
      }
      res.status(200).send({
        message: "Book updated successfully",
        book: updatedbook
    });
    } catch (error) {
      console.error("Error updating book", error);
      res.status(500).send({ message: "Failed to update book" });
    }
};

const deleteBook =  async (req, res) => {
    try {
      const {id} = req.params;
      const deletedbook = await Book.findOneAndDelete(id);
      if (!deletedbook) {
        res.status(404).send({ message: "Book  Not Found" });
      }
      res.status(200).send({
        message: "Book deleted successfully",
        book: deletedbook
    });
    } catch (error) {
      console.error("Error deleteing book", error);
      res.status(500).send({ message: "Failed to delete book" });
    }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateData,
  deleteBook,
};
