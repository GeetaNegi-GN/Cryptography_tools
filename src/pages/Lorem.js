import React, { useState } from "react";
import {
  LoremIpsum,
  Avatar,
  fullname,
  name,
  surname,
  username,
} from "react-lorem-ipsum";

const Lorem = () => {
  return (
    <>
      {/* 3 */}
      <div className="user">
        <div className="full-name">{fullname("female")}</div>
        <div className="username">{`@${username()}`}</div>
      </div>
      {/* 1 */}
      <div className="text-wrapper">
        {LoremIpsum({ p: 3 }).map((text) => (
          <div className="text" key={text}>
            {text}
          </div>
        ))}
      </div>
      {/* 2 */}
      <div className="user">
        // All props will be directly transferred to img element
        <Avatar
          gender="male"
          className="avatar"
          width="200"
          height="200"
          alt="Avatar"
        />
        <div className="name">{name("male")}</div>
        <div className="surname">{surname()}</div>
        <div className="username">{username()}</div>
      </div>
      ,
    </>
    // <div className="text-wrapper">
    //   <LoremIpsum p={2} />
    // </div>
  );

  //   const [numParagraphs, setNumParagraphs] = useState(1);
  //   const [loremText, setLoremText] = useState("");

  //   const generateLorem = () => {
  //     const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec molestie odio.
  //       Phasellus faucibus ante vel mi commodo, in dapibus velit pellentesque. Suspendisse potenti.
  //       Donec ullamcorper dignissim elit, in consectetur odio pellentesque id. Nunc eget lacus feugiat,
  //       bibendum quam vel, vulputate risus. In hac habitasse platea dictumst. Sed euismod nisl eget
  //       tortor varius, eu cursus est imperdiet. Proin id risus et nisl dignissim posuere a eget quam.
  //       Nunc convallis consectetur erat, sed auctor mi fermentum at. Vestibulum sodales lectus in tellus
  //       posuere feugiat. Nullam sed nibh ut ipsum dapibus congue. Vivamus id eleifend velit, et venenatis
  //       tellus. Integer aliquet neque elit, eu dapibus ipsum tristique id.`;

  //     const paragraphs = lorem.split("\n").map((paragraph) => paragraph.trim());

  //     let generatedLorem = "";
  //     for (let i = 0; i < numParagraphs; i++) {
  //       const randomIndex = Math.floor(Math.random() * paragraphs.length);
  //       generatedLorem += paragraphs[randomIndex] + "\n\n";
  //     }

  //     setLoremText(generatedLorem);
  //   };

  //   return (
  //     <div>
  //       <h2>Lorem Generator</h2>
  //       <label>Number of paragraphs:</label>
  //       <input
  //         type="number"
  //         value={numParagraphs}
  //         onChange={(e) => setNumParagraphs(parseInt(e.target.value))}
  //       />
  //       <button onClick={generateLorem}>Generate Lorem</button>
  //       <p>{loremText}</p>
  //     </div>
  //   );
};

export default Lorem;
