import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const StickyLegend = ({ props }) => {
  const [showLegend, setShowLegend] = useState(false);
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
    <Box
      sx={{
        position: "fixed",
        top: 100,
        right: showLegend ? 0 : -180,
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        transition: "all 0.3s",
      }}
      onMouseEnter={() => setShowLegend(true)}
      onMouseLeave={() => setShowLegend(true)}
    >
      <Box
        sx={{
          width: 200,
          height: "100%",
          bgcolor: showLegend ? "#fdfdfd" : "#01478c",
          transition: "all 0.3s",
          p: 2,
          boxShadow: 1,
          borderRadius: "12px 0px 0px 12px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
          Legend
        </Typography>
        {data.map((item) => (
          <Box key={item.name} sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              {item.name}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {Object.entries(opacities).map(([key, value]) => (
                <Box key={key} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: 1 }}>
                  <Box
                    sx={{
                      width: 45,
                      height: 45,
                      border: "1px solid black",
                      bgcolor: item.color,
                      opacity: value,
                    }}
                  ></Box>
                  <Typography variant="caption">{key}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StickyLegend;
