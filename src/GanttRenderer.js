import TimelineChart from "./TimelineChart";

export default function GanttRenderer({ filteredData }) {
  return (
    <div className="flex flex-col space-y-5">
      {filteredData.map((groupObj, i) => (
        <TimelineChart name={groupObj.OccupiedArea} data={groupObj.rows} key={i}/>
      ))}
    </div>
  );
}
