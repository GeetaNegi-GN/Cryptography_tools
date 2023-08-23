import React from "react";
import home from "../Assets/home.jpg";

const Home = () => {
  return (
    <>
      <h1>Know About Web-ToolKit</h1>
      <div className="imgContainer">
        <img src={home} alt="" />
      </div>
      <div className="textContainer">
        Welcome to
        <b>
          <i> Web-ToolKit </i>
        </b>
        , your one-stop destination for a wide range of text-related utilities
        that enhance your productivity and simplify your online tasks. We are
        dedicated to providing you with powerful tools that assist you in
        managing, encoding, decoding, and generating various types of text
        content.
        <br />
        <br />
        <div>
          <h3>What We Offer</h3>
          <br />
          <b>TextUtils-:</b> Word and Character Counter: Whether you're crafting
          a tweet, writing an article, or working on any text-based project, our
          intuitive word and character counter ensures you stay within the
          specified limits. No more manual counting - let our tool do the work
          for you!
          <br />
          <b>Encoder-Decoder Tools-: </b>We understand the importance of privacy
          and security in today's digital age. Our encryption and decryption
          tools offer a secure way to encode and decode sensitive information,
          providing you with peace of mind.
          <br />
          <b>Password Generator-:</b>
          Struggling to create a secure password that's both strong and unique?
          Our password generator creates complex passwords that are virtually
          impossible to guess, ensuring your online accounts remain safe from
          unauthorized access.
          <br />
          <b> Lorem Ipsum Generator-:</b> Designers and developers often need
          placeholder text for their projects. Our Lorem Ipsum generator
          provides you with random text that mimics real content, allowing you
          to focus on design while maintaining a professional look.
          <br />
          <b>QR Code Generator-:</b> Simplify information sharing by creating QR
          codes for URLs, contact details, text, and more. QR codes are a
          convenient way to share information without the need for manual data
          entry.
        </div>
      </div>
    </>
  );
};
export default Home;
