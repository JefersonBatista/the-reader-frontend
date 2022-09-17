import { SxProps } from "@mui/material";

const bigLogo: SxProps = {
  fontFamily: "Pacifico",
  fontSize: "60px",
  color: "#ff3c00",
};

const smallLogo: SxProps = {
  fontFamily: "Pacifico",
  fontSize: "30px",
  color: "#ff3c00",
  ["@media (max-width:500px)"]: { display: "none" },

  cursor: "pointer",
};

const abbreviatedSmallLogo: SxProps = {
  ...smallLogo,
  ["@media (max-width:500px)"]: { display: "initial" },
  ["@media (min-width:501px)"]: { display: "none" },
};

export default { bigLogo, smallLogo, abbreviatedSmallLogo };
