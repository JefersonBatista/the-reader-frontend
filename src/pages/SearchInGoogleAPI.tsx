import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Dialog, Input, Typography } from "@mui/material";

import { Book, searchBook } from "../services/google-books-api";
import mainStyles from "../styles/mainStyles";
import { Header, BookCard, AddReading } from "../components";

export default function SearchInGoogleAPI() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("Uncle Bob");
  const [foundBooks, setFoundBooks] = useState<Book[]>([]);
  const [addDialog, setAddDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  async function getBooks() {
    setLoading(true);

    if (!searchQuery) {
      return;
    }

    const response = await searchBook(searchQuery);

    const books: Book[] = response.data.items
      .slice(0, 10)
      .map((item: any) => item.volumeInfo)
      .map((info: any) => {
        const { title, authors, pageCount, imageLinks } = info;
        const author = authors?.join(", ");
        const imageUrl = imageLinks?.thumbnail;
        return { title, author, numPages: pageCount, imageUrl };
      });
    setFoundBooks(books);

    setLoading(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    getBooks();
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Box sx={mainStyles.main}>
      <Header />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        <Input
          placeholder="Digite para pesquisar..."
          value={searchQuery}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Pesquisar
        </Button>
      </Box>

      <Typography sx={mainStyles.sectionTitle}>
        {loading
          ? "Carregando..."
          : foundBooks.length === 0
          ? "Sua busca não retornou nenhum resultado :("
          : "Qual desses livros você começou a ler?"}
      </Typography>

      <Box sx={mainStyles.section}>
        {foundBooks.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            startReading={() => {
              setSelectedBook(book);
              setAddDialog(true);
            }}
          />
        ))}
      </Box>

      <Dialog open={addDialog}>
        <AddReading
          closeDialog={() => {
            setAddDialog(false);
            navigate("/main");
          }}
          cancel={() => {
            setAddDialog(false);
          }}
          readingIntentionId={0}
          initialValue={{ ...selectedBook } as Book}
        />
      </Dialog>
    </Box>
  );
}
