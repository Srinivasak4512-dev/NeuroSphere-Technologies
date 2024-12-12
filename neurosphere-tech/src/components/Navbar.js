import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NeuroSphere Technologies</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/technologies" className="hover:text-gray-300">Technologies</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
