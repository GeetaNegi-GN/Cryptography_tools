import React, { useState } from "react";
import CryptoJS from "crypto-js";

function Crypt() {
  const [text, setText] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleAlgorithmClick = (selectedAlgorithm) => {
    setAlgorithm(selectedAlgorithm);
    setEncryptedText("");
    setDecryptedText("");
  };

  const encryptText = () => {
    let encrypted = "";
    if (algorithm === "aes") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key").toString();
    } else if (algorithm === "md5") {
      encrypted = CryptoJS.MD5(text).toString();
    } else if (algorithm === "des") {
      encrypted = CryptoJS.DES.encrypt(text, "secret-key").toString();
    } else if (algorithm === "tripleDes") {
      encrypted = CryptoJS.TripleDES.encrypt(text, "rest").toString();
    } else if (algorithm === "rabbit") {
      encrypted = CryptoJS.Rabbit.encrypt(text, "rest").toString();
    } else if (algorithm === "rc4drop") {
      encrypted = CryptoJS.RC4Drop.encrypt(text, "secret-key", {
        drop: 3072 / 4,
      }).toString();
    } else if (algorithm === "rc4") {
      encrypted = CryptoJS.RC4.encrypt(text, "secret-key").toString();
    } else if (algorithm === "rc4") {
      encrypted = CryptoJS.RC4.encrypt(text, "secret-key").toString();
    } else if (algorithm === "rc4") {
      encrypted = CryptoJS.RC4.encrypt(text, "secret-key").toString();
    } else if (algorithm === "cfb") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
    }
    setEncryptedText(encrypted);
    setDecryptedText("");
  };

  const decryptText = () => {
    let decrypted = "";
    if (algorithm === "aes") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "des") {
      decrypted = CryptoJS.DES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "tripleDes") {
      decrypted = CryptoJS.TripleDES.decrypt(
        encryptedText,
        "secret-key"
      ).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "rabbit") {
      decrypted = CryptoJS.Rabbit.decrypt(encryptedText, "rest").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "rc4drop") {
      decrypted = CryptoJS.RC4Drop.decrypt(encryptedText, "secret-key", {
        drop: 3072 / 4,
      }).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "rc4") {
      decrypted = CryptoJS.RC4.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "cfb") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key", {
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString(CryptoJS.enc.Utf8);
    }
    setDecryptedText(decrypted);
  };

  return (
    <>
      <h1>Encoder/Decoder</h1>
      <div className="crypt-container">
        <div className="crypt-textarea">
          <label>
            Text:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="crypt-output">
          {<textarea value={encryptedText} readOnly />}
          <button disabled={!algorithm} onClick={encryptText}>
            Encrypt
          </button>

          {(algorithm === "aes" ||
            algorithm === "des" ||
            algorithm === "tripleDes" ||
            algorithm === "rabbit" ||
            algorithm === "rc4" ||
            algorithm === "rc4drop" ||
            algorithm === "cfb") && (
            <>
              {<textarea value={decryptedText} readOnly />}
              <button onClick={decryptText}>Decrypt</button>
            </>
          )}
        </div>

        <div className="crypt-btn">
          <p>
            Hashing:
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("md5")}
            >
              MD5
            </button>
          </p>
          <p>
            Block Encryption:
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("aes")}
            >
              AES
            </button>
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("cfb")}
            >
              CFB
            </button>
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
          </p>

          <p>
            Stream encyption:
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
            <button
              className="tU-btn"
              onClick={() => handleAlgorithmClick("rc4drop")}
            >
              RC4Drop
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Crypt;
