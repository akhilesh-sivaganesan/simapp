import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const TimelineChart = ({ data, name }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData([
      [
        { type: 'string', id: 'Task ID' },
        { type: 'string', id: 'Task Name' },
        { type: 'date', id: 'Start Date' },
        { type: 'date', id: 'End Date' },
      ],
      ...data.map((item) => [
        item.Program,
        `${ item.Project}`,
        new Date(item.DateStart, 0, 1),
        new Date(item.DateEnd, 11, 31),
      ]),
    ]);
  }, [data]);

  return (
    <div className='relative'>
      <p className="absolute top-1 right-1">Occupied Area: {name}</p>
      <Chart
        chartType="Timeline"
        data={chartData}
        width="100%"
        height={`${chartData.length * 60}px`}
      />
    </div>
  );
};

export default TimelineChart;
