import React, { useEffect, useState } from "react";

const FallingGlyphsBackground = () => {
  const [glyphs, setGlyphs] = useState([]);

  useEffect(() => {
    // Create an array of glyphs with random properties
    const createGlyphs = () => {
      const glyphsArray = [];

      const glyphCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

      
      
      //const glyphCharacters = ['{', '}', '[', ']', '<', '>', '/', '\\', '|', '=', '+', '-', '*', '&', '#', '@', '!', '?', '~', '^'];
      
      const MAX_GLYPHS = window.innerWidth < 768 ? 12 : 20; // phones = 12, larger = 20

      for (let i = 0; i < MAX_GLYPHS; i++) {
        glyphsArray.push({
          id: i,
          character: glyphCharacters[Math.floor(Math.random() * glyphCharacters.length)],
          left: Math.random() * 100, // Random horizontal position
          animationDuration: 8 + Math.random() * 12, // Random duration between 8-20s
          animationDelay: Math.random() * 10, // Random delay
          fontSize: 12 + Math.random() * 50, // Random font size between 12-62px
          fontFamily: Math.random() > 0.5 ? 'var(--font-serif)' : 'var(--font-sans)',

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
            fontFamily: glyph.fontFamily
          }}
        >
          {glyph.character}
        </div>
      ))}
    </div>
  );
};

export default FallingGlyphsBackground;
