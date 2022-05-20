import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { ReadingIntention } from "../services/readingIntention";
import { Header, PageSelector, ReadingIntentionCard } from "../components";
import intentionsPageStyles from "../styles/intentionsPageStyles";

export default function ReadingIntentions() {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [intentions, setIntentions] = useState<ReadingIntention[] | null>(null);

  async function getReadingIntentions() {
    const response = await api.readingIntention.get(auth.token);
    setIntentions(response.data);
  }

  useEffect(() => {
    getReadingIntentions();
  }, []);

  if (intentions === null) {
    return (
      <Box sx={intentionsPageStyles.main}>
        <Header />
        <Typography sx={{ alignSelf: "center" }}>Carregando...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={intentionsPageStyles.main}>
      <Header />

      <PageSelector page="intentions" loading={false} />

      <Typography sx={intentionsPageStyles.sectionTitle}>
        Estes são os livros que você pretende ler:
      </Typography>

      <Box sx={intentionsPageStyles.section}>
        {intentions.map((intention) => (
          <ReadingIntentionCard
            key={intention.id}
            readingIntention={intention}
            onChange={getReadingIntentions}
          />
        ))}
      </Box>

      <Button
        sx={intentionsPageStyles.button}
        variant="contained"
        onClick={() => navigate("/add-reading-intention")}
      >
        Pretendo ler outro livro
      </Button>
    </Box>
  );
}
