import TimelineChart from "./TimelineChart";
import { useEffect } from 'react'
export default function GanttRenderer({ filteredData }) {
  const minStartYear = Math.min(
    ...filteredData.flatMap((groupObj) =>
      groupObj.rows.map((item) => new Date(item.DateStart).getFullYear())
    )
  );
  const maxEndYear = Math.max(
    ...filteredData.flatMap((groupObj) =>
      groupObj.rows.map((item) => new Date(item.DateEnd).getFullYear())
    )
  );

  useEffect(() => {
    // console.log(minStartYear)
    // console.log(maxEndYear)
    var parent = document.getElementById('gantt-renderer');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

  }, [filteredData])
  
  return (
    <div className="flex flex-col space-y-0" id='gantt-renderer'>
      {filteredData.map((groupObj, i) => (
        <TimelineChart name={groupObj.OccupiedArea} data={groupObj.rows} key={i} minStartYear={minStartYear} maxEndYear={maxEndYear}/>
      ))}
    </div>
  );
}
