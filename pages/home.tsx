/// src/pages/index.tsx
import Link from "next/link";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Cours de français du Lycée Souissi</h1>
        <div style={styles.nav}>
          <Link href="/inscription">
            <button style={styles.signUpButton}>S'inscrire</button>
          </Link>
          <Link href="/connexion">
            <button style={styles.logInButton}>Se connecter</button>
          </Link>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.imageContainer}>
          <img
            src="/home.jpg" // Chemin correct pour une image dans 'public'
            alt="Bienvenue"
            style={styles.welcomeImage}
          />
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Lycée Souissi</p>
      </footer>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)", // Dégradé de fond moderne
    color: "#f4f4f9",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#f4f4f9",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "transform 0.3s ease",
  },
  logInButton: {
    backgroundColor: "transparent",
    color: "#f4f4f9",
    border: "1px solid #f4f4f9",
    borderRadius: "25px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "transform 0.3s ease",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  imageContainer: {
    maxWidth: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
  },
  welcomeImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    color: "#f4f4f9",
    fontSize: "14px",
    opacity: "0.8",
  },
};
