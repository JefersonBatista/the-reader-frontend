import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Reading } from "../services/reading";
import { Header, ReadingCard } from "../components";
import mainStyles from "../styles/mainStyles";

export default function Main() {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [readings, setReadings] = useState<Reading[] | null>(null);

  async function getReadings() {
    const response = await api.reading.get(auth.token);
    setReadings(response.data);
  }

  useEffect(() => {
    getReadings();
  }, []);

  if (readings === null) {
    return (
      <Box>
        <Header />
        <Typography>Carregando...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={mainStyles.main}>
      <Header />

      <Typography sx={mainStyles.sectionTitle}>
        Estes são os livros que você está lendo:
      </Typography>

      <Box sx={mainStyles.section}>
        {readings.map((reading) => (
          <ReadingCard key={reading.id} reading={reading} />
        ))}
      </Box>

      <Button
        sx={mainStyles.button}
        variant="contained"
        onClick={() => navigate("/add-reading")}
      >
        Comecei a ler um novo livro
      </Button>

      {/* <Typography sx={mainStyles.sectionTitle}>
        Estes são os livros que você já leu:
      </Typography>

      <Box sx={mainStyles.section}>
        {readings.map((reading) => (
          <ReadingCard key={reading.id} reading={reading} />
        ))}
      </Box> */}
    </Box>
  );
}
