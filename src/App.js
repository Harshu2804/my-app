import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "#042743" : "white";
  }, [mode]);

  return (
    // <Router>
    <>
      <Navbar aboutText="About me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
      {/* // <div className="container my-3">
      //   {/* <Routes>
      //     <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />} />
      //     <Route exact path="/about" element={<About mode={mode} />} />
      //   </Routes> */}
      {/* // </div> */}
    {/* // </Router> */}
    </>
  );
}

export default App;
