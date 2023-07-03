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
    console.log(minStartYear)
    console.log(maxEndYear)
  }, [])
  
  return (
    <div className="flex flex-col space-y-5">
      {filteredData.map((groupObj, i) => (
        <TimelineChart name={groupObj.OccupiedArea} data={groupObj.rows} key={i} minStartYear={minStartYear} maxEndYear={maxEndYear}/>
      ))}
    </div>
  );
}
