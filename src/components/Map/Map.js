import "./Map.css";

export function Map({ src, href }) {
  return (
    <div className="map-container">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={src} alt="Map location" />
      </a>
    </div>
  );
};