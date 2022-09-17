import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Dialog, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { Note } from "../services/note";
import { Header, ReadingNoteCard, AddReadingNote } from "../components";
import { Reading } from "../services/reading";
import mainStyles from "../styles/mainStyles";

export default function ReadingNotes() {
  const { auth } = useAuth();
  const params = useParams() as { id: string };
  const readingId = parseInt(params.id);

  const [reading, setReading] = useState<Reading | undefined>(undefined);
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [addNoteDialog, setAddNoteDialog] = useState(false);

  async function getReading() {
    const response = await api.reading.getById(auth.token, readingId);
    const reading = response.data as Reading;
    setReading(reading);
  }

  async function getNotes() {
    const response = await api.note.get(auth.token, readingId);
    setNotes(response.data);
  }

  useEffect(() => {
    getReading();
    getNotes();
  }, []);

  if (notes === null || reading === undefined) {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "70px",
        }}
      >
        <Typography sx={mainStyles.sectionTitle}>
          Anotações do livro '{reading.title}'.
        </Typography>
        {notes.length === 0
          ? "Você ainda não fez nenhuma anotação para essa leitura"
          : notes.map((note) => (
              <ReadingNoteCard key={note.id} note={note}></ReadingNoteCard>
            ))}
        <Button
          sx={mainStyles.button}
          variant="contained"
          onClick={() => setAddNoteDialog(true)}
        >
          Adicionar anotação
        </Button>

        <Dialog open={addNoteDialog}>
          <AddReadingNote
            readingId={readingId}
            closeDialog={() => {
              setAddNoteDialog(false);
              getNotes();
            }}
            cancel={() => setAddNoteDialog(false)}
          />
        </Dialog>
      </Box>
    </Box>
  );
}
