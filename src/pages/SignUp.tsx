import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Button, TextField, Typography, Link } from "@mui/material";

import api from "../services/api";
import { BigLogo } from "../components";
import authStyles from "../styles/authStyles";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
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
    const { name, email, password, repeatPassword } = formData;

    if (repeatPassword !== password) {
      alert("Você inseriu senhas diferentes");

      setLoading(false);
      return;
    }

    try {
      await api.auth.signUp({ name, email, password });

      navigate("/sign-in");
    } catch (error: any) {
      alert(error.response.data);
      setLoading(false);
    }
  }

  return (
    <Box sx={authStyles.page}>
      <BigLogo />

      <Typography sx={authStyles.subtitle}>
        Você não possui conta? Cadastre-se.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={authStyles.form}>
        <TextField
          variant="outlined"
          label="Nome"
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

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

        <TextField
          variant="outlined"
          label="Confirme a senha"
          type="password"
          name="repeatPassword"
          placeholder="Confirme a senha"
          value={formData.repeatPassword}
          onChange={handleChange}
          disabled={loading}
          fullWidth
        />

        <Box sx={authStyles.formOptions}>
          <Link component={RouterLink} to={loading ? "#" : "/sign-in"}>
            <Typography sx={authStyles.routerLink}>
              Já possuo cadastro
            </Typography>
          </Link>

          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
