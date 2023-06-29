import React, { useState } from "react";
import CryptoJS from "crypto-js";

export default function Crypt() {
  const [text, setText] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleAlgorithmClick = (selectedAlgorithm) => {
    setAlgorithm(selectedAlgorithm);
  };

  const encryptText = () => {
    let encrypted = "";
    if (algorithm === "aes") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key").toString();
    } else if (algorithm === "md5") {
      encrypted = CryptoJS.MD5(text).toString();
    } else if (algorithm === "des") {
      encrypted = CryptoJS.DES.encrypt(text, "secret-key").toString();
    }
    setEncryptedText(encrypted);
  };

  const decryptText = () => {
    let decrypted = "";
    if (algorithm === "aes") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "md5") {
      // MD5 is a one-way hash function, so decryption is not possible.
      decrypted = "Decryption not possible for MD5.";
    } else if (algorithm === "des") {
      decrypted = CryptoJS.DES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    }
    setDecryptedText(decrypted);
  };

  return (
    <>
      <h1>Encoder-Decoder</h1>

      <div>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div className="crypt-btn">
          <button disabled={!algorithm} onClick={encryptText}>
            Encrypt
          </button>
          <button disabled={!algorithm} onClick={decryptText}>
            Decrypt
          </button>
        </div>

        <div>
          <h3>Encrypted Text:</h3>
          <p>{encryptedText}</p>
        </div>

        <div>
          <h3>Decrypted Text:</h3>
          <p>{decryptedText}</p>
        </div>
        <div>
          <button
            className="crypt-btn"
            onClick={() => handleAlgorithmClick("aes")}
          >
            AES
          </button>
          <button
            className="crypt-btn"
            onClick={() => handleAlgorithmClick("md5")}
          >
            MD5
          </button>
          <button
            className="crypt-btn"
            onClick={() => handleAlgorithmClick("des")}
          >
            DES
          </button>
        </div>
      </div>
    </>
  );
}
