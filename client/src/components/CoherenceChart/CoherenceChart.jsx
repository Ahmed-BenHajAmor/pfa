import { LinearProgress } from '@mui/material';
import React from 'react';
import { LineChart, XAxis, YAxis, Line, Legend, CartesianGrid } from 'recharts';

// Sample data for the chart
const data = [
  { week: 'Semaine 1', lastMonth: 80, thisMonth: 70 },
  { week: 'Semaine 2', lastMonth: 60, thisMonth: 65 },
  { week: 'Semaine 3', lastMonth: 75, thisMonth: 68 },
  { week: 'Semaine 4', lastMonth: 50, thisMonth: 55 },
];

const CoherenceChart = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' ,position:'relative',width:'100%'}}>
      {/* Title and Subtitle */}
      <h2 style={{ color: "grey", fontWeight: "500" }}>Cohérence</h2>
      
      <p style={{ color: 'black',fontSize:'30px',fontWeight:'bold'}}>11% <span style={{color:'red'}}>▼</span></p>
      <div style={{display:'flex',flexWrap:'wrap',width:'40%',position: "absolute",top: "7%",right: "-2%"}}>
          <div style={{width: "12px",
                      height: "12px",
                      marginBottom:'10px',
                      backgroundColor:'#ff69b4',
                      borderRadius: "50%",
                      marginRight:"3%",
                      marginTop:"1%"}}>
          </div>
        <p>Ce mois-ci</p>
          <div style={{width: "12px",
                        height: "12px",
                        marginBottom:'10px',
                        backgroundColor:'#8884d8',
                        borderRadius: "50%",
                        marginRight:"3%",
                        marginLeft:"3%",
                        marginTop:"1%"
                        }}>
          </div>
          <p>Le mois dernier</p>
      </div>
      <hr style={{ marginTop: "5%", marginBottom: "3%" }} />
      {/* Line Chart */}
      <LineChart
      style={{width:'100%'}}
      
        width={600}
        height={300}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* Background Grid */}
        <CartesianGrid stroke="#f5f5f5" />

        {/* X-Axis: Weeks */}
        <XAxis dataKey="week" stroke="grey" margin-top="5px"/>

        {/* Y-Axis: Percentage Values */}
        <YAxis
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          stroke="grey"
          tickFormatter={(value) => `${value}%`}
          padding={{top:''}}
        />


        {/* Line for "Le mois dernier" (Last month) */}
        <Line
          type="monotone"
          dataKey="lastMonth"
          stroke="#8884d8" // Purple color
          name="Le mois dernier"
        />

        {/* Line for "Ce mois-ci" (This month) */}
        <Line
          type="monotone"
          dataKey="thisMonth"
          stroke="#ff69b4" // Pink color
          name="Ce mois-ci"
        />
      
      </LineChart>
    </div>
  );
};

export default CoherenceChart;