import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const TaxBandsChart = ({ chargeableIncome }) => {
  // NTA 2025 Tax Bands
  const bands = [
    { name: '0%', limit: 800000, rate: 0, color: '#51cf66' },
    { name: '15%', limit: 3000000, rate: 0.15, color: '#4dabf7' },
    { name: '18%', limit: 12000000, rate: 0.18, color: '#ffd43b' },
    { name: '21%', limit: 25000000, rate: 0.21, color: '#ff922b' },
    { name: '23%', limit: 50000000, rate: 0.23, color: '#ff6b6b' },
    { name: '25%', limit: Infinity, rate: 0.25, color: '#c92a2a' }
  ];

  // Calculate which bands are reached
  const chartData = bands.map((band, index) => {
    const prevLimit = index === 0 ? 0 : bands[index - 1].limit;
    let amount = 0;
    let isActive = false;
    
    if (chargeableIncome > prevLimit) {
      amount = Math.min(chargeableIncome - prevLimit, band.limit - prevLimit);
      isActive = amount > 0;
    }
    
    return {
      name: band.name,
      amount: amount,
      limit: band.limit === Infinity ? '∞' : `₦${(band.limit / 1000000).toFixed(0)}M`,
      color: band.color,
      isActive,
      rate: band.name
    };
  }).filter(band => band.amount > 0); // Only show bands with income

  const formatCurrency = (value) => {
    if (value >= 1000000) return `₦${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `₦${(value / 1000).toFixed(0)}k`;
    return `₦${value}`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="chart-tooltip">
          <p className="tooltip-rate">Tax Rate: {data.rate}</p>
          <p className="tooltip-amount">Amount: {formatCurrency(data.amount)}</p>
          <p className="tooltip-tax">Tax: {formatCurrency(data.amount * (parseInt(data.rate) / 100))}</p>
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return null;
  }

  return (
    <div className="tax-bands-chart">
      <h4>📊 NTA 2025 Tax Bands Applied</h4>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 50, right: 20, top: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" tickFormatter={formatCurrency} stroke="#b3b3ff" />
            <YAxis type="category" dataKey="name" stroke="#b3b3ff" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-legend">
        {chartData.map((band, index) => (
          <div key={index} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: band.color }}></span>
            <span className="legend-label">{band.rate}:</span>
            <span className="legend-value">{formatCurrency(band.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxBandsChart;