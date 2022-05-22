import { Box, Typography } from "@mui/material";
import SignOutIcon from "@mui/icons-material/Logout";

import useAuth from "../hooks/useAuth";
import headerStyles from "../styles/headerStyles";
import SmallLogo from "./SmallLogo";

export default function Header() {
  const { auth, removeAuth } = useAuth();

  return (
    <Box component="header" sx={headerStyles.header}>
      <Typography sx={headerStyles.greetings}>
        Olá {auth.name.split(" ")[0]}!
      </Typography>

      <Box sx={headerStyles.content}>
        <SmallLogo />
        <SignOutIcon onClick={removeAuth} sx={headerStyles.signOutIcon} />
      </Box>
    </Box>
  );
}
