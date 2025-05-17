import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clubs from "./Clubs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clubs" element={<Clubs />} />

      </Routes>
    </Router>
  );
}





interface Club {
  name: string;
  description: string;
  image: string;
}

const clubsData: Club[] = [
  { name: "Association for Computing Machinery (ACM)", description: "Hackathons, tech and career talks, and community activities!", image:"/images/acm.jpeg"},
  { name: "Chess Club", description: "Casual and competitive play for all levels.", image:"/images/chess.jpeg" },
  
  { name: "AI Collaborate", description: "Hackathons, discussions on the use and impact of AI in the tech world, and more!", image: "/images/aicollab.jpeg" },
  { name: "Asian Pacific Student Union (APSU)", description: "Cultural events, cool food, cool activities, and a whole lot of fun!", image: "/images/apsu.jpeg" },
  { name: "Esports", description: "Play your favorite games with us and compete for prizes!", image: "/images/esports.jpeg" },
  { name: "Photography Club", description: "Capture stuff with us picture-perfectly.", image: "/images/coding.jpg" },
  { name: "Chess Club", description: "Act, direct, or write for stage productions.", image: "/images/drama.jpg" },
  { name: "Dance Crew", description: "Hip-hop, contemporary, and cultural performances.", image: "/images/photography.jpeg" },
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
          <li><a href="#">Home</a></li>
          <li><a href="./Clubs.tsx">Clubs</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <NavBar />
      <div className="page">
        <section id="home" className="home-section">
          <h1>Welcome to SCU Clubs</h1>
          <p>Discover amazing clubs and get involved on campus.</p>
        </section>

        <section id="clubs" className="clubs-section">
          <h1>New Clubs</h1>
          <div className="tile-grid">
            {clubsData.slice(0, 3).map((club, index) => (
              <Tile
                key={`new-${index}`}
                title={club.name}
                description={club.description}
                image={club.image}
              />
            ))}
          </div>

          <h1>Popular Clubs</h1>
          <div className="tile-grid">
            {clubsData.slice(3, 6).map((club, index) => (
              <Tile
                key={`popular-${index}`}
                title={club.name}
                description={club.description}
                image={club.image}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
