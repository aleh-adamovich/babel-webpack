import React from "react";
import { createRoot } from "react-dom/client";
import './style.scss';

const App = () => {
  return (
    <h2>Dev Server Works</h2>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
