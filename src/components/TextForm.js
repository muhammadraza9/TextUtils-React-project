import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const savedText = localStorage.getItem("textutils-text");
    if (savedText && savedText.trim() !== "") {
      setText(savedText);
    } else {
      setText("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textutils-text", text);
  }, [text]);

  // Capitalize Words
  const handleCapitalizeWords = () => {
    let newText = text
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

    setText(newText);
    props.showAlert("Capitalized Words!", "success");
  };

  // Lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };

  // Clear
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  // Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Remove extra spaces
  const handleSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  // Speak
  const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  // Stop Speak
  const handleStopSpeak = () => {
    window.speechSynthesis.cancel();
  };

  // Download
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textutils.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#183125" }}
      >
        <h2>{props.heading}</h2>

        {/* FIXED TEXTAREA (always white) */}
        <textarea
          value={text}
          onChange={handleChange}
          rows="8"
          className="form-control"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ced4da",
            outline: "none",
          }}
        />

        {/* BUTTONS */}
        <div className="my-2">

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCapitalizeWords}
          >
            Capitalize Words
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-success mx-1 my-1"
            onClick={handleLowercase}
          >
            Lowercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-warning mx-1 my-1"
            onClick={handleCopy}
          >
            Copy
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-info mx-1 my-1"
            onClick={handleSpaces}
          >
            Remove Spaces
          </button>

          <button
            className="btn btn-dark mx-1 my-1"
            onClick={handleSpeak}
          >
            Speak
          </button>

          <button
            className="btn btn-dark mx-1 my-1"
            onClick={handleStopSpeak}
          >
            Stop
          </button>

          <button
            className="btn btn-secondary mx-1 my-1"
            onClick={handleDownload}
          >
            Download
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1 my-1"
            onClick={handleClear}
          >
            Clear
          </button>

        </div>
      </div>

      {/* SUMMARY */}
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#183125" }}
      >
        <h2>Text Summary</h2>

        <p>
          {words} Words | {text.length} Characters | {sentences} Sentences
        </p>

        <p>Reading Time: {(0.008 * words).toFixed(2)} min</p>

        <h3>Preview</h3>
        <p>{text || "Nothing to preview..."}</p>
      </div>
    </>
  );
}