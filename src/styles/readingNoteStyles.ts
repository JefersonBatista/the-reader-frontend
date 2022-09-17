import { SxProps } from "@mui/material";

const note: SxProps = {
  width: "300px",
  height: "auto",
  padding: "5px",
  alignSelf: "center",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  border: "1px solid #1565C0",
  borderRadius: "5px",
};

const column: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const field: SxProps = {
  textAlign: "center",
  fontSize: "12px",
};

export default {
  note,
  field,
  column,
};
