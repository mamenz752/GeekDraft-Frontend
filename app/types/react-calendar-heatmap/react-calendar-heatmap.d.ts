declare module 'react-calendar-heatmap' {
    import * as React from 'react';
  
    interface Value {
      date: string;
      count: number;
    }
  
    interface CalendarHeatmapProps {
      startDate?: Date;
      endDate?: Date;
      values: Value[];
      classForValue?: (value: Value) => string;
      tooltipDataAttrs?: (value: Value) => { [key: string]: string };
      // 他のプロパティも必要に応じて追加してください
    }
  
    class CalendarHeatmap extends React.Component<CalendarHeatmapProps, undefined> {}
  
    export default CalendarHeatmap;
  }