import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "@mui/material";

import api from "../services/api";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={loading}
        fullWidth
      />
      <Input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={loading}
        fullWidth
      />

      <div>
        <Link to={loading ? "#" : "/sign-up"}>Não possuo cadastro</Link>

        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
    </form>
  );
}
