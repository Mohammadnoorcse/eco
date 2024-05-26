import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ProductCategory() {

    const addSymbols = (e) => {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
    
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
    }

    const options = {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Product Category",
            fontColor: "#94969D",
            fontSize: 18,
            
        },
        axisY: {
            title: "Number of Downloads",
            labelFormatter: addSymbols,
            labelFontColor: "#94969D" ,
            // scaleBreaks: {
            //     autoCalculate: true
            // }
        },
        axisX: {
            title: "Apps",
            labelAngle: 0,
            labelFontColor: "#94969D" 
        },
        backgroundColor: "transparent",
        data: [{
            type: "column",
            dataPoints: [
                { label: "WhatsApp Messenger", y: 68206498},
                { label: "Facebook Messenger", y: 55897709},
                { label: "SHAREit", y: 7570438},
                { label: "UC Browser", y: 17453224},
                { label: "MX Player", y: 6389443},
                { label: "Hotstar", y: 4815084},
                { label: "Truecaller", y: 7631644}	
            ]
        }]
    }

  return (
    <div>
        <CanvasJSChart options={options} />
           
    </div>
  )
}
