import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // DEFAULT DARK MODE
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  // Force dark mode on first load
  useEffect(() => {
    document.body.style.backgroundColor = "#183125";
    document.title = "TextUtils - Dark Mode";
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#183125";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>

        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>
            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text!"
                  mode={mode}
                />
              }
            />
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;