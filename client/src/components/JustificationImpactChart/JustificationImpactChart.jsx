import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './JustificationImpactChart.css';

const JustificationImpactChart = ({ etudiantStats }) => {
  const data = [
    { name: 'Acceptées', value: etudiantStats?.valide ?? 0 },
    { name: 'Refusées', value: etudiantStats?.rejeter ?? 0 },
    { name: 'En attente', value: etudiantStats?.enAttente ?? 0 },
  ];

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '800px', // Optional maximum width
      margin: '0 auto',
      padding: '1rem'
    }}>
      <h2 style={{ 
        color: "grey", 
        fontWeight: "500",
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' // Responsive font size
      }}>
        Statistique
      </h2>
      <h1 style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' // Responsive font size
      }}>
        Impact des Justifications
      </h1>
      <hr style={{ 
        marginTop: "5%", 
        marginBottom: "3%",
        border: "none",
        height: "1px",
        backgroundColor: "#ccc"
      }} />

      <BarChart
        style={{ width: '100%' }}
        width={Math.min(window.innerWidth * 0.9, 600)} // Responsive width
        height={Math.min(window.innerHeight * 0.4, 300)} // Responsive height
        data={data}
        margin={{
          top: 20,
          right: window.innerWidth < 480 ? 10 : 30, // Responsive margins
          left: window.innerWidth < 480 ? 0 : 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis 
          dataKey="name" 
          type="category"
          allowDuplicatedCategory={false}
          fontSize={window.innerWidth < 480 ? 12 : 14} // Responsive font size
          interval={0} // Show all labels
        />

        <YAxis 
          tickCount={3}
          interval={0}
          fontSize={window.innerWidth < 480 ? 12 : 14} // Responsive font size
          width={window.innerWidth < 480 ? 40 : 60} // Responsive Y-axis width
        />

        <Tooltip 
          contentStyle={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }} // Responsive tooltip font
        />

        <Legend 
          wrapperStyle={{ 
            fontSize: 'clamp(0.8rem, 2vw, 1rem)', // Responsive legend font
            paddingTop: '1rem'
          }} 
        />

        <Bar
          dataKey="value" 
          fill="#8884d8" 
          barSize={Math.min(window.innerWidth * 0.1, 60)} // Responsive bar size
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