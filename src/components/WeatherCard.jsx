import React, { useState } from 'react';
import { Cloud, RotateCw, Wind, Thermometer } from 'lucide-react';

export default function WeatherCard({ data, onRefresh, isLoading }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <Cloud className="card-title-icon" size={20} />
          Weather
        </div>
        <button 
          className={`refresh-btn ${isLoading ? 'spinning' : ''}`}
          onClick={onRefresh}
          disabled={isLoading}
        >
          <RotateCw size={16} />
        </button>
      </div>
      <div className="card-content">
        {data ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)' }}>
                  {data.temperature}°<span style={{ fontSize: '1.5rem' }}>C</span>
                </span>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}>
                  <Thermometer size={14} /> Temperature
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <Wind size={18} color="var(--accent-color)" />
                <span style={{ fontWeight: 600 }}>{data.windspeed} km/h</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Wind</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <Cloud size={18} color="var(--accent-color)" />
                <span style={{ fontWeight: 600 }}>Code {data.weathercode}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Condition</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading weather...</div>
        )}
      </div>
    </div>
  );
}
