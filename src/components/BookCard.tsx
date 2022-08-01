import { Box, Button, Typography } from "@mui/material";

import { Book } from "../services/google-books-api";
import readingStyles from "../styles/readingStyles";
import defaultBookImg from "../assets/85528.png";

export default function BookCard({
  book,
  startReading,
}: {
  book: Book;
  startReading: () => void;
}) {
  return (
    <Box component="article" sx={readingStyles.reading}>
      <Box sx={readingStyles.imageCard}>
        <Box
          component="img"
          sx={readingStyles.image}
          src={book.imageUrl || defaultBookImg}
          alt="Livro"
        ></Box>
      </Box>

      <Typography sx={readingStyles.field}>{book.title}</Typography>
      <Typography sx={{ ...readingStyles.author, ...readingStyles.field }}>
        {book.author || "(sem autor)"}
      </Typography>
      <Typography sx={readingStyles.field}>
        Páginas: {book.numPages || "-"}
      </Typography>

      <Button variant="outlined" onClick={startReading}>
        Comecei a ler
      </Button>
    </Box>
  );
}
