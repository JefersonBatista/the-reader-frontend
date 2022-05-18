import { ChangeEvent, FormEvent, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, TextField, Typography, Link } from "@mui/material";

import api from "../services/api";
import useAuth from "../hooks/useAuth";
import { BigLogo } from "../components";
import authStyles from "../styles/authStyles";

export default function SignIn() {
  const { saveAuth } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange({
    target,
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.auth.signIn(formData);
      saveAuth(data);
    } catch (error: any) {
      alert(error.response.data);
      setLoading(false);
    }
  }

  return (
    <Box sx={authStyles.page}>
      <BigLogo />

      <Typography sx={authStyles.subtitle}>
        Você já é cadastrado? Entre.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={authStyles.form}>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <TextField
          variant="outlined"
          label="Senha"
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <Box sx={authStyles.formOptions}>
          <Link component={RouterLink} to={loading ? "#" : "/sign-up"}>
            <Typography sx={authStyles.routerLink}>
              Não possuo cadastro
            </Typography>
          </Link>

          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
