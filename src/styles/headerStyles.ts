import { SxProps } from "@mui/material";

const header: SxProps = {
  height: "50px",
  width: "100vw",
  maxWidth: "100vw",
  padding: "0 15px",
  backgroundColor: "#bde1e7",
};

const content: SxProps = {
  width: "calc(100% - 30px)",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const greetings: SxProps = {
  fontFamily: "Saira Condensed",
  fontSize: "20px",
  color: "#1565C0",
};

export default { header, content, greetings };
