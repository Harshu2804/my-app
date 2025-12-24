import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Accurate word count
  const wordCount = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
            caretColor: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={text.length===0}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} disabled={text.length===0}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear} disabled={text.length===0}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} disabled={text.length===0}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces} disabled={text.length===0}>
          Remove Spaces
        </button>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h4>Your text summary</h4>
        <p>
          {wordCount} words, {text.length} characters
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
