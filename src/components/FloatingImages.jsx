import React, { useEffect, useState } from 'react';

const FloatingImages = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = (speed) => {
    const offsetY = scrollY * speed * 0.1;
    const rotateX = offsetY * 0.05;
    const rotateY = offsetY * 0.03;
    
    return `translateY(${offsetY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <>
      <div 
        className="floating-img img1" 
        data-speed="1.2"
        style={{ transform: getTransform(1.2) }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" 
          alt="abstract 1"
        />
      </div>
      <div 
        className="floating-img img2" 
        data-speed="0.8"
        style={{ transform: getTransform(0.8) }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=8" 
          alt="abstract 2"
        />
      </div>
      <div 
        className="floating-img img3" 
        data-speed="1.5"
        style={{ transform: getTransform(1.5) }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=8" 
          alt="abstract 3"
        />
      </div>
    </>
  );
};

export default FloatingImages; 