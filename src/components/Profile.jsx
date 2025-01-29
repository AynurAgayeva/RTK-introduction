import React from "react";
import { useAuth } from "../context/authContext.jsx";


function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Giriş etməmisiniz.</p>;
  }

  return (
    <div>
      <h1>Profil</h1>
      <p>İstifadəçi: {user.name}</p>
      <button onClick={logout}>Çıxış</button>
    </div>
  );
}

export default Profile;
