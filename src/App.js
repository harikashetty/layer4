import React, { useEffect } from "react";
import confetti from "canvas-confetti";

function App() {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    const timer = setTimeout(() => {
      window.location.href = "https://surprise123-iota.vercel.app/";
    }, 3000); // auto redirect after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      backgroundColor: "#06131b",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "2.2rem", opacity: 0, animation: "fadeIn 1s forwards" }}>🌟 Surprise Layer 4 🌟</h1>
      <p style={{ maxWidth: 600, marginTop: "15px", opacity: 0, animation: "fadeIn 1s forwards 0.5s" }}>
        Final layer — your birthday surprise is coming!
      </p>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
