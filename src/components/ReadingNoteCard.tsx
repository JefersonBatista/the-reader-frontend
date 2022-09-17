import { Box, Typography } from "@mui/material";

import { Note } from "../services/note";
import readingNoteStyles from "../styles/readingNoteStyles";

export default function ReadingNoteCard({ note }: { note: Note }) {
  function dateToLocalString(date: string) {
    const localDate = new Date(date);
    return localDate.toLocaleDateString();
  }

  return (
    <Box component="article" sx={readingNoteStyles.note}>
      <Box component="div" sx={readingNoteStyles.column}>
        <Typography sx={readingNoteStyles.field}>
          Capítulo {note.chapter}
        </Typography>
        <Typography sx={readingNoteStyles.field}>Página {note.page}</Typography>
        <Typography sx={readingNoteStyles.field}>{note.placeInText}</Typography>
      </Box>
      <Box component="div" sx={readingNoteStyles.column}>
        <Typography sx={readingNoteStyles.field}>{note.content}</Typography>
      </Box>
      <Box component="div" sx={readingNoteStyles.column}>
        <Typography sx={readingNoteStyles.field}>
          Adicionada em: {dateToLocalString(note.time)}
        </Typography>
      </Box>
    </Box>
  );
}
