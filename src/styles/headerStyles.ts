import { SxProps } from "@mui/material";

const header: SxProps = {
  position: "fixed",
  zIndex: "10",
  top: 0,
  left: 0,
  height: "50px",
  width: "100vw",
  backgroundColor: "#bde1e7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const content: SxProps = {
  width: "calc(100% - 40px)",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const greetings: SxProps = {
  position: "absolute",
  fontFamily: "Saira Condensed",
  fontSize: "30px",
  color: "#1565C0",
};

const signOutIcon: SxProps = {
  fontSize: "30px",
  color: "#1565C0",
  cursor: "pointer",
};

export default { header, content, greetings, signOutIcon };
