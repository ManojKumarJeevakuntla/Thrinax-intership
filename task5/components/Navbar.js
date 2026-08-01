import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/products" style={{ margin: '10px' }}>Products</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
    </nav>
  );
}

export default Navbar;
