import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from './ImageLightbox';
import './image-lightbox.css';

export default function CaseStudyFigure({ src, alt, caption, wide = false, fullSrc = src }) {
  const [isOpen, setIsOpen] = useState(false);

  function openImage(event) {
    // Preserve normal browser actions such as Command/Ctrl-click and Save Link.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setIsOpen(true);
  }

  return (
    <figure className={`cs-figure ${wide ? 'cs-media' : 'cs-prose'}`}>
      <a className="cs-figure-image-link" href={fullSrc} onClick={openImage}
        aria-label={`Enlarge image: ${alt}`} aria-haspopup="dialog">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </a>
      <figcaption className="cs-figure-caption">
        {caption}
        <a className="cs-figure-enlarge" href={fullSrc} onClick={openImage}
          aria-label={`Enlarge image: ${alt}`} aria-haspopup="dialog">
          <span className="cs-figure-enlarge-label">
            <ZoomIn size={16} aria-hidden="true" />
            Enlarge image
          </span>
        </a>
      </figcaption>
      {isOpen && <ImageLightbox src={fullSrc} alt={alt} caption={caption} onClose={() => setIsOpen(false)} />}
    </figure>
  );
}
