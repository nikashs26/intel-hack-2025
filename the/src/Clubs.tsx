
import "./Clubs.css";
import "./Home";
import { Link } from "react-router-dom"; 
import App from "./App";

interface Club {
  name: string;
  description: string;
  image: string;
}

const engineeringClubs: Club[] = [
  { name: "Engineering Without Borders", description: "Hackathons, tech and community impact!", image: "/images/acm.jpeg" },
  { name: "Association for Computing Machinery (ACM)", description: "Talks, events, and coding jams.", image: "/images/acm.jpeg" },
  { name: "Association for Computing Machinery Women (ACMW)", description: "Empowering women in tech.", image: "/images/acm.jpeg" },
  { name: "AI Collaborate", description: "Everything AI — collabs, ethics, and development.", image: "/images/aicollab.jpeg" },
  { name: "ISA Student Network", description: "Connect, learn, and grow in STEM.", image: "/images/esports.jpeg" },
  { name: "Maker", description: "3D print models of things!", image: "/images/mker.jpeg" }
];

const cultureClubs: Club[] = [
  { name: "Asian Pacific Student Union", description: "Cultural events and celebrations.", image: "/images/apsu.jpeg" },
  { name: "Vietnamese Student Association", description: "Community, food, and culture!", image: "/images/apsu.jpeg" },
  { name: "Muslim Student Association", description: "Faith, community, and events.", image: "/images/photography.jpeg" },
  { name: "Japanese Student Association", description: "Japanese traditions and activities.", image: "/images/photography.jpeg" },
  { name: "Barkada (Filipino Student Association)", description: "Filipino food, fun, and family!", image: "/images/photography.jpeg" }
];

const otherClubs: Club[] = [
  { name: "Photography Club", description: "Capture the world, one photo at a time.", image: "/images/photography.jpeg" },
  { name: "Chess Club", description: "Casual and competitive chess.", image: "/images/chess.jpeg" },
  { name: "TV Club", description: "Create and enjoy student-made content.", image: "/images/drama.jpg" }
];

interface TileProps {
  title: string;
  description: string;
  image: string;
}

function Tile({ title, description, image }: TileProps) {
  return (
    <div className="tile">
      <div className="tile-image" style={{ backgroundImage: `url(${image})` }} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Clubs() {
    
  return (
    <div className="clubs-page">
      <h1>Engineering</h1>
      <div className="tile-grid">
        {engineeringClubs.map((club, index) => (
          <Tile
            key={`eng-${index}`}
            title={club.name}
            description={club.description}
            image={club.image}
          />
        ))}
      </div>

      <h1>Culture</h1>
      <div className="tile-grid">
        {cultureClubs.map((club, index) => (
          <Tile
            key={`cult-${index}`}
            title={club.name}
            description={club.description}
            image={club.image}
          />
        ))}
      </div>

      <h1>Other</h1>
      <div className="tile-grid">
        {otherClubs.map((club, index) => (
          <Tile
            key={`other-${index}`}
            title={club.name}
            description={club.description}
            image={club.image}
          />
        ))}
      </div>
    </div>
  );
}
function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">SCU Clubs</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clubs">Clubs</Link></li> {/* fixed this line */}
          </ul>
        </div>
      </nav>
    );
  }
export default Clubs;
