// FallingGlyphsBackground.jsx
import React, { useEffect, useState } from "react";

const FallingGlyphsBackground = () => {
  const [glyphs, setGlyphs] = useState([]);

  useEffect(() => {
    const createGlyphs = () => {
      const isMobile = window.innerWidth < 768;
      const spawnWidthPct = isMobile ? 100 : 20;
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        character: chars[Math.floor(Math.random() * chars.length)],
        left: Math.random() * spawnWidthPct,  // % of viewport width
        top: 0,                               // start at the very top
        animationDuration: 8 + Math.random() * 12,
        animationDelay:    Math.random() * 10,
        fontSize:          12 + Math.random() * 50,
        fontFamily:        Math.random() > 0.5 ? "var(--font-serif)" : "var(--font-sans)",
      }));
    };

    // initial spawn
    setGlyphs(createGlyphs());

    // rebuild when viewport resizes/rotates
    const handleResize = () => setGlyphs(createGlyphs());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="falling-glyphs-container">
      {glyphs.map(g => (
        <div
          key={g.id}
          className="falling-glyph"
          style={{
            left:              `${g.left}%`,
            top:               `${g.top}%`,
            animationDuration: `${g.animationDuration}s`,
            animationDelay:    `${g.animationDelay}s`,
            fontSize:          `${g.fontSize}px`,
            fontFamily:        g.fontFamily,
          }}
        >
          {g.character}
        </div>
      ))}
    </div>
  );
};

export default FallingGlyphsBackground; 