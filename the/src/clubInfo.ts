export interface Club {
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
      longDescription: "The Association for Computing Machinery (ACM) at SCU hosts a variety of tech-oriented events including hackathons, coding workshops, career panels, and guest speakers from the industry. It's a hub for computer science enthusiasts to connect, collaborate, and grow both technically and professionally.",
      image: "/images/acm.jpeg"
    },
    {
      name: "Chess Club",
      slug: "chess",
      description: "Casual and competitive play for all levels.",
      longDescription: "The Chess Club welcomes players of all skill levels, from absolute beginners to seasoned competitors. Meet weekly to play casual games, solve puzzles, and occasionally compete in tournaments. Great for improving your strategic thinking in a fun environment.",
      image: "/images/chess.jpeg"
    },
    {
      name: "AI Collaborate",
      slug: "ai-collaborate",
      description: "Hackathons, discussions on the use and impact of AI in the tech world, and more!",
      longDescription: "AI Collaborate is a student-driven initiative aimed at exploring the frontier of Artificial Intelligence. Through coding projects, debates on ethical AI, and hands-on workshops, members dive deep into real-world applications of machine learning and AI across disciplines.",
      image: "/images/aicollab.jpeg"
    },
    {
      name: "Asian Pacific Student Union (APSU)",
      slug: "apsu",
      description: "Cultural events, cool food, cool activities, and a whole lot of fun!",
      longDescription: "The Asian Pacific Student Union is a cultural club dedicated to celebrating and uplifting Asian and Pacific Islander voices. APSU hosts potlucks, cultural showcases, game nights, and advocacy events that foster community and pride in identity.",
      image: "/images/apsu.jpeg"
    },
    {
      name: "Esports",
      slug: "esports",
      description: "Play your favorite games with us and compete for prizes!",
      longDescription: "Esports at SCU brings together gamers across genres — from FPS to MOBAs — for organized play, tournaments, and team matches. Whether you're a casual player or trying to go pro, this is your gaming family on campus.",
      image: "/images/esports.jpeg"
    },
    {
      name: "Photography Club",
      slug: "photography",
      description: "Capture stuff with us picture-perfectly.",
      longDescription: "The Photography Club helps you develop your creative eye. From portrait to landscape, analog to digital, we explore different techniques through photo walks, editing tutorials, and gallery nights. Cameras welcome, but not required!",
      image: "/images/photography.jpeg"
    },
    {
      name: "Drama Club",
      slug: "drama",
      description: "Act, direct, or write for stage productions.",
      longDescription: "Drama Club provides opportunities to participate in theater productions both onstage and backstage. Whether you're an actor, writer, stagehand, or just a drama fan, this is the place to express yourself through storytelling.",
      image: "/images/drama.jpg"
    },
    {
      name: "Dance Crew",
      slug: "dance-crew",
      description: "Hip-hop, contemporary, and cultural performances.",
      longDescription: "Join SCU's Dance Crew for electrifying performances and collaborative choreography. Open to dancers of all styles and skill levels, we blend hip-hop, contemporary, and cultural traditions into unforgettable showcases.",
      image: "/images/photography.jpeg"
    }
  ];
  