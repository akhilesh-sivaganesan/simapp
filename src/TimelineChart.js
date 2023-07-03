import { Typography } from "@mui/material";
import React, { useEffect } from "react";

const MyChart = ({ data, name, minStartYear, maxEndYear }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.addEventListener("load", () => {
      window.google.charts.load("current", { packages: ["timeline"] });
      window.google.charts.setOnLoadCallback(drawChart);
    });
    document.body.appendChild(script);

    function drawChart() {

      var containerId = name + "" + data.length;
      var container = document.getElementById(containerId);
      if (container) {
        container.remove();
      }

      container = document.createElement('div');
      container.id = containerId

      var chart = new window.google.visualization.Timeline(container);
      var dataTable = new window.google.visualization.DataTable();
      var parent = document.getElementById('gantt-renderer');



      var headerId = name + "heading" + data.length;
      var heading = document.getElementById(headerId)
      if (heading) {
        heading.remove()
      }

      heading = document.createElement('h5');
      heading.id = headerId
      heading.classList.add('text-2xl')
      heading.textContent = name;

      parent.appendChild(heading)
      parent.appendChild(container);


      dataTable.addColumn({ type: "string", id: "Task ID" });
      dataTable.addColumn({ type: "string", id: "Task Name" });
      dataTable.addColumn({
        type: "string",
        role: "tooltip",
        p: { html: true },
      });
      dataTable.addColumn({ type: "date", id: "Start Date" });
      dataTable.addColumn({ type: "date", id: "End Date" });

      dataTable.addRows(
        data.map((item) => [
          item.Program,
          item.Program + " - " + item.Project + " - " + item.OptionName,
          `<div class="flex flex-col items-start min-w-[200px] p-3 !z-[1000] bg-white h-full">
            <p class="text-2xl font-bold"> ${item.Project} </p>
            <p><span class='font-bold'>Program:</span> ${item.Program}</p>
            <p><span class='font-bold'>Type of Work:</span> ${
              item.TypeOfWork
            }</p>
            <p><span class='font-bold'>Option Name:</span> ${
              item.OptionName
            }</p>
            <p><span class='font-bold'>Building:</span> ${item.Building}</p>
            <p><span class='font-bold'>Occupied Area:</span> ${
              item.OccupiedArea
            }</p>
            <p><span class='font-bold'>Identifier Key:</span> ${
              item.IdentifierKey
            }</p>
            <p><span class='font-bold'>Flag:</span> ${item.Flag}</p>
            <p><span class='font-bold'>Option Details:</span> ${
              item.OptionDetails
            }</p>
            <p><span class='font-bold'>Start Date:</span> ${item.DateStart}</p>
            <p><span class='font-bold'>End Date:</span> ${item.DateEnd}</p>
            <p><span class='font-bold'>Maturity:</span> ${item.Maturity}</p>
            <p><span class='font-bold'>Capital Expenditure:</span> ${
              item.CapitalExpenditure
            }</p>
            <p><span class'font-bold'>DRDB Key:</span> ${item.DRDBKey.join(
              ", "
            )}</p>
            <p><span class='font-bold'>SME:</span> ${item.SME}</p>
            <p><span class='font-bold'>Notes:</span> ${item.Notes}</p>
            <p><span class='font-bold'>Space Characterization:</span> ${
              item.SpaceCharacterization
            }</p>
          </div>`,
          new Date(item.DateStart, 0, 1),
          new Date(item.DateEnd, 11, 31),
        ])
      );

      var options = {
        allowHtml: true,
        tooltip: { isHtml: true },
        alternatingRowStyle: true,
        hAxis: {
          minValue: new Date(2023, 0, 1),
          maxValue: new Date(2040, 11, 31),
        },
        timeline: {
          rowLabelStyle: { fontSize: 12 },
          barLabelStyle: { fontSize: 12 },
        },
      };

      //chart.draw(dataTable, options);

      // Set the height of the chart to fit its content
      var barLabelFontSize = 12;
      try {
        barLabelFontSize = options.timeline.barLabelStyle.fontSize;
      } catch (e) {}
      var barHeight = barLabelFontSize * 2.196;
      var barMargin = barLabelFontSize * 0.75;
      var rowHeight = barHeight + barMargin * 2;
      var chartAreaHeight = rowHeight * data.length;
      console.log("chart area height: ", chartAreaHeight);
      var axisHeight = 24;
      var whiteSpaceHeight = 27;
      var chartHeight = chartAreaHeight + axisHeight + whiteSpaceHeight;
      console.log(chartHeight);
      chartHeight = chartHeight > 200 ? 200 : chartHeight;
      container.style.height = chartHeight + "px";
      chart.draw(dataTable, options);
    }
  }, [data]);

  return null
};

export default MyChart;
