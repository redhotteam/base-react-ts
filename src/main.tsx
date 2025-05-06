import { createRoot } from "react-dom/client";

import "./index.css";

import { BrowserRouter } from "react-router";

import App from "./App.tsx";

import "@/i18n";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
