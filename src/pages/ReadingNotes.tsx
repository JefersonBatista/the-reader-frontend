import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Note } from "../services/note";
import { Header } from "../components";

export default function ReadingNotes() {
  const { auth } = useAuth();
  const params = useParams() as { id: string };
  const readingId = parseInt(params.id);

  const [notes, setNotes] = useState<Note[] | null>(null);

  async function getNotes() {
    const response = await api.note.get(auth.token, readingId);
    setNotes(response.data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  if (notes === null) {
    return (
      <Box>
        <Header />
        <Typography sx={{ alignSelf: "center", marginTop: "70px" }}>
          Carregando...
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Header />
      <Box sx={{ marginTop: "70px" }}>
        <Typography>Esta página ainda está em início de construção.</Typography>
        <Typography>
          As anotações da leitura de ID {readingId} deveriam aparecer aqui.
        </Typography>
        <Typography>Clique na logo para voltar.</Typography>
      </Box>
    </Box>
  );
}
