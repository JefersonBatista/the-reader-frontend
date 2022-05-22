import { SxProps } from "@mui/material";

const image: SxProps = {
  margin: "auto",
  width: "50px",
  height: "80px",
};

const intention: SxProps = {
  width: "300px",
  height: "auto",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #1565C0",
  borderRadius: "5px",
};

const info: SxProps = {
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const priorityControl: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const priorityButton: SxProps = {
  fontSize: "30px",
};

const author: SxProps = {
  color: "gray",
};

const field: SxProps = {
  fontSize: "12px",
};

export default {
  image,
  intention,
  priorityControl,
  priorityButton,
  author,
  field,
  info,
};
