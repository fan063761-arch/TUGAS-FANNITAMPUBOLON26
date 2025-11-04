import React, { useState, useEffect } from "react";

function App() {
  const greetings = [
    "Selamat Pagi ☀️",
    "Selamat Siang 🌤️",
    "Selamat Sore 🌇",
    "Selamat Malam 🌙",
  ];

  const colors = ["#FFEBEE", "#E3F2FD", "#FFFDE7", "#E8F5E9"];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFade(false); // mulai fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setBgColor(colors[Math.floor(Math.random() * colors.length)]);
        setFade(true); // fade in lagi
      }, 600);
    }, 2500);

    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.8s ease",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#333",
          opacity: fade ? 1 : 0,
          transform: fade ? "scale(1)" : "scale(0.95)",
          transition: "all 0.6s ease",
        }}
      >
        {greetings[index]}
      </h1>

      <p style={{ color: "#555", marginTop: "10px" }}>
        Pesan berubah otomatis setiap 2,5 detik ✨
      </p>
    </div>
  );
}

export default App;
