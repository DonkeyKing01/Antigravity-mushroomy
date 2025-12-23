import React from 'react';

const InteractiveLab = () => {
    return (
        <div style={{
            height: '100vh',
            background: '#0f1210',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Petri Dish Effect */}
            <div style={{
                position: 'absolute',
                width: '80vh',
                height: '80vh',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 50px rgba(184, 242, 230, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    color: 'var(--color-accent-ghost)',
                    fontFamily: 'monospace',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>00:00:00</div>
                    <div>INCUBATION SEQUENCE PENDING</div>
                </div>
            </div>

            <h1 style={{ position: 'absolute', top: 'var(--spacing-xl)', left: 'var(--spacing-xl)', fontSize: '2rem' }}>
                Interactive Lab
            </h1>
        </div>
    );
};

export default InteractiveLab;
