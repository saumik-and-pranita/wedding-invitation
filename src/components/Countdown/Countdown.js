import { useCallback } from 'react';
import './Countdown.css';
import CountdownComponent from 'react-countdown';

function formatNumber(number) {
  return (number).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

export function Countdown({ date }) {
  const renderer = useCallback(({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <div className={`countdown ${days > 0 ? 'four-column-layout' : 'three-column-layout'}`}>
          {days > 0 && <div className="countdown-item number">{formatNumber(days)}</div>}
          <div className="countdown-item number">{formatNumber(hours)}</div>
          <div className="countdown-item number">{formatNumber(minutes)}</div>
          <div className="countdown-item number">{formatNumber(seconds)}</div>
          {days > 0 && <div className="countdown-item">Days</div>}
          <div className="countdown-item">Hours</div>
          <div className="countdown-item">Minutes</div>
          <div className="countdown-item">Seconds</div>
        </div>
      );
    }

    return null;
  }, []);

  const currentTime = useCallback(() => Date.now(), []);

  return (
    <CountdownComponent
      now={currentTime}
      date={new Date(date)}
      renderer={renderer}
    />
  );
}