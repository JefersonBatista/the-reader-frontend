import { Box, Button, Typography } from "@mui/material";

import useAuth from "../hooks/useAuth";
import headerStyles from "../styles/headerStyles";
import SmallLogo from "./SmallLogo";

export default function Header() {
  const { auth, removeAuth } = useAuth();

  return (
    <Box component="header" sx={headerStyles.header}>
      <Box sx={headerStyles.content}>
        <SmallLogo />
        <Typography sx={headerStyles.greetings}>Olá {auth.name}!</Typography>
        <Button variant="outlined" onClick={removeAuth}>
          Sair
        </Button>
      </Box>
    </Box>
  );
}
