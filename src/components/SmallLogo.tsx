import { Typography } from "@mui/material";

import logoStyles from "../styles/logoStyles";

export default function SmallLogo() {
  return (
    <>
      <Typography sx={logoStyles.smallLogo}>The Reader</Typography>

      <Typography sx={logoStyles.abbreviatedSmallLogo}>TR</Typography>
    </>
  );
}
