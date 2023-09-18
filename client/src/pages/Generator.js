import React, { useState } from "react";
import PsdGenerator from "./PsdGenerator";
import Lorem from "./Lorem";

import QRGen from "./QRGen";

const Generator = () => {
  const [showPsd, setShowPsd] = useState(true);
  const [showLorem, setShowLorem] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleClick1 = () => {
    setShowPsd(true);
    setShowLorem(false);
    setShowQr(false);
  };
  const handleClick2 = () => {
    setShowPsd(false);
    setShowLorem(true);
    setShowQr(false);
  };
  const handleClick3 = () => {
    setShowPsd(false);
    setShowLorem(false);
    setShowQr(true);
  };
  return (
    <>
      <div className="main-container">
        <div className="main-side-container">
          <ul className="side-container">
            <li>
              {" "}
              <button className="tU-btn" onClick={handleClick1}>
                Password Generator
              </button>
            </li>

            <li>
              <button className="tU-btn" onClick={handleClick2}>
                Lorem Generator
              </button>
            </li>
            <li>
              <button className="tU-btn" onClick={handleClick3}>
                Qr Generator
              </button>
            </li>
          </ul>
        </div>
        <div>
          {showPsd && <PsdGenerator />}
          {showLorem && <Lorem />}
          {showQr && <QRGen />}
        </div>
      </div>
    </>
  );
};

export default Generator;
