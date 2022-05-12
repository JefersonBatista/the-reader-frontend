import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "@mui/material";

export default function SignIn() {
  const navigate = useNavigate();

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

    setTimeout(() => {
      alert("Funcionalidade ainda não implementada");
      setLoading(false);
    }, 2000);
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
