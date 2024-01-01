// Typewriter.js
import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + texts[textIndex][index]);
      index++;

      if (index === texts[textIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText("");
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Pause before typing the next line
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [texts, textIndex, speed]);

  return <span className="text-2xl">{displayText}</span>;
};

export default Typewriter;
