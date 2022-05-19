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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid gray",
  borderRadius: "5px",
};

const author: SxProps = {
  color: "gray",
};

export default { imageCard, progressBar, bookmark, image, reading, author };
