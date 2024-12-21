import './Description.css';

export function Description({ withQuote = true, children }) {
  return (
    <p className="description-text">
      {withQuote ? <span>&#8220;</span> : ''}
      {children}
      {withQuote ? <span>&#8221;</span> : ''}
    </p>
  );
}