// src/components/NavBar.tsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">SCU Clubs</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clubs">Clubs</Link></li>
        </ul>
      </div>
    </nav>
  );
}