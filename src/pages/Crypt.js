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
    if (algorithm === "md5") {
      encrypted = CryptoJS.MD5(text).toString();
    } else if (algorithm === "sha1") {
      encrypted = CryptoJS.SHA1(text).toString();
    } else if (algorithm === "sha256") {
      encrypted = CryptoJS.SHA256(text).toString();
    } else if (algorithm === "sha512") {
      encrypted = CryptoJS.SHA512(text).toString();
    } else if (algorithm === "sha3") {
      encrypted = CryptoJS.SHA3(text).toString();
    } else if (algorithm === "ripemd") {
      encrypted = CryptoJS.RIPEMD160(text).toString();
    } else if (algorithm === "cbc") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
    } else if (algorithm === "cfb") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
    } else if (algorithm === "ctr") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
    } else if (algorithm === "ofb") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        mode: CryptoJS.mode.OFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
    } else if (algorithm === "ecb") {
      encrypted = CryptoJS.AES.encrypt(text, "secret-key", {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString();
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
    }
    setEncryptedText(encrypted);
    setDecryptedText("");
  };

  const decryptText = () => {
    let decrypted = "";
    if (algorithm === "cbc") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key").toString(
        CryptoJS.enc.Utf8
      );
    } else if (algorithm === "cfb") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key", {
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "ctr") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key", {
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.AnsiX923,
      }).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "ofb") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key", {
        mode: CryptoJS.mode.OFB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString(CryptoJS.enc.Utf8);
    } else if (algorithm === "ecb") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "secret-key", {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.AnsiX923,
      }).toString(CryptoJS.enc.Utf8);
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
    }
    setDecryptedText(decrypted);
  };

  return (
    <>
      <div className="main-side-container">
        <div className="side-list">
          <ul className="side-container side-crypt">
            <h2 className="side-container-heading">Hashing</h2>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("md5")}
              >
                MD5
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("sha1")}
              >
                SHA1
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("sha256")}
              >
                SHA256
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("sha512")}
              >
                SHA512
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("sha3")}
              >
                SHA3
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("ripemd")}
              >
                RIPEMD160
              </button>
            </li>
          </ul>
        </div>

        <div className="side-list">
          <ul className="side-container side-crypt">
            <h2 className="side-container-heading"> Block Encryption</h2>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("cbc")}
              >
                AES(CBC)
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("cfb")}
              >
                AES(CFB)
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("ctr")}
              >
                AES(CTR)
              </button>
            </li>

            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("ofb")}
              >
                AES(OFB)
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("ecb")}
              >
                AES(ECB)
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("des")}
              >
                DES
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("tripleDes")}
              >
                TripleDES
              </button>
            </li>
          </ul>
        </div>

        <div className="side-list">
          <ul className="side-container side-crypt">
            <h2 className="side-container-heading"> Stream encyption</h2>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("rabbit")}
              >
                Rabbit
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("rc4")}
              >
                RC4
              </button>
            </li>
            <li>
              <button
                className="tU-btn"
                onClick={() => handleAlgorithmClick("rc4drop")}
              >
                RC4Drop
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <h1>Encoder/Decoder</h1>
        <div className="crypt-container">
          <div className="crypt-textarea">
            <label>
              Enter Your Text Below:
              <br />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
          </div>
          <div className="crypt-output">
            <div className="c-encrypt">
              <button disabled={!algorithm} onClick={encryptText}>
                Encrypt
              </button>{" "}
              <br />
              {<textarea value={encryptedText} readOnly />}
            </div>

            <div className="c-decrypt">
              {(algorithm === "cbc" ||
                algorithm === "cfb" ||
                algorithm === "ctr" ||
                algorithm === "ofb" ||
                algorithm === "ecb" ||
                algorithm === "des" ||
                algorithm === "tripleDes" ||
                algorithm === "rabbit" ||
                algorithm === "rc4" ||
                algorithm === "rc4drop" ||
                algorithm === "cfb") && (
                <>
                  <button onClick={decryptText}>Decrypt</button>
                  <br />
                  {<textarea value={decryptedText} readOnly />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crypt;
