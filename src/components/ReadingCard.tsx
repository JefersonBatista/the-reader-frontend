import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Reading } from "../services/reading";
import readingStyles from "../styles/readingStyles";
import defaultBookImg from "../assets/85528.png";

export default function ReadingCard({
  reading,
  onChange,
}: {
  reading: Reading;
  onChange: () => any;
}) {
  const { auth } = useAuth();

  const progress = ((reading.currentPage || 0) / (reading.numPages || 1)) * 100;
  const [page, setPage] = useState(1);

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

  async function bookmark(page: number) {
    try {
      await api.reading.bookmark(auth.token, reading.id, page);
      onChange();
    } catch (error) {}
  }

  return (
    <Box component="article" sx={readingStyles.reading}>
      <Box sx={readingStyles.imageCard}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={110}
          thickness={2}
          sx={readingStyles.progressBar}
        />
        <Box
          component="img"
          src={reading.imageUrl || defaultBookImg}
          alt="Livro"
          sx={readingStyles.image}
        />
      </Box>

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

      {!reading.endDate && (
        <>
          <Box sx={readingStyles.bookmark}>
            <Input
              type="number"
              value={page}
              onChange={({ target }) => setPage(parseInt(target.value))}
            />
            <Button onClick={() => bookmark(page)}>Marcar página</Button>
          </Box>
          <Button onClick={finish}>Finalizar leitura</Button>
        </>
      )}
    </Box>
  );
}
