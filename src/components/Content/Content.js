import { Events } from '../Events/Events';
import { Story } from '../Story/Story';
import './Content.css';

export function Content() {
  return (
    <div className="content-body">
      <Story />
      <Events />
    </div>
  )
}