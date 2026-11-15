import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react';

export default function ImageLightbox({ src, alt, caption, onClose }) {
  const dialogRef = useRef(null);
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const titleId = useId();
  const helpId = useId();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const viewport = viewportRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    const observer = new ResizeObserver(() => {
      setViewportSize({ width: viewport.clientWidth, height: viewport.clientHeight });
    });
    observer.observe(viewport);

    return () => {
      observer.disconnect();
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  const ready = imageSize.width > 0 && viewportSize.width > 0;
  const fitScale = ready ? Math.min(1,
    Math.max(1, viewportSize.width - 32) / imageSize.width,
    Math.max(1, viewportSize.height - 32) / imageSize.height) : 1;
  const currentScale = scale === null ? fitScale : Math.max(fitScale, scale);
  const isZoomed = currentScale > fitScale + 0.001;

  function changeScale(nextScale) {
    const viewport = viewportRef.current;
    const ratio = (nextScale ?? fitScale) / currentScale;
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) * ratio;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2) * ratio;
    setScale(nextScale);
    requestAnimationFrame(() => {
      viewport.scrollLeft = nextScale === null ? 0 : centerX - viewport.clientWidth / 2;
      viewport.scrollTop = nextScale === null ? 0 : centerY - viewport.clientHeight / 2;
    });
  }

  function startDrag(event) {
    if (!isZoomed || event.pointerType !== 'mouse' || event.button !== 0) return;
    const viewport = viewportRef.current;
    dragRef.current = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
    viewport.setPointerCapture(event.pointerId);
  }

  function panImage(event) {
    const drag = dragRef.current;
    if (!drag) return;
    viewportRef.current.scrollLeft = drag.left - (event.clientX - drag.x);
    viewportRef.current.scrollTop = drag.top - (event.clientY - drag.y);
  }

  function containKeyboardFocus(event) {
    if (event.key !== 'Tab') return;
    const controls = dialogRef.current.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return createPortal(
    <dialog ref={dialogRef} className="cs-lightbox" aria-labelledby={titleId}
      onKeyDown={containKeyboardFocus}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={(event) => { if (!event.currentTarget.open) onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="cs-lightbox-panel">
        <div className="cs-lightbox-header">
          <h2 id={titleId}>Image preview</h2>
          <button type="button" className="cs-lightbox-button" onClick={onClose}>
            <X size={20} aria-hidden="true" /> Close
          </button>
        </div>
        <div className="cs-lightbox-toolbar" role="group" aria-label="Image zoom">
          <button type="button" className="cs-lightbox-button" aria-label="Zoom out"
            disabled={!ready || !isZoomed} onClick={() => changeScale(Math.max(fitScale, currentScale / 2))}>
            <ZoomOut size={20} aria-hidden="true" />
          </button>
          <output className="cs-lightbox-scale" aria-live="polite" aria-label="Zoom level">
            {ready ? `${Math.round(currentScale * 100)}%` : 'Loading…'}
          </output>
          <button type="button" className="cs-lightbox-button" aria-label="Zoom in"
            disabled={!ready || currentScale >= 4} onClick={() => changeScale(Math.min(4, currentScale * 2))}>
            <ZoomIn size={20} aria-hidden="true" />
          </button>
          <button type="button" className="cs-lightbox-button" disabled={!ready}
            onClick={() => changeScale(null)}>Fit image</button>
          <button type="button" className="cs-lightbox-button" disabled={!ready}
            onClick={() => changeScale(1)}>Actual size</button>
        </div>
        <div ref={viewportRef} className={`cs-lightbox-viewport${isZoomed ? ' cs-lightbox-viewport--zoomed' : ''}`}
          tabIndex={0} role="region" aria-label="Enlarged image" aria-describedby={helpId}
          onPointerDown={startDrag} onPointerMove={panImage}
          onPointerUp={() => { dragRef.current = null; }} onPointerCancel={() => { dragRef.current = null; }}
          onLostPointerCapture={() => { dragRef.current = null; }}>
          <div className="cs-lightbox-canvas">
            {hasError ? <p role="alert">This image couldn’t load. Try opening the original below.</p> :
              <img className="cs-lightbox-image" src={src} alt={alt} draggable={false}
                onLoad={(event) => setImageSize({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })}
                onError={() => setHasError(true)}
                style={{ width: ready ? imageSize.width * currentScale : undefined,
                  height: ready ? imageSize.height * currentScale : undefined,
                  visibility: ready ? 'visible' : 'hidden' }} />}
          </div>
        </div>
        <div className="cs-lightbox-footer">
          {caption && <div className="cs-lightbox-caption">{caption}</div>}
          <p id={helpId} className="cs-lightbox-help">Zoom in to inspect details. Drag, swipe, or use arrow keys to pan.</p>
          <a className="cs-lightbox-original" href={src} target="_blank" rel="noopener noreferrer">
            Open original in new tab <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </dialog>, document.body,
  );
}
