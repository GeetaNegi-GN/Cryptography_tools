import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleReplace = () => {
    let replace = prompt("Which word You Want To Replace?");
    let replaceWith = prompt("Replace With?");
    let newText = text.replaceAll(replace, replaceWith);
    setText(newText);
  };

  const handleBinaryClick = () => {
    let binaryText = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const binary = charCode.toString(2);
      binaryText += binary + " ";
    }
    setText(binaryText.trim());
  };

  const handleHexClick = () => {
    let binaryText = "";
    for (let i = 0; i < text.length; i++) {
      binaryText += " " + text.charCodeAt(i).toString(16);
    }
    setText(binaryText.trim());
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="main-container">
        <h1>{props.heading}</h1>
        <div className="main-side-container">
          <ul className="side-container">
            <li>
              <button className="tU-btn" onClick={handleUpClick}>
                Convert to UPPERCASE
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleLoClick}>
                Convert to lowercase
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleCopy}>
                Copy text
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleClearClick}>
                Clear Text
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleExtraSpaces}>
                Remove Extra Spaces
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleReplace}>
                Replace word
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleBinaryClick}>
                Text to Binary
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleHexClick}>
                Text to Hexdecimal
              </button>
            </li>
          </ul>
        </div>

        <div className="textutil-container">
          <div className="tU-container">
            <div className="tU-form">
              <textarea
                className="form-control"
                id="myBox"
                value={text}
                onChange={handleOnChange}
                cols="80"
                rows="10"
              ></textarea>
            </div>
            {/* <div className="tU-btn-container">
              <button
               
                className="tU-btn"
                onClick={handleUpClick}
              >
                Convert to UPPERCASE
              </button>
              <button
               
                className="tU-btn"
                onClick={handleLoClick}
              >
                Convert to lowercase
              </button>
              <button
               
                className="tU-btn"
                onClick={handleCopy}
              >
                Copy text
              </button>

              <button
               
                className="tU-btn"
                onClick={handleClearClick}
              >
                Clear Text
              </button>
              <button
               
                className="tU-btn"
                onClick={handleExtraSpaces}
              >
                Remove Extra Spaces
              </button>
              <button
               
                className="tU-btn"
                onClick={handleReplace}
              >
                Replace word
              </button>
              <button
               
                className="tU-btn"
                onClick={handleBinaryClick}
              >
                Text to Binary
              </button>
              <button
               
                className="tU-btn"
                onClick={handleHexClick}
              >
                Text to Hexdecimal
              </button>
            </div> */}
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
      </div>
    </>
  );
}
