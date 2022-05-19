import { SxProps } from "@mui/material";

const page: SxProps = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#bde1e7",
};

const form: SxProps = {
  marginTop: "30px",
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const formOptions: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const subtitle: SxProps = {
  fontFamily: "Saira Condensed",
  fontSize: "24px",
  color: "#1565C0",
};

const routerLink: SxProps = {
  fontFamily: "Saira Condensed",
  fontSize: "21px",
  color: "#1565C0",
};

export default { page, form, formOptions, subtitle, routerLink };
