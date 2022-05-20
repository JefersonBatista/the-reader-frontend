import { Box, Button, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { ReadingIntention } from "../services/readingIntention";
import readingIntentionStyles from "../styles/readingIntentionStyles";
import defaultBookImg from "../assets/85528.png";

export default function ReadingIntentionCard({
  readingIntention,
  onChange,
}: {
  readingIntention: ReadingIntention;
  onChange: () => any;
}) {
  const { auth } = useAuth();

  function dateToLocalString(date: string) {
    const localDate = new Date(date);
    return localDate.toLocaleDateString();
  }

  async function increasePriority() {
    try {
      await api.readingIntention.increasePriority(
        auth.token,
        readingIntention.id
      );
      onChange();
    } catch (error: any) {
      alert(error.response.data);
    }
  }

  async function decreasePriority() {
    try {
      await api.readingIntention.decreasePriority(
        auth.token,
        readingIntention.id
      );
      onChange();
    } catch (error: any) {
      alert(error.response.data);
    }
  }

  return (
    <Box component="article" sx={readingIntentionStyles.intention}>
      <Box
        component="img"
        src={readingIntention.imageUrl || defaultBookImg}
        alt="Livro"
        sx={readingIntentionStyles.image}
      />

      <Box sx={readingIntentionStyles.info}>
        <Typography sx={readingIntentionStyles.field}>
          {readingIntention.title}
        </Typography>
        <Typography
          sx={{
            ...readingIntentionStyles.author,
            ...readingIntentionStyles.field,
          }}
        >
          {readingIntention.author || "(autor não informado)"}
        </Typography>
        <Typography sx={readingIntentionStyles.field}>
          Adicionada em: {dateToLocalString(readingIntention.date)}
        </Typography>
      </Box>

      <Button onClick={increasePriority}>Subir</Button>
      <Button onClick={decreasePriority}>Descer</Button>
    </Box>
  );
}
