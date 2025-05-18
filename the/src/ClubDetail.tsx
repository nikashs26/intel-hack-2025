// src/pages/ClubDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { clubInfo } from './clubInfo';

function ClubDetail() {
  const { slug } = useParams<{ slug: string }>();
  const club = clubInfo.find((c) => c.slug === slug);

  if (!club) {
    return <div style={{ padding: '2rem' }}>Club not found.</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{club.name}</h1>
      <img
        src={club.image}
        alt={club.name}
        style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
      />
      <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{club.longDescription}</p>

      <button
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => alert(`You clicked "I'm Interested" for ${club.name}`)}
      >
        I’m Interested
      </button>
    </div>
  );
}

export default ClubDetail;
