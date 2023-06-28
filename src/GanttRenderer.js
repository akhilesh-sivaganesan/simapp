import GanttChart from "./GanttChart";

export default function GanttRenderer({ filteredData }) {
  return (
    <div>
      {filteredData.map((groupObj, i) => (
        <GanttChart name={groupObj.OccupiedArea} data={groupObj.rows} />
      ))}
    </div>
  );
}
