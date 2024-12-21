import './SectionHeading.css';

export function SectionHeading({ children }) {
  return (
    <h2 className="section-heading">{children}</h2>
  );
}