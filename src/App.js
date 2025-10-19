import React from "react";

function App() {
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
      <h1 style={{fontSize: "2.2rem"}}>🌟 Surprise Layer 4 🌟</h1>
      <p style={{maxWidth: 600}}>
        This is the last layer — press the button and get the full birthday surprise!
      </p>
      <a
        href="https://surprise123-iota.vercel.app/"
        style={{
          backgroundColor: "#7ecbff",
          color: "#012",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px"
        }}
      >
        Reveal the Birthday Site 🎉
      </a>
    </div>
  );
}

export default App;
