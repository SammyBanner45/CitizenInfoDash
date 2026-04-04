import React from 'react';
import { User, RotateCw, MapPin, Mail } from 'lucide-react';

export default function CitizenCard({ data, onRefresh, isLoading }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <User className="card-title-icon" size={20} />
          Citizen Profile
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <img 
              src={data.picture} 
              alt={data.name} 
              style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{data.name}</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                <MapPin size={14} /> {data.city}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Mail size={14} /> {data.email}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading profile...</div>
        )}
      </div>
    </div>
  );
}
