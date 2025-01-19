import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '1em', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0 }}>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
