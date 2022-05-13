import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "@mui/material";
import api from "../services/api";

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
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      <Input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={loading}
        fullWidth
      />

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

      <Input
        type="password"
        name="repeatPassword"
        placeholder="Confirme a senha"
        value={formData.repeatPassword}
        onChange={handleChange}
        required
        disabled={loading}
        fullWidth
      />

      <div>
        <Link to={loading ? "#" : "/sign-in"}>Já possuo cadastro</Link>

        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </div>
    </form>
  );
}
