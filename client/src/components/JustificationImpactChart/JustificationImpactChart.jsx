import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const JustificationImpactChart = () => {
  const data = [
    { name: 'Acceptées', value: 4 },
    { name: 'Refusées', value: 2 },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', color: '#666' }}>Statistique</h3>
      <h2 style={{ textAlign: 'center', color: '#444' }}>Impact des Justifications</h2>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="value" 
          fill="#8884d8" 
          barSize={30}
        >
          {data.map((entry, index) => (
            <rect
              key={`cell-${index}`}
              fill={index === 0 ? '#8884d8' : '#d3d3d3'} 
              stroke="#fff"
              rx={4} 
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default JustificationImpactChart;