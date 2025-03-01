import React from "react";

const JustificationStats = () => {
  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded-2xl shadow-lg">
      <h3 className="text-gray-500 text-sm">Statistique</h3>
      <h2 className="text-lg font-semibold">Impact des Justifications</h2>
      
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 flex justify-between">
          <span>Justification acceptées</span> <span className="text-indigo-500">4</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
        </div>

        <p className="text-sm font-medium text-gray-700 flex justify-between">
          <span>Justification refusées</span> <span className="text-gray-500">2</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default JustificationStats;
