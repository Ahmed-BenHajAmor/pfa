import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './JustificationImpactChart.css'

const JustificationImpactChart = () => {
  const data = [
    { name: 'Acceptées', value: 4 },
    { name: 'Refusées', value: 2 },
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto'}}>
      <h2 style={{ color: "grey", fontWeight: "500" }}>Statistique</h2>
      <h1 style={{fontSize:'30px'}}>Impact des Justifications</h1>
      <hr style={{ marginTop: "5%", marginBottom: "3%" }} />
      <BarChart
        style={{width:'100%'}}
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
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
          barSize={60}
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