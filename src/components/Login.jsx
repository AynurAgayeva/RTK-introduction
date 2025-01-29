import React, { useState } from "react";
import { useAuth } from "../context/authContext.jsx";

function Login() {
  const { login, user } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    login(username); 
  };

  if (user) {
    return <p>Artıq daxil olmusunuz!</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="İstifadəçi adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş</button>
    </div>
  );
}

export default Login;
