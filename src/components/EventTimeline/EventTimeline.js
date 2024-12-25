import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './EventTimeline.css';
import { TimelineCard } from '../TimelineCard/TimelineCard';
import engagementCover from '../../assets/engagement_cover.jpg';
import weddingCover from '../../assets/wedding_cover.jpg';
import receptionCover from '../../assets/reception_cover.jpg';
import weddingLocationQR from '../../assets/Wedding_Ursa_Garden_QR_Formatted.png';
import weddingLocationMobileQR from '../../assets/Wedding_Ursa_Garden_QR.png';
import receptionLocationQR from '../../assets/Reception_Prisha_Banquet_QR_Formatted.png';
import receptionLocationMobileQR from '../../assets/Reception_Prisha_Banquet_QR.png';
import weddingLocation from '../../assets/wedding_location.jpg';
import receptionLocation from '../../assets/reception_location.jpg';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export function EventTimeline() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <VerticalTimeline lineColor="#970747">
      <TimelineCard
        title="Engagement"
        coverImage={engagementCover}
        description="A promise of love, a ring to remind them that forever begins now."
        dateText="Sunday, April 28, 2024 - 7PM Onwards"
        location="MIG Community Hall, Subarnabhoomi Apartment, 36 Ghorokhobansi Road, Dumdum, Kolkata - 700028"
        arrowColor="#84428b"
        date="2024-04-28T19:00:00+0530"
      />
      <TimelineCard
        title="Wedding"
        coverImage={weddingCover}
        description="With vows exchanged and hearts alight, they step together into forever’s light."
        dateText="Monday, March 03, 2024 - 7PM Onwards"
        location="URSA Garden, North K.B. Sarani, K.B. Sarani, Mall Road, Golpark, South Dumdum, Kolkata - 700080"
        arrowColor="#edaf75"
        date="2025-03-03T19:00:00+0530"
        locationQR={breakpoint === 'mobile' ? weddingLocationMobileQR : weddingLocationQR}
        mapImg={weddingLocation}
        locationLink="https://www.google.com/maps/place/Ursa+Garden/@22.624872,88.4166555,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89e1783443197:0x30e7747529a1dbf6!8m2!3d22.6248671!4d88.4192304!16s%2Fg%2F11clwlkrnv!5m1!1e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
      />
      <TimelineCard
        title="Reception"
        coverImage={receptionCover}
        description="Surrounded by family & friends, with love in the air, the start of forever, a moment so rare."
        dateText="Saturday, March 08, 2024 - 7PM to 11PM"
        location="Prisha banquet, 3rd Floor, Swastik Gloria High Point, Near Zudio Star Bazaar, Ovala Naka, Ghodbunder Road, Thane West - 400615"
        arrowColor="#a8826d"
        date="2025-03-08T19:00:00+0530"
        locationQR={breakpoint === 'mobile' ? receptionLocationMobileQR : receptionLocationQR}
        mapImg={receptionLocation}
        locationLink="https://www.google.com/maps/place/Prisha+Banquet/@19.2742067,72.9565147,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bbf9637f5849:0x1fbf6b3146ef4361!8m2!3d19.2742017!4d72.9613856!16s%2Fg%2F11h8cvvgw3!5m1!1e2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
      />
    </VerticalTimeline>
  );
} 