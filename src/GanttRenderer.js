import GanttChart from "./TimelineChart";

export default function GanttRenderer({ filteredData }) {
  return (
    <div className="flex flex-col space-y-5">
      {filteredData.map((groupObj, i) => (
        <GanttChart name={groupObj.OccupiedArea} data={groupObj.rows} />
      ))}
    </div>
  );
}
