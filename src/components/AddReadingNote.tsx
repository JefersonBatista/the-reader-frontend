import { ChangeEvent, FormEvent, useState } from "react";

import api from "../services/api";
import { NoteData } from "../services/note";
import useAuth from "../hooks/useAuth";
import addReadingStyles from "../styles/addReadingStyles";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function AddReadingNote({
  readingId,
  closeDialog,
  cancel,
}: {
  readingId: number;
  closeDialog: () => void;
  cancel: () => void;
}) {
  const { auth } = useAuth();

  const [formData, setFormData] = useState<NoteData>({
    chapter: 0,
    page: 0,
    placeInText: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange({
    target,
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      // Treat optional fields
      const { chapter, page, placeInText } = formData;
      const noteData = {
        ...formData,
        chapter: parseInt(`${chapter}`) || undefined,
        page: parseInt(`${page}`) || undefined,
        placeInText: placeInText || undefined,
      };
      await api.note.create(auth.token, readingId, noteData);

      closeDialog();
    } catch (error: any) {
      alert(error.response.data);
      setLoading(false);
    }
  }

  return (
    <Box sx={addReadingStyles.page}>
      <Typography sx={addReadingStyles.subtitle}>
        O que você quer anotar da sua leitura?
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={addReadingStyles.form}>
        <TextField
          variant="outlined"
          label="Número do capítulo [opcional, min: 1]"
          type="number"
          name="chapter"
          placeholder="Número do capítulo"
          value={formData.chapter}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Número da página [opcional, min: 1]"
          type="number"
          name="page"
          placeholder="Número da página"
          value={formData.page}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Local no texto (parágrafo, linha, ...) [opcional]"
          type="text"
          name="placeInText"
          placeholder="Local no texto (parágrafo, linha, ...)"
          value={formData.placeInText}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Anotação"
          type="text"
          name="content"
          placeholder="Anotação"
          value={formData.content}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <Box sx={addReadingStyles.formOptions}>
          <Button onClick={cancel}>Cancelar</Button>

          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Adicionando anotação..." : "Adicionar anotação"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
