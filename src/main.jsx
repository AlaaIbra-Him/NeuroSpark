import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ مهم
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./LandingPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <LandingPage/>
    </BrowserRouter>
  </StrictMode>
);
