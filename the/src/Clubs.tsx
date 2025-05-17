import React from "react";
import { Link } from "react-router-dom";
import "./Clubs.css";

interface Club {
  name: string;
  description: string;
  image: string;
}

const engineeringClubs: Club[] = [
  { name: "Engineering Without Borders", description: "Hackathons, tech and community impact!", image: "/images/ewb.jpeg" },
  { name: "Association for Computing Machinery Women (ACMW)", description: "Empowering women in tech.", image: "/images/acmw.png" },
  { name: "Association for Computing Machinery (ACM)", description: "Talks, events, and coding jams.", image: "/images/acm.jpeg" },

  { name: "AI Collaborate", description: "Everything AI — collabs, ethics, and development.", image: "/images/aicollab.jpeg" },
  { name: "ISA Student Network", description: "Connect, learn, and grow in STEM.", image: "/images/esports.jpeg" },
  { name: "Maker", description: "3D print models of things!", image: "/images/maker.png" }
];

const cultureClubs: Club[] = [
  { name: "Asian Pacific Student Union", description: "Cultural events and celebrations.", image: "/images/apsu.jpeg" },
  { name: "Vietnamese Student Association", description: "Community, food, and culture!", image: "/images/vsa.jpeg" },
  { name: "Muslim Student Association", description: "Faith, community, and events.", image: "/images/msa.jpeg" },
  { name: "Japanese Student Association", description: "Japanese traditions and activities.", image: "/images/jsa.png" },
  { name: "Barkada (Filipino Student Association)", description: "Filipino food, fun, and family!", image: "/images/barkada.jpeg" }
];

const otherClubs: Club[] = [
  { name: "Photography Club", description: "Capture the world, one photo at a time.", image: "/images/photography.jpeg" },
  { name: "Chess Club", description: "Casual and competitive chess.", image: "/images/chess.jpeg" },
  { name: "TV Club", description: "Create and enjoy student-made content.", image: "/images/TV.jpeg" }
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

function NavBar() {
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

function Clubs() {
  return (
    <>
      <NavBar />
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
    </>
  );
}

export default Clubs;