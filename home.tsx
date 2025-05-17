import React from "react";
import "./Home.css";

interface Club {
  name: string;
  description: string;
}

const clubsData: Club[] = [
  { name: "Robotics Club", description: "Build robots and compete in national events." },
  { name: "Drama Society", description: "Act, direct, or write for stage productions." },
  { name: "Gaming Guild", description: "Join tournaments and game nights weekly." },
  { name: "Photography Club", description: "Capture the world through your lens." },
  { name: "Debate Union", description: "Sharpen your public speaking skills." },
  { name: "Coding Collective", description: "Hackathons, code jams, and tech talks." },
  { name: "Chess Club", description: "Casual and competitive play for all levels." },
  { name: "Dance Crew", description: "Hip-hop, contemporary, and cultural performances." },
];

interface TileProps {
  title: string;
  description: string;
}

const Tile: React.FC<TileProps> = ({ title, description }) => (
  <div className="tile">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>New Clubs</h1>
      <div className="tile-grid">
        {clubsData.slice(0, 3).map((club, index) => (
          <Tile key={`new-${index}`} title={club.name} description={club.description} />
        ))}
      </div>

      <h1>Popular Clubs</h1>
      <div className="tile-grid">
        {clubsData.slice(3, 6).map((club, index) => (
          <Tile key={`popular-${index}`} title={club.name} description={club.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;
