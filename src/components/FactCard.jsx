import React from 'react';
import { Lightbulb, RotateCw } from 'lucide-react';

export default function FactCard({ fact, onRefresh, isLoading }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <Lightbulb className="card-title-icon" size={20} />
          City Fact of the Day
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
        {fact ? (
          <div style={{ 
            padding: '1.5rem', 
            background: 'linear-gradient(135deg, var(--accent-light) 0%, #fff 100%)', 
            borderRadius: '12px',
            border: '1px solid #e0e7ff',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: 'var(--accent-dark)',
            position: 'relative'
          }}>
            <span style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', fontSize: '2rem', opacity: 0.2, color: 'var(--accent-color)' }}>"</span>
            {fact}
            <span style={{ position: 'absolute', bottom: '-0.5rem', right: '1rem', fontSize: '2rem', opacity: 0.2, color: 'var(--accent-color)' }}>"</span>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading fact...</div>
        )}
      </div>
    </div>
  );
}
