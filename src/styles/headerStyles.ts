import { SxProps } from "@mui/material";

const header: SxProps = {
  position: "fixed",
  zIndex: "10",
  top: 0,
  left: 0,
  height: "50px",
  width: "100vw",
  padding: "0 20px",
  backgroundColor: "#bde1e7",
};

const content: SxProps = {
  width: "calc(100% - 40px)",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

/**
 * I have created this style to centralize the greetings
 * independent of the space-between. However, to use it
 * caused to block sign-out button
 */
const greetingsBox: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  width: "100vw",
  height: "100%",
};

const greetings: SxProps = {
  margin: "auto",
  fontFamily: "Saira Condensed",
  fontSize: "30px",
  color: "#1565C0",
};

const signOutIcon: SxProps = {
  fontSize: "30px",
  color: "#1565C0",
  cursor: "pointer",
};

export default { header, content, greetingsBox, greetings, signOutIcon };
