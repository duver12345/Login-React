import React from "react";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup"; // 👈 Importa tu componente

function App() {
  return (
    <div className="App">
      <LoginSignup /> {/* 👈 Lo renderizas aquí */}
    </div>
  );
}

export default App;
