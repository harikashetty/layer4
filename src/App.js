import React from "react";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const handleNextLayer = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "🎉 Last Question! 🎉",
      text: "What do we do if we are together?",
      input: "text",
      inputPlaceholder: "Type your answer here...",
      confirmButtonText: "Submit 🎁",
      showCancelButton: true,
      cancelButtonText: "Cancel ❌",
      background: "#06131b",
      color: "#fff",
      confirmButtonColor: "#ff6b95",
      cancelButtonColor: "#555",
      backdrop: `
        rgba(0,0,0,0.6)
        url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
        center top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        // Any answer is accepted
        Swal.fire({
          title: "🎊 Yay! 🎊",
          text: "Final surprise unlocked!",
          icon: "success",
          background: "#06131b",
          color: "#fff",
          confirmButtonColor: "#ff6b95",
          confirmButtonText: "Celebrate 🎉",
        }).then(() => {
          // Show confetti
          confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });

          // Redirect after 3 seconds
          setTimeout(() => {
            window.location.href = "https://surprise123-iota.vercel.app/";
          }, 3000);
        });
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#06131b",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.2rem" }}>🌟 Surprise Layer 4 🌟</h1>
      <p style={{ maxWidth: 600, marginTop: "15px" }}>
        Final layer — your birthday surprise is coming!
      </p>

      <a
        href="https://surprise123-iota.vercel.app/"
        onClick={handleNextLayer}
        style={{
          backgroundColor: "#ff6b95",
          color: "#fff",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 0 15px rgba(255,107,149,0.6)",
        }}
      >
        Open Surprise 🎁
      </a>
    </div>
  );
}
export default App;
