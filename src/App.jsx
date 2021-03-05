import { useEffect, useCallback, useState } from "react";
import AppRouter from "./app.router";
import "./App.css";
import AppContext from "./app.context";

function App() {
  useEffect(async () => {
    try {
      if (window.Notification) {
        const Notification = window.Notification;
        if (Notification.permission === "granted") {
          new Notification("hello from electron");
        } else {
          const result = await Notification.requestPermission();
          console.log("notification granted", result);
          new Notification("Notification granted. hello from electron");
        }
      }
    } catch (e) {
      console.log("Notification error", e);
    }
  }, []);
  return (
    <div className="App">
      <AppContext.Provider value="dark">
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default App;
