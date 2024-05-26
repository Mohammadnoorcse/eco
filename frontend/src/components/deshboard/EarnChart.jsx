import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function EarnChart() {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
      // Define your options
      const options = {
        animationEnabled: true,
       
        axisX: {
          valueFormatString: "MMM",
          labelFontColor: "#94969D" 
        },
        axisY: {
          
          prefix: "$",
          labelFontColor: "#94969D" 
        },
        backgroundColor: "transparent",
    
        data: [{
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          color: "white",
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 }
          ]
        }]
      };
  
      // Set the options in state
      setChartOptions(options);
    }, []); 
  return (
    <div>
    {chartOptions && (
      <CanvasJSChart options={chartOptions} />
    )}
  </div>
  )
}
