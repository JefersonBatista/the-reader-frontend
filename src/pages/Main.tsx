import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Dialog, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Reading } from "../services/reading";
import { Header, PageSelector, ReadingCard, AddReading } from "../components";
import mainStyles from "../styles/mainStyles";

export default function Main() {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [readings, setReadings] = useState<Reading[] | null>(null);
  const [addDialog, setAddDialog] = useState(false);

  async function getReadings() {
    const response = await api.reading.get(auth.token);
    setReadings(response.data);
  }

  function isUnfinished(reading: Reading) {
    return !reading.endDate;
  }

  function isFinished(reading: Reading) {
    return !!reading.endDate;
  }

  useEffect(() => {
    getReadings();
  }, []);

  if (readings === null) {
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

      <PageSelector page="main" loading={false} />

      <Typography sx={mainStyles.sectionTitle}>
        {readings.filter(isUnfinished).length === 0
          ? "Você não está lendo nenhum livro no momento?"
          : "Estes são os livros que você está lendo:"}
      </Typography>

      <Box sx={mainStyles.section}>
        {readings.filter(isUnfinished).map((reading) => (
          <ReadingCard
            key={reading.id}
            reading={reading}
            onChange={getReadings}
          />
        ))}
      </Box>

      <Button
        sx={mainStyles.button}
        variant="contained"
        onClick={() => setAddDialog(true)}
      >
        Comecei a ler um livro
      </Button>

      <Button
        sx={mainStyles.button}
        variant="contained"
        onClick={() => navigate("/search-book")}
      >
        Buscar livro na API da Google
      </Button>

      <Dialog open={addDialog}>
        <AddReading
          closeDialog={() => {
            setAddDialog(false);
            getReadings();
          }}
          cancel={() => {
            setAddDialog(false);
          }}
          readingIntentionId={0}
          initialValue={{ title: "", author: "", imageUrl: "" }}
        />
      </Dialog>

      <Typography sx={mainStyles.sectionTitle}>
        {readings.filter(isFinished).length === 0
          ? "Você ainda não terminou nenhum livro."
          : "Estes são os livros que você já leu:"}
      </Typography>

      <Box sx={mainStyles.section}>
        {readings.filter(isFinished).map((reading) => (
          <ReadingCard
            key={reading.id}
            reading={reading}
            onChange={getReadings}
          />
        ))}
      </Box>
    </Box>
  );
}
