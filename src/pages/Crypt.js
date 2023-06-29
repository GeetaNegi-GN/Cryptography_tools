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
    }
    // else if (algorithm === "md5") {
    //   encrypted = CryptoJS.MD5(text).toString();
    // }
    else if (algorithm === "des") {
      encrypted = CryptoJS.DES.encrypt(text, "secret-key").toString();
    } else if (algorithm === "tripleDes") {
      encrypted = CryptoJS.TripleDES.encrypt(text, "secret-key").toString();
    } else if (algorithm === "rabbit") {
      encrypted = CryptoJS.Rabbit.encrypt(text, "secret-key").toString();
    } else if (algorithm === "rc4") {
      encrypted = CryptoJS.RC4.encrypt(text, "secret-key").toString();
    }
    setEncryptedText(encrypted);
  };

  const decryptText = () => {
    let decrypted = "";
    if (algorithm === "aes") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    }
    // else if (algorithm === "md5") {
    //   // MD5 is a one-way hash function, so decryption is not possible.
    //   decrypted = "Decryption not possible for MD5.";
    // }
    else if (algorithm === "des") {
      decrypted = CryptoJS.DES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "tripleDes") {
      decrypted = CryptoJS.TripleDES.decrypt(
        encryptedText,
        "secret-key"
      ).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "rabbit") {
      decrypted = CryptoJS.Rabbit.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "rc4") {
      decrypted = CryptoJS.RC4.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    }
    setDecryptedText(decrypted);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <h1>Encoder-Decoder</h1>

      <div className="crypt-container">
        <div className="crypt-textarea">
          Enter the text
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="80"
            rows="5"
          ></textarea>
        </div>
        <div className="crypt-btn">
          <button
            className="crypt-text-btn"
            disabled={!algorithm}
            onClick={encryptText}
          >
            Encrypt
          </button>
          <button
            className="crypt-text-btn"
            disabled={!algorithm}
            onClick={decryptText}
          >
            Decrypt
          </button>
          <button
            disabled={text.length === 0}
            className="tU-btn"
            onClick={handleCopy}
          >
            Copy text
          </button>
          <button
            disabled={text.length === 0}
            className="tU-btn"
            onClick={handleClearClick}
          >
            Clear Text
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
            className="tU-btn"
            onClick={() => handleAlgorithmClick("aes")}
          >
            AES
          </button>
          {/* <button
            className="tU-btn"
            onClick={() => handleAlgorithmClick("md5")}
          >
            MD5
          </button> */}
          <button
            className="tU-btn"
            onClick={() => handleAlgorithmClick("des")}
          >
            DES
          </button>
          <button
            className="tU-btn"
            onClick={() => handleAlgorithmClick("tripleDes")}
          >
            TripleDES
          </button>
          <button
            className="tU-btn"
            onClick={() => handleAlgorithmClick("rabbit")}
          >
            Rabbit
          </button>
          <button
            className="tU-btn"
            onClick={() => handleAlgorithmClick("rc4")}
          >
            RC4
          </button>
        </div>
      </div>
    </>
  );
}
