import { SxProps } from "@mui/material";

const imageCard: SxProps = {
  position: "relative",
  display: "flex",
  width: "110px",
  height: "110px",
};

const progressBar: SxProps = {
  position: "absolute",
  margin: "auto",
};

const bookmark: SxProps = {
  marginBottom: "20px",
  display: "flex",
  gap: "10px",
};

const image: SxProps = {
  margin: "auto",
  width: "50px",
  height: "80px",
};

const reading: SxProps = {
  width: "200px",
  height: "auto",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #1565C0",
  borderRadius: "5px",
};

const author: SxProps = {
  color: "gray",
};

const field: SxProps = {
  fontSize: "12px",
};

const bookmarkInput: SxProps = {
  fontSize: "18px",
};

const bookmarkButton: SxProps = {
  fontSize: "10px",
};

export default {
  imageCard,
  progressBar,
  bookmark,
  image,
  reading,
  author,
  field,
  bookmarkInput,
  bookmarkButton,
};
