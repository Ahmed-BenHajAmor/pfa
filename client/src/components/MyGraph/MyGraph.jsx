import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";



const MyGraph = ({etudiantStats}) => {
  
  const {presence, absence_justifier, absence_non_justifier} = etudiantStats

  const sum = presence + absence_justifier + absence_non_justifier
  const data = [
    { name: "Présence", value: (presence / sum)*100, color: "#3FAE29" },
    { name: "Absence", value: (absence_non_justifier / sum)*100, color: "#FF6B6B" },
    { name: "Absence justifiée", value: (absence_justifier / sum)*100, color: "#FFC107" },
  ]
  return (
    <div style={{ position: "relative" }}>
      <h2 style={{ color: "grey", fontWeight: "500" }}>Statistiques</h2>
      <h1 style={{fontSize:'30px'}}>Taux de présence</h1>
      
      <hr style={{ marginTop: "5%", marginBottom: "3%" }} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={54}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Legend */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {data.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "5px"}}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
                
              ></div>
              <span style={{ color: item.color, fontSize: "20px" }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGraph;
