import React from 'react';
import { DollarSign, RotateCw } from 'lucide-react';

export default function CurrencyCard({ data, onRefresh, isLoading }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <DollarSign className="card-title-icon" size={20} />
          Currency (1 INR)
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
             {[
               { currency: 'USD', value: data.usd, symbol: '$' },
               { currency: 'EUR', value: data.eur, symbol: '€' },
               { currency: 'GBP', value: data.gbp, symbol: '£' },
             ].map((item) => (
               <div key={item.currency} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: '#fff', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                 <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{item.currency}</span>
                 <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                   {item.symbol} {item.value.toFixed(4)}
                 </span>
               </div>
             ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading rates...</div>
        )}
      </div>
    </div>
  );
}
