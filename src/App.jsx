import React, { useEffect } from "react";
import { TimerProvider } from "./context/timerContext";
import { AppRouter } from "./routes";

import "./App.scss";

function App() {
  useEffect(() => {
    // Disable context menu
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContextMenu);

    // Log window dimensions
    console.log(window.innerWidth, window.innerHeight);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <TimerProvider className="App">
      <AppRouter />
    </TimerProvider>
  );
}

export default App;
