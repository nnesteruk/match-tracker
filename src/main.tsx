import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.styles.css";
import { App } from "./app/app.component.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
