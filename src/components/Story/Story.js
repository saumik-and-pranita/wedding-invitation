import groom from '../../assets/Saumik.jpg';
import bride from '../../assets/Pranita.jpg';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { SectionSubHeading } from '../SectionSubHeading/SectionSubHeading';
import { Section } from '../Section/Section';
import { CandidateTile } from '../CandidateTile/CandidateTile';
import { StoryBanner } from '../StoryBanner/StoryBanner';

export function Story() {
  return (
    <>
      <Section>
        <SectionHeading>Our Story</SectionHeading>
        <SectionSubHeading>A little about the bride and groom</SectionSubHeading>
        <CandidateTile
          fname="Saumik"
          lname="Sarkar"
          title="Groom"
          imgSrc={groom}
          description="Born and raised in the heart of Mumbai, he’s a man of ambition and warmth. An accomplished software engineer with a brilliant mind, it’s his kind heart and charming nature that truly stand out. Handsome, loving, and always full of life, he brings light to every room he enters. Today, as he steps into this new chapter, his future is as bright as the love he holds in his heart."
          cardColor="blue"
        />
        <CandidateTile
          fname="Pranita"
          lname="Biswas"
          title="Bride"
          imgSrc={bride}
          description="Born in the cultural heart of Kolkata, she carries with her the warmth of its heritage and the elegance of its spirit. Now thriving in Mumbai as a successful corporate lawyer, her brilliance and ambition shine through in everything she does. Yet, it is her jolly nature, kind heart, and loving soul that truly define her—gracing every room with her beauty, both inside and out."
          cardColor="pink"
          reverse
        />
      </Section>
      <StoryBanner />
    </>
  );
}