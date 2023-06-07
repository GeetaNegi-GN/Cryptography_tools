import React from "react";
import "Style.css";
const Caesar = () => {
  return (
    <div id="caesar" class="container">
      <h1>Caesar Cipher App</h1>
      <div id="app-container">
        <textarea name="" id="text"></textarea>
        <div id="buttons-container">
          <button id="encrypt">Encrypt</button>
          <input id="key" type="text" placeholder="key" />
          <button id="decrypt">Decrypt</button>
        </div>
      </div>
    </div>
  );
};
export default Caesar;
