import React from 'react';
// import ReactDOM from 'react-dom';
import CalendarHeatmap from 'react-calendar-heatmap';
// import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';
// import './styles.css';

const today = new Date();

export default function DashboardCalendar() {
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });
  return (
    <div>
      <h1>react-calendar-heatmap demos</h1>
      <p>Random values with onClick and react-tooltip</p>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value: {
          date: { toISOString: () => string | Date[]; },
          count: number;
        }) => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        showWeekdayLabels={true}
        onClick={(value: { count: number; }) => alert(`Clicked on value with count: ${value.count}`)}
      />
      {/* <ReactTooltip /> */}
    </div>
  );
}

function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count: number) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
