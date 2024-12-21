import './Copyright.css';
import { AiOutlineCopyright } from "react-icons/ai";

export function Copyright() {
  return (
    <div className="copyright-container">
      <p>
        <AiOutlineCopyright color="#fff" size={9} />
        <span className="copyright-text">{' '}Copyright 2024 Saumik Sarkar - All rights reserved</span>
      </p>
    </div>
  )
}