import React, { useState } from "react";

function PsdGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [generatedPassword, setGeneratedPassword] = useState("");

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(Number(e.target.value));
  };

  const handleIncludeAlphabetsChange = (e) => {
    setIncludeAlphabets(e.target.checked);
  };

  const handleIncludeNumbersChange = (e) => {
    setIncludeNumbers(e.target.checked);
  };

  const handleIncludeSymbolsChange = (e) => {
    setIncludeSymbols(e.target.checked);
  };

  const generatePassword = () => {
    const chars = [];
    if (includeAlphabets) {
      chars.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (includeNumbers) {
      chars.push("0123456789");
    }
    if (includeSymbols) {
      chars.push("!@#$%^&*()_-+=<>?");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomCharSetIndex = Math.floor(Math.random() * chars.length);
      const charSet = chars[randomCharSetIndex];
      const randomCharIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomCharIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div>
      <h2>Random Password Generator</h2>

      <label>
        Password Length:
        <input
          type="number"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
      </label>

      <label>
        Include Alphabets:
        <input
          type="checkbox"
          checked={includeAlphabets}
          onChange={handleIncludeAlphabetsChange}
        />
      </label>

      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={handleIncludeNumbersChange}
        />
      </label>

      <label>
        Include Symbols:
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={handleIncludeSymbolsChange}
        />
      </label>

      <button onClick={generatePassword}>Generate Password</button>

      <div>
        <h3>Generated Password:</h3>
        <p>{generatedPassword}</p>
      </div>
    </div>
  );
}

export default PsdGenerator;
