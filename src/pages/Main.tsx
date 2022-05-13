import useAuth from "../hooks/useAuth";

export default function Main() {
  const { auth, removeAuth } = useAuth();

  return (
    <div>
      <h1>Olá {auth.name}!</h1>
      <h2>O aplicativo ainda está em fase inicial de desenvolvimento...</h2>
      <button onClick={removeAuth}>Sair</button>
    </div>
  );
}
