import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StockTable() {
    const [options, setOptions] = useState({
        animationEnabled: true,
        // exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
          text: "Stock Product"
        },
        backgroundColor: "transparent",
        data: [{
          type: "pie",
          indexLabel: "{label}: {y}%",    
          startAngle: -90,
          dataPoints: [
            { y: 20, label: "Airfare" },
            { y: 24, label: "Food & Drinks" },
            { y: 20, label: "Accommodation" },
            { y: 14, label: "Transportation" },
            { y: 12, label: "Activities" },
            { y: 10, label: "Misc" } 
          ]
        }]
      });
  return (
    <div style={{ width: "100%" }}>
    <CanvasJSChart options={options} />
  </div>
  )
}
