// src/Home.tsx
import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import "./App.css";

interface Club {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
}

export const clubInfo: Club[] = [
  {
    name: "Association for Computing Machinery (ACM)",
    slug: "acm",
    description: "Hackathons, tech and career talks, and community activities!",
    longDescription:
      "The Association for Computing Machinery (ACM) at SCU hosts a variety of tech-oriented events including hackathons, coding workshops, career panels, and guest speakers from the industry. It's a hub for computer science enthusiasts to connect, collaborate, and grow both technically and professionally.",
    image: "/images/acm.jpeg",
  },
  {
    name: "Chess Club",
    slug: "chess",
    description: "Casual and competitive play for all levels.",
    longDescription:
      "The Chess Club welcomes players of all skill levels, from absolute beginners to seasoned competitors. Meet weekly to play casual games, solve puzzles, and occasionally compete in tournaments. Great for improving your strategic thinking in a fun environment.",
    image: "/images/chess.jpeg",
  },
  {
    name: "AI Collaborate",
    slug: "ai-collaborate",
    description:
      "Hackathons, discussions on the use and impact of AI in the tech world, and more!",
    longDescription:
      "AI Collaborate is a student-driven initiative aimed at exploring the frontier of Artificial Intelligence. Through coding projects, debates on ethical AI, and hands-on workshops, members dive deep into real-world applications of machine learning and AI across disciplines.",
    image: "/images/aicollab.jpeg",
  },
  {
    name: "Asian Pacific Student Union (APSU)",
    slug: "apsu",
    description: "Cultural events, cool food, cool activities, and a whole lot of fun!",
    longDescription:
      "The Asian Pacific Student Union is a cultural club dedicated to celebrating and uplifting Asian and Pacific Islander voices. APSU hosts potlucks, cultural showcases, game nights, and advocacy events that foster community and pride in identity.",
    image: "/images/apsu.jpeg",
  },
  {
    name: "Esports",
    slug: "esports",
    description: "Play your favorite games with us and compete for prizes!",
    longDescription:
      "Esports at SCU brings together gamers across genres — from FPS to MOBAs — for organized play, tournaments, and team matches. Whether you're a casual player or trying to go pro, this is your gaming family on campus.",
    image: "/images/esports.jpeg",
  },
  {
    name: "Photography Club",
    slug: "photography",
    description: "Capture stuff with us picture-perfectly.",
    longDescription:
      "The Photography Club helps you develop your creative eye. From portrait to landscape, analog to digital, we explore different techniques through photo walks, editing tutorials, and gallery nights. Cameras welcome, but not required!",
    image: "/images/photography.jpeg",
  }
  
];

interface TileProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

function Tile({ title, description, image, slug }: TileProps) {
  return (
    <Link to={`/clubs/${slug}`} className="tile-link">
      <div className="tile">
        <div
          className="tile-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">SCU Clubs</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clubs">Clubs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function ClubDetail() {
  const { slug } = useParams<{ slug: string }>();
  const club = clubInfo.find((c) => c.slug === slug);

  if (!club) {
    return (
      <>
        <NavBar />
        <div className="page">
          <h2>Club not found.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div
        className="page"
        style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        <h1>{club.name}</h1>
        <img
          src={club.image}
          alt={club.name}
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
        <p style={{ marginTop: "1.5rem", lineHeight: "1.6", fontSize: "1.1rem" }}>
          {club.longDescription}
        </p>
      </div>
    </>
  );
}

function ClubsPage() {
  return (
    <>
      <NavBar />
      <div className="page">
        <section className="clubs-section">
          <h1>All Clubs</h1>
          <div className="tile-grid">
            {clubInfo.map((club) => (
              <Tile
                key={club.slug}
                title={club.name}
                description={club.description}
                image={club.image}
                slug={club.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function Home() {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
                  {clubInfo.slice(0, 3).map((club) => (
                    <Tile
                      key={club.slug}
                      title={club.name}
                      description={club.description}
                      image={club.image}
                      slug={club.slug}
                    />
                  ))}
                </div>

                <h1>Popular Clubs</h1>
                <div className="tile-grid">
                  {clubInfo.slice(3, 6).map((club) => (
                    <Tile
                      key={club.slug}
                      title={club.name}
                      description={club.description}
                      image={club.image}
                      slug={club.slug}
                    />
                  ))}
                </div>
              </section>
            </div>
          </>
        }
      />
      <Route path="/clubs" element={<ClubsPage />} />
      <Route path="/clubs/:slug" element={<ClubDetail />} />
    </Routes>
  );
}

export default Home;
