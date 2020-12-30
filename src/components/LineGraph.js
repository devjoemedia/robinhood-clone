import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import './LineGraph.css';

function LineGraph() {
  const  [data, setData]  = useState([]);

  let options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            format: "MM/DD/YY"
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  const createMockData = () => {
    let data = [];
    let value = 50;

    for (var i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setData(data);
  };

  useEffect(() => {
    createMockData();
  }, []);

  return (
    <div className="linegraph">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              data: data,
              backgroundColor: 'black', 
              borderColor: '#5AC53B',
              borderWidth: 2,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default LineGraph;
