import React from 'react';

const SpeciesCard = ({ species }) => {
    return (
        <div className="glass-panel" style={{
            overflow: 'hidden',
            transition: 'transform 0.3s var(--ease-organic)',
            cursor: 'pointer',
            background: 'rgba(26, 38, 31, 0.6)'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.querySelector('.shine').style.opacity = 0.5;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.shine').style.opacity = 0;
            }}
        >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={species.image}
                    alt={species.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Shine effect overlay */}
                <div className="shine" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    pointerEvents: 'none'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem',
                    paddingTop: '2rem'
                }}>
                    <span style={{
                        fontSize: '0.7rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        background: categories[species.category] ? categories[species.category].color : '#555',
                        color: '#fff',
                        textTransform: 'uppercase'
                    }}>
                        {species.category}
                    </span>
                </div>
            </div>
            <div style={{ padding: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.2rem' }}>{species.name}</h3>
                <p style={{ fontStyle: 'italic', fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem' }}>{species.latinName}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {species.description}
                </p>
            </div>
        </div>
    );
};
import { categories } from '../utils/mockData';

export default SpeciesCard;
