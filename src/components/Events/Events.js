import { EventTimeline } from "../EventTimeline/EventTimeline";
import { Section } from "../Section/Section";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { SectionSubHeading } from "../SectionSubHeading/SectionSubHeading";

export function Events() {
  return (
    <Section>
      <SectionHeading>Events</SectionHeading>
      <SectionSubHeading>Join us as they take this step towards forever</SectionSubHeading>
      <EventTimeline />
    </Section>
  );
}