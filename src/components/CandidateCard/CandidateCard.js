import './CandidateCard.css';

export function CandidateCard({
  imgSrc,
  imgAlt,
  fname,
  lname,
  title,
  color,
}) {
  return (
    <figure className={`snip1113 ${color} hover`}>
      <img src={imgSrc} alt={imgAlt} />
      <figcaption>
        <h3>{fname}{' '}<span>{lname}</span></h3>
        <h4>
          {title}
        </h4>
      </figcaption>
    </figure>
  );
}