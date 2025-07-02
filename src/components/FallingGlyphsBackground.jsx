import React, { useEffect, useState } from "react";

const FallingGlyphsBackground = () => {
  const [glyphs, setGlyphs] = useState([]);

  useEffect(() => {
    // Create an array of glyphs with random properties
    const createGlyphs = () => {
      const glyphsArray = [];
      const glyphCharacters = ['{', '}', '[', ']', '<', '>', '/', '\\', '|', '=', '+', '-', '*', '&', '#', '@', '!', '?', '~', '^'];
      
      for (let i = 0; i < 20; i++) {
        glyphsArray.push({
          id: i,
          character: glyphCharacters[Math.floor(Math.random() * glyphCharacters.length)],
          left: Math.random() * 100, // Random horizontal position
          animationDuration: 8 + Math.random() * 12, // Random duration between 8-20s
          animationDelay: Math.random() * 10, // Random delay
          fontSize: 12 + Math.random() * 24, // Random font size between 12-36px
        });
      }
      return glyphsArray;
    };

    setGlyphs(createGlyphs());
  }, []);

  return (
    <div className="falling-glyphs-container">
      {glyphs.map((glyph) => (
        <div
          key={glyph.id}
          className="falling-glyph"
          style={{
            left: `${glyph.left}%`,
            animationDuration: `${glyph.animationDuration}s`,
            animationDelay: `${glyph.animationDelay}s`,
            fontSize: `${glyph.fontSize}px`,
          }}
        >
          {glyph.character}
        </div>
      ))}
    </div>
  );
};

export default FallingGlyphsBackground;
