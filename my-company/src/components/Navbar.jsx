import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around'  // or 'center' / 'flex-start' as you prefer
    }}>
      <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', marginRight: '10px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
