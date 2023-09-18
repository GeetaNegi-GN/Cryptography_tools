import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRGen = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>QR Code Generator</h1>
      <div className="psd-container">
        <div className="Qr-input">
          <textarea
            type="text"
            placeholder="Enter value to generate QR code"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="Qr-output">{text && <QRCode value={text} />}</div>
      </div>
    </>
  );
};

export default QRGen;
