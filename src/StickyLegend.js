import React from "react";

const StickyLegend = ({ props }) => {
  const data = [
    { name: "LMXT", color: "#109618" },
    { name: "F-22", color: "#3366CC" },
    { name: "Program C", color: "#DC3912" },
    { name: "P209", color: "#990099" },
  ];
  const opacities = {
    LRP: 0.8,
    Firm: 0.5,
    Potential: 0.3,
  };
  return (
    <div className="fixed top-24 right-0 flex flex-col items-end">
      <div className="w-48 h-full p-4 shadow rounded-l-lg bg-gray-100 flex flex-col justify-center">
        <h6 className="font-bold text-3xl mb-2 text-center">Legend</h6>
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center my-1">
            <p className="font-bold mb-1">{item.name}</p>
            <div className="flex flex-row">
              {Object.entries(opacities).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center mx-1">
                  <div
                    className="w-11 h-11 border border-black"
                    style={{ backgroundColor: item.color, opacity: value }}
                  ></div>
                  <span className="text-xs">{key}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyLegend;
