import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Dialog, Typography } from "@mui/material";

import { Book, searchBook } from "../services/google-books-api";
import mainStyles from "../styles/mainStyles";
import { Header, BookCard, AddReading } from "../components";

export default function SearchInGoogleAPI() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [foundBooks, setFoundBooks] = useState<Book[] | null>(null);
  const [addDialog, setAddDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  async function getBooks() {
    const searchQuery = searchParams.get("search-query");
    const response = await searchBook(searchQuery as string);
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
  }

  useEffect(() => {
    getBooks();
  }, []);

  if (foundBooks === null) {
    return (
      <Box sx={mainStyles.main}>
        <Header />
        <Typography sx={{ alignSelf: "center" }}>Carregando...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={mainStyles.main}>
      <Header />

      {/* <PageSelector page="main" loading={false} /> */}

      <Typography sx={mainStyles.sectionTitle}>
        {foundBooks.length === 0
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
