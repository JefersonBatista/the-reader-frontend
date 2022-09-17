import { SxProps } from "@mui/material";

const main: SxProps = {
  paddingTop: "70px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "lightgray",
  minHeight: "100vh",
};

const sectionTitle: SxProps = {
  alignSelf: "center",
  textAlign: "center",
  fontFamily: "Saira Condensed",
  fontSize: "22px",
  color: "#1565C0",
};

const section: SxProps = {
  margin: "20px 0",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignSelf: "center",
  gap: "10px",
};

const button: SxProps = {
  margin: "20px 0",
  alignSelf: "center",
};

export default { main, sectionTitle, section, button };
