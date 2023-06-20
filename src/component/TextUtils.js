import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    //var text = document.getElementById("myBox")
    //text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="textutil-container">
        <div className="tU-container">
          <h1>{props.heading}</h1>
          <div className="tU-form">
            <textarea
              className="form-control"
              id="myBox"
              value={text}
              onChange={handleOnChange}
              cols="40"
              rows="8"
            ></textarea>
          </div>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UPPERCASE
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1 "
            onClick={handleLoClick}
          >
            Convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1 "
            onClick={handleCopy}
          >
            Copy to Clipboard
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
}
