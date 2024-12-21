import { TiHeartFullOutline } from "react-icons/ti";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './TimelineCard.css';
import { Countdown } from "../Countdown/Countdown";
import { useMemo } from "react";
import { Map } from "../Map/Map";

export function TimelineCard({
  title,
  coverImage,
  description,
  dateText,
  location,
  arrowColor,
  date = new Date().toDateString(),
  locationQR,
  mapImg,
  locationLink
}) {
  const shouldDisplayMapDetails = useMemo(() => {
    const newDate = new Date(date);
    newDate.setDate(new Date(date).getDate() + 1);

    if (Date.now() - newDate > 0) {
      return false;
    }

    return true;
  }, [date]);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff3f8' }}
      contentArrowStyle={{ borderRight: `7px solid ${arrowColor || '#970747'}` }}
      iconStyle={{ background: '#970747', color: '#fff' }}
      icon={<TiHeartFullOutline color="#fff" />}
    >
      <figure className="timeline-card-cover-container">
        <img className="timeline-card-cover" src={coverImage} alt={title} />
      </figure>
      <div className="timeline-card-details">
        <h3 className="timeline-card-title">{title}</h3>
        <p className="timeline-card-poem">{description}</p>
        <div className="timeline-card-event-details">
          <div>
            {dateText && (
              <p className="event-info-container">
                <div className="event-icon">
                  <FaRegCalendarAlt color="#970747" size={16} />
                </div>
                <span className="event-info">{dateText}</span>
              </p>
            )}
            {location && (
              <p className={`event-info-container ${!shouldDisplayMapDetails ? 'no-location-visualisation' : ''}`}>
                <div className="event-icon">
                  <FaLocationDot color="#970747" size={16} />
                </div>
                <span className="event-info">{location}</span>
              </p>
            )}
          </div>
          {shouldDisplayMapDetails && locationQR && (
            <figure className="location-qr-container">
              <img className="location-qr" src={locationQR} alt="Event location QR" />
            </figure>
          )}
        </div>
        {shouldDisplayMapDetails && mapImg && <Map src={mapImg} href={locationLink} />}
        <Countdown date={date} />
      </div>
    </VerticalTimelineElement>
  );
}