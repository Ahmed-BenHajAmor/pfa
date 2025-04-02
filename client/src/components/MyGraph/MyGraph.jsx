import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const MyGraph = ({ etudiantStats }) => {
  const { presence, absence_justifier, absence_non_justifier } = etudiantStats;

  const sum = presence + absence_justifier + absence_non_justifier;
  const data = [
    { name: "Présence", value: (presence / sum) * 100, color: "#3FAE29" },
    { name: "Absence", value: (absence_non_justifier / sum) * 100, color: "#FF6B6B" },
    { name: "Absence justifiée", value: (absence_justifier / sum) * 100, color: "#FFC107" },
  ];

  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "600px", // Optional: maximum width constraint
      margin: "0 auto",
      padding: "1rem"
    }}>
      <h2 style={{ 
        color: "grey", 
        fontWeight: "500",
        fontSize: "clamp(1rem, 2.5vw, 1.5rem)" // Responsive font size
      }}>
        Statistiques
      </h2>
      <h1 style={{ 
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)" // Responsive font size
      }}>
        Taux de présence
      </h1>
      
      <hr style={{ 
        marginTop: "5%", 
        marginBottom: "3%",
        border: "none",
        height: "1px",
        backgroundColor: "#ccc"
      }} />

      <div style={{ 
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap", // Allow wrapping on smaller screens
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(1rem, 3vw, 2rem)" // Responsive gap
      }}>
        <PieChart 
          width={Math.min(window.innerWidth * 0.4, 300)} // Responsive width
          height={Math.min(window.innerHeight * 0.4, 300)} // Responsive height
        >
          <Pie
            data={data}
            cx="50%" // Center horizontally
            cy="50%" // Center vertically
            innerRadius={Math.min(window.innerWidth * 0.1, 54)} // Responsive inner radius
            outerRadius={Math.min(window.innerWidth * 0.2, 100)} // Responsive outer radius
            fill="#8884d8"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Legend */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(0.75rem, 2vw, 1.25rem)", // Responsive gap
          padding: "1rem"
        }}>
          {data.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem"
              }}
            >
              <div
                style={{
                  width: "clamp(8px, 1.5vw, 12px)", // Responsive dot size
                  height: "clamp(8px, 1.5vw, 12px)",
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
              ></div>
              <span style={{ 
                color: item.color, 
                fontSize: "clamp(0.9rem, 2vw, 1.25rem)" // Responsive text
              }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGraph;