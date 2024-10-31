// pages/inscription.tsx
import { useState } from "react";

export default function Inscription() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  // Styles en ligne
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      height: "100vh", // Prend toute la hauteur de l'écran
    },
    formContainer: {
      flex: "1", // Prend 50% de l'espace
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Centrer verticalement le contenu
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "15px",
      fontWeight: "bold",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
      marginTop: "5px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    imageContainer: {
      flex: "1", // Prend 50% de l'espace
      backgroundImage: "url('/pchome.jpg')", // Remplacez par le chemin de votre image
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "0 8px 8px 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Inscription</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Nom d'utilisateur:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Mot de passe:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>
            S'inscrire
          </button>
        </form>
      </div>
      <div style={styles.imageContainer}></div>
    </div>
  );
}
