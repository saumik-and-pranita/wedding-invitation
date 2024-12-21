import './StoryBanner.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import coupleBanner from '../../assets/story_banner.jpg';
import { StoryBannerText } from '../StoryBannerText/StoryBannerText';

export function StoryBanner() {
  return (
    <div className='story-banner-container'>
      <ParallaxBanner
        layers={[
          { image: coupleBanner, speed: -30, opacity: [0.5, 0.8, 'easeInOut'] },
          { children: <StoryBannerText />, slowerScrollRate: true }
        ]}
        className="aspect-[2/1] story-banner"
      >
        <div />
      </ParallaxBanner>
    </div>
  );
}