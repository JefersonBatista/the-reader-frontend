import { Typography } from "@mui/material";

export default function SmallLogo() {
  return (
    <Typography
      sx={{
        fontFamily: "Pacifico",
        fontSize: "30px",
        color: "#ff3c00",
        ["@media (max-width:450px)"]: { visibility: "hidden" },
      }}
    >
      The Reader
    </Typography>
  );
}
