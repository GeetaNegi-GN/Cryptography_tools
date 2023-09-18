import React, { useState } from "react";
import LoremIpsum from "react-lorem-ipsum";

const options = ["LoremIpsum", "Avatar", "name", "surname", "username"];

function Lorem() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <h1>Lorem Ipsum Generator</h1>
      <div className="main-container">
        <div>
          {options.map((option) => (
            <label className="lorem-label" key={option}>
              <input
                className="psd-checkbox"
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionToggle(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="lorem-container">
          <div style={{ marginTop: "20px" }}>
            <LoremIpsum
              p={2}
              count={2}
              startWithLoremIpsum={selectedOptions.includes("LoremIpsum")}
            />
            {selectedOptions.includes("Avatar") && (
              <img
                src="https://i.pinimg.com/originals/ec/5d/5d/ec5d5df9a5f7a37f3b1dd6e5ce993709.jpg"
                alt="Avatar"
                width="200px"
                height="200px"
              />
            )}

            {selectedOptions.includes("name") && <p>Name: Kakashi</p>}
            {selectedOptions.includes("surname") && <p>Surname: Hatake</p>}
            {selectedOptions.includes("username") && <p>Username: Hokage</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lorem;
