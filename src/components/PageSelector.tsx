import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function PageSelector({
  page,
  loading,
}: {
  page: string;
  loading: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        gap: "30px",
        margin: "20px 0",
      }}
    >
      <Button
        variant={page === "main" ? "contained" : "outlined"}
        disabled={loading}
        onClick={() => navigate("/main")}
      >
        Leituras
      </Button>
      <Button
        variant={page === "intentions" ? "contained" : "outlined"}
        disabled={loading}
        onClick={() => navigate("/intentions")}
      >
        Pretensões de leitura
      </Button>
    </div>
  );
}
