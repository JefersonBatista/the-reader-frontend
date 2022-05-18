import { SxProps } from "@mui/material";

const image: SxProps = {
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
};

const author: SxProps = {
  color: "gray",
};
export default { image, reading, author };
