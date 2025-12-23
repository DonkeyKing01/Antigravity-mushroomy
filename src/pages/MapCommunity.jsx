import React from 'react';

const MapCommunity = () => {
    return (
        <div style={{
            height: '100vh',
            background: 'radial-gradient(circle at center, #1b262c 0%, #0a1118 100%)', // Deep dark satellite style
            position: 'relative',
            paddingTop: '80px', // Space for nav? Or header
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2, backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png)', backgroundSize: 'cover', filter: 'invert(1)' }}></div>

            <div style={{ padding: 'var(--spacing-xl)', position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', textShadow: '0 0 20px rgba(0,255,100,0.5)' }}>Global Mycelium Network</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
                    Live distribution data visualization.
                    <br /><br />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-accent-slime)' }}>System Status: Online (Monitoring 14,203 nodes)</span>
                </p>

                <div style={{ marginTop: '4rem' }}>
                    {/* Placeholder for map markers */}
                    <div className="glass-panel" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
                        Waiting for satellite feed...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapCommunity;
