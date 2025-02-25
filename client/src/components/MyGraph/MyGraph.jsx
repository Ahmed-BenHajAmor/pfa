import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Présence", value: 60, color: "#3FAE29" },
  { name: "Absence", value: 20, color: "#FF6B6B" },
  { name: "Absence justifiée", value: 20, color: "#FFC107" },
];

const AttendanceChart = () => {
  return (
    <div style={{position:'relative'}} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl">
      <h2 style={{color:'grey',fontWeight:'500'}}>Statistiques</h2>
      <h2 className="text-xl font-bold text-gray-800">Taux de présence</h2>
      <select name="" id="" style={{backgroundColor:'#F8F8FF',color:'#615E83',borderRadius:'20px',padding:'2% 3%',position:'absolute',top:'4%',right:'0',border:'0'}}>
        <option value="">2025</option>
        <option value="">2024</option>
        <option value="">2023</option>
      </select>
      <hr style={{marginTop:'5%',marginBottom:'3%'}}/>
      <PieChart width={300} height={300}>
        <Pie 
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            
            <Cell  key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
    
    
  );
};

export default AttendanceChart;
