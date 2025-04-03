import { LinearProgress } from '@mui/material';
import React from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip } from 'recharts';

const CoherenceChart = ({ etudiantStats }) => {
  const data = [
    { 
      week: 'Semaine 1', 
      lastMonth: etudiantStats?.previousMonth?.firstWeekScore ?? 0, 
      thisMonth: etudiantStats?.thisMonth?.firstWeekScore ?? 0 
    },
    { 
      week: 'Semaine 2', 
      lastMonth: etudiantStats?.previousMonth?.secondWeekScore ?? 0, 
      thisMonth: etudiantStats?.thisMonth?.secondWeekScore ?? 0 
    },
    { 
      week: 'Semaine 3', 
      lastMonth: etudiantStats?.previousMonth?.thirdWeekScore ?? 0, 
      thisMonth: etudiantStats?.thisMonth?.thirdWeekScore ?? 0 
    },
    { 
      week: 'Semaine 4', 
      lastMonth: etudiantStats?.previousMonth?.fourthWeekScore ?? 0, 
      thisMonth: etudiantStats?.thisMonth?.fourthWeekScore ?? 0 
    },
  ];


  const coherence = (data[0].thisMonth + data[1].thisMonth + data[2].thisMonth + data[3].thisMonth) / 4 - 
                   (data[0].lastMonth + data[1].lastMonth + data[2].lastMonth + data[3].lastMonth) / 4 || 0;

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '1rem'
    }}>
      <h2 style={{ 
        color: "grey", 
        fontWeight: "500",
        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
      }}>
        Cohérence
      </h2>
      
      <p style={{ 
        color: 'black',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: 'bold',
        margin: '0.5rem 0'
      }}>
        {Math.abs(Math.floor(coherence))}% 
        {coherence < 0 ? 
          <span style={{ color: 'red', marginLeft: '0.5rem' }}>▼</span> : 
          <span style={{ color: 'green', marginLeft: '0.5rem' }}>▲</span>}
      </p>

      

      <hr style={{ 
        marginTop: "5%", 
        marginBottom: "3%",
        border: "none",
        height: "1px",
        backgroundColor: "#ccc"
      }} />

<div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 'auto',
        top: 'clamp(2rem, 7vh, 4rem)',
        right: 'clamp(1rem, 2vw, 2rem)',
        gap: '0.5rem',
        marginBottom: "10px",
        justifySelf: 'end'
      }}>
        <div style={{ 
          display: "flex", 
          gap: 'clamp(0.5rem, 1vw, 0.75rem)', 
          alignItems: 'center'
        }}>
          <div style={{
            width: 'clamp(8px, 1.5vw, 12px)',
            height: 'clamp(8px, 1.5vw, 12px)',
            backgroundColor: '#ff69b4',
            borderRadius: "50%"
          }} />
          <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
            Le mois avant-dernier
          </p>
        </div>

        <div style={{ 
          display: "flex", 
          gap: 'clamp(0.5rem, 1vw, 0.75rem)', 
          alignItems: 'center'
        }}>
          <div style={{
            width: 'clamp(8px, 1.5vw, 12px)',
            height: 'clamp(8px, 1.5vw, 12px)',
            backgroundColor: '#8884d8',
            borderRadius: "50%"
          }} />
          <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
            Le mois dernier
          </p>
        </div>
      </div>

      <LineChart
        style={{ width: '100%' }}
        width={Math.min(window.innerWidth * 0.9, 600)}
        height={Math.min(window.innerHeight * 0.4, 300)}
        data={data}
        margin={{ 
          top: 10, 
          right: 10, 
          left: window.innerWidth < 480 ? -20 : 0, 
          bottom: 10 
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />

        <XAxis 
          dataKey="week" 
          stroke="grey" 
          fontSize={window.innerWidth < 480 ? 12 : 14} 
          interval={0}
        />

        <YAxis
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          stroke="grey"
          tickFormatter={(value) => `${value}%`}
          fontSize={window.innerWidth < 480 ? 12 : 14}
          width={window.innerWidth < 480 ? 40 : 60}
        />

        <Tooltip 
          formatter={(value) => `${value}%`}
          contentStyle={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
        />

        <Line
          type="monotone"
          dataKey="lastMonth"
          stroke="#8884d8"
          name="Le mois dernier"
          strokeWidth={window.innerWidth < 480 ? 2 : 3}
        />

        <Line
          type="monotone"
          dataKey="thisMonth"
          stroke="#ff69b4"
          name="Le mois avant-dernier" 
          strokeWidth={window.innerWidth < 480 ? 2 : 3}
        />
      </LineChart>
    </div>
  );
};

export default CoherenceChart;