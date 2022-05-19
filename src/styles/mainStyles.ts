import { SxProps } from "@mui/material";

const main: SxProps = {
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
};

const sectionTitle: SxProps = {
  alignSelf: "center",
  fontFamily: "Saira Condensed",
  fontSize: "22px",
  color: "#1565C0",
};

const section: SxProps = {
  display: "flex",
  alignSelf: "center",
  gap: "10px",
};

const button: SxProps = {
  alignSelf: "center",
};

export default { main, sectionTitle, section, button };
