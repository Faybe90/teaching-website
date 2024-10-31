// src/pages/actualites.tsx
import { CSSProperties } from "react";

export default function Actualites() {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Classes</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>Niveau 1AS</li>
          <li style={styles.sidebarItem}>Niveau 2AS</li>
          <li style={styles.sidebarItem}>Niveau 3AS</li>
        </ul>
      </aside>
      <main style={styles.content}>
        <h1 style={styles.title}>Fil d'actualités</h1>
        <div style={styles.article}>
          <h2 style={styles.articleTitle}>Article Titre</h2>
          <p style={styles.articleContent}>
            Contenu de l'article pour les élèves...
          </p>
        </div>
        {/* Ajoute plus d'articles ici si besoin */}
      </main>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)",
    color: "#f4f4f9",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    minHeight: "100vh",
  },
  sidebar: {
    backgroundColor: "#2e2e3a",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    width: "250px",
  },
  sidebarTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#f4f4f9",
  },
  sidebarList: {
    listStyle: "none",
    padding: "0",
  },
  sidebarItem: {
    padding: "10px 15px",
    margin: "5px 0",
    borderRadius: "4px",
    backgroundColor: "#4a4a5e",
    color: "#f4f4f9",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#f4f4f9",
    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  article: {
    backgroundColor: "#3c3c4e",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
  },
  articleTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#f4f4f9",
  },
  articleContent: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#ddd",
  },
};
