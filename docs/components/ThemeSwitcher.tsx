'use client';

import React, { useState, useEffect } from 'react';

type Design = 'basic' | 'game' | 'crayon';
type Theme = 'light' | 'dark';

export function ThemeSwitcher() {
  const [design, setDesign] = useState<Design>('basic');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load from localStorage
    const savedDesign = localStorage.getItem('pine-design') as Design | null;
    const savedTheme = localStorage.getItem('pine-theme') as Theme | null;
    
    if (savedDesign) setDesign(savedDesign);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Apply to document
    document.documentElement.setAttribute('data-pine-design', design);
    document.documentElement.setAttribute('data-pine-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('pine-design', design);
    localStorage.setItem('pine-theme', theme);
  }, [design, theme]);

  const buttonStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    margin: '0.25rem',
    border: '1px solid currentColor',
    borderRadius: '0.375rem',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  const activeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'var(--nextra-primary-hue)',
    color: 'white',
    borderColor: 'var(--nextra-primary-hue)',
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      padding: '1rem',
      border: '1px solid var(--nextra-border-color)',
      borderRadius: '0.5rem',
      margin: '2rem 0',
    }}>
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 600 }}>
          Theme
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <button
            style={theme === 'light' ? activeButtonStyle : buttonStyle}
            onClick={() => setTheme('light')}
          >
            ☀️ Light
          </button>
          <button
            style={theme === 'dark' ? activeButtonStyle : buttonStyle}
            onClick={() => setTheme('dark')}
          >
            🌙 Dark
          </button>
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 600 }}>
          Design Variant
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <button
            style={design === 'basic' ? activeButtonStyle : buttonStyle}
            onClick={() => setDesign('basic')}
          >
            🎯 Basic
          </button>
          <button
            style={design === 'game' ? activeButtonStyle : buttonStyle}
            onClick={() => setDesign('game')}
          >
            🎮 Game
          </button>
          <button
            style={design === 'crayon' ? activeButtonStyle : buttonStyle}
            onClick={() => setDesign('crayon')}
          >
            🖍️ Crayon
          </button>
        </div>
      </div>
    </div>
  );
}
