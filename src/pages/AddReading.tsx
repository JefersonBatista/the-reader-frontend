import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, Link, TextField, Typography } from "@mui/material";

import api from "../services/api";
import { ReadingData } from "../services/reading";
import { ReadingIntentionData } from "../services/readingIntention";
import useAuth from "../hooks/useAuth";
import { Header } from "../components";
import addReadingStyles from "../styles/addReadingStyles";

export default function AddReading() {
  // { initialValue }: { initialValue: ReadingIntentionData } = {
  //   initialValue: { title: "", author: "", imageUrl: "" },
  // }
  const navigate = useNavigate();

  const { auth } = useAuth();

  const [formData, setFormData] = useState<ReadingData>({
    title: "",
    author: "",
    imageUrl: "",
    numChapters: 0,
    numPages: 0,
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
      const { author, imageUrl, numChapters, numPages } = formData;
      const readingData = {
        ...formData,
        author: author || undefined,
        imageUrl: imageUrl || undefined,
        numChapters: parseInt(`${numChapters}`) || undefined,
        numPages: parseInt(`${numPages}`) || undefined,
      };

      await api.reading.create(auth.token, readingData);

      navigate("/main");
    } catch (error: any) {
      alert(error.response.data);
      setLoading(false);
    }
  }

  return (
    <Box sx={addReadingStyles.page}>
      <Header />

      <Typography sx={addReadingStyles.subtitle}>
        O que você começou a ler?
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={addReadingStyles.form}>
        <TextField
          variant="outlined"
          label="Título"
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Autor(a) [opcional]"
          type="text"
          name="author"
          placeholder="Autor(a)"
          value={formData.author}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Link da imagem [opcional]"
          type="text"
          name="imageUrl"
          placeholder="Link da imagem"
          value={formData.imageUrl}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Número de capítulos [opcional, min: 1]"
          type="number"
          name="numChapters"
          placeholder="Número de capítulos"
          value={formData.numChapters || ""}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Número de páginas [opcional, min: 1]"
          type="number"
          name="numPages"
          placeholder="Número de páginas"
          value={formData.numPages || ""}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <Box sx={addReadingStyles.formOptions}>
          <Link
            component={RouterLink}
            to="/main"
            sx={addReadingStyles.routerLink}
          >
            Cancelar
          </Link>

          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Registrando..." : "Registrar"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
