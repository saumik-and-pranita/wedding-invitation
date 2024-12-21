import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import './NavigationBar.css';
import { useEffect, useState } from 'react';

export function NavigationBar() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    }
  }, []);

  return (
    <Navbar expand="md" className={`bg-body-tertiary ${scrolledDown ? 'scrolled-down-header' : ''}`}>
      <Container fluid>
        <Navbar.Brand><img className="logo" src={logo} alt="logo" />
          <span class="logo-text">Saumik & Pranita</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}