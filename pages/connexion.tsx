// src/pages/connexion.tsx
import Link from "next/link";
import { CSSProperties } from "react";

export default function Connexion() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Connexion</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Se connecter
        </button>
      </form>
      <p>
        Pas encore de compte ? <Link href="/inscription">Inscris-toi</Link>
      </p>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#3c3c4e",
    borderRadius: "8px",
    color: "#f4f4f9",
  },
  title: { fontSize: "24px", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "4px", border: "none" },
  button: {
    padding: "10px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
