import { Box, Button, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Reading } from "../services/reading";
import readingStyles from "../styles/readingStyles";

export default function ReadingCard({
  reading,
  onChange,
}: {
  reading: Reading;
  onChange: () => any;
}) {
  const { auth } = useAuth();

  function dateToLocalString(date: string) {
    const localDate = new Date(date);
    return localDate.toLocaleDateString();
  }

  async function finish() {
    try {
      await api.reading.finish(auth.token, reading.id);
      onChange();
    } catch (error: any) {
      alert(error.response.data);
    }
  }

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
      <Typography>
        Começou em: {dateToLocalString(reading.startDate)}
      </Typography>
      {reading.endDate && (
        <Typography>
          Finalizada em: {dateToLocalString(reading.endDate)}
        </Typography>
      )}

      <Button onClick={finish}>Finalizar leitura</Button>
    </Box>
  );
}
