import { Box, Typography } from "@mui/material";

import { Reading } from "../services/reading";
import readingStyles from "../styles/readingStyles";

export default function ReadingCard({ reading }: { reading: Reading }) {
  return (
    <Box component="article" sx={readingStyles.reading}>
      <Box
        component="img"
        src={reading.imageUrl}
        alt="Livro"
        sx={readingStyles.image}
      ></Box>
      <Typography>{reading.title}</Typography>
      <Typography sx={readingStyles.author}>{reading.author}</Typography>
      <Typography>Capítulos: {reading.numChapters}</Typography>
      <Typography>Páginas: {reading.numPages}</Typography>
    </Box>
  );
}
