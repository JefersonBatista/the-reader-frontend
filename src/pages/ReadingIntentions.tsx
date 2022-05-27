import { Box, Button, Dialog, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import {
  ReadingIntention,
  ReadingIntentionData,
} from "../services/readingIntention";
import {
  AddReading,
  AddReadingIntention,
  Header,
  PageSelector,
  ReadingIntentionCard,
} from "../components";
import intentionsPageStyles from "../styles/intentionsPageStyles";

export default function ReadingIntentions() {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [intentions, setIntentions] = useState<ReadingIntention[] | null>(null);
  const [addReadingDialog, setAddReadingDialog] = useState(false);
  const [addIntentionDialog, setAddIntentionDialog] = useState(false);
  const [intentionId, setIntentionId] = useState(0);
  const [readingInitialValue, setReadingInitialValue] =
    useState<ReadingIntentionData>({
      title: "",
      author: "",
      imageUrl: "",
    });

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
        {intentions.length === 0
          ? "Sua lista de livros que quer ler está vazia."
          : "Estes são os livros que você pretende ler:"}
      </Typography>

      <Box sx={intentionsPageStyles.section}>
        {intentions.map((intention) => (
          <ReadingIntentionCard
            key={intention.id}
            readingIntention={intention}
            onChange={getReadingIntentions}
            openAddReadingDialog={() => {
              setIntentionId(intention.id);
              setReadingInitialValue({
                title: intention.title,
                author: intention.author || "",
                imageUrl: intention.imageUrl || "",
              });
              setAddReadingDialog(true);
            }}
          />
        ))}
      </Box>

      <Button
        sx={intentionsPageStyles.button}
        variant="contained"
        onClick={() => setAddIntentionDialog(true)}
      >
        Pretendo ler outro livro
      </Button>

      <Dialog open={addIntentionDialog}>
        <AddReadingIntention
          closeDialog={() => {
            setAddIntentionDialog(false);
            getReadingIntentions();
          }}
          cancel={() => setAddIntentionDialog(false)}
        />
      </Dialog>

      <Dialog open={addReadingDialog}>
        <AddReading
          closeDialog={() => {
            setAddReadingDialog(false);
            navigate("/main");
          }}
          cancel={() => setAddReadingDialog(false)}
          readingIntentionId={intentionId}
          initialValue={readingInitialValue}
        />
      </Dialog>
    </Box>
  );
}
