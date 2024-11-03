import express, { Request, Response } from "express";
import dbService from "./dbService";

///
const app = express();
const PORT = 3000;

///allow to use the body from a post request
app.use(express.json());

const books = [
  { title: "A very good book", author: "Bob Alisson", published: true },
  { title: "Another book", author: "Jim Jimmyson", published: false },
];

app.get("/books", (req: Request, res: Response) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const foundAuthor = books[Number(id)];
  res.status(200).json(foundAuthor);
});

app.post("/books", async (req: Request, res: Response) => {
  const { title, author, published } = req.body;
  const newBook = { title: title, author: author, published: published };
  await dbService.insertBook(newBook);
  const allBooks = await dbService.getBooks();
  res.status(201).json(allBooks);
});

app.put("/books/:id", (req: Request, res: Response) => {
  const { title, author, published } = req.body;
  const { id } = req.params;
  const updatedBook = { title: title, author: author, published: published };
  books[Number(id)] = updatedBook;
  res.status(200).json(books);
});

app.delete("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  books.splice(Number(id), 1);
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
