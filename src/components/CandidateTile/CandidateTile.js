import './CandidateTile.css';
import { CandidateCard } from "../CandidateCard/CandidateCard";
import { Description } from '../Description/Description';

export function CandidateTile({
  fname,
  lname,
  title,
  description,
  cardColor,
  imgSrc,
  reverse
}) {
  return (
    <div className={`candidate-tile ${reverse ? 'reverse' : ''}`}>
      <CandidateCard
        fname={fname}
        lname={lname}
        title={title}
        color={cardColor}
        imgSrc={imgSrc}
        imgAlt={title}
      />
      <Description>{description}</Description>
    </div>
  )
}