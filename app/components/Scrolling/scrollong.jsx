"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframes for the scrolling animation
const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for scrolling text
const ScrollingText = styled(Box)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "relative",
  animation: `${scrollLeftToRight} 30s linear infinite`,
  width: "400%", // Make the width twice the container width
  display: "flex",
  alignItems: "center",
  padding: "10px 0",
}));

const ScrollPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          position: "relative",
          overflow: "hidden", // Ensure that the overflow is hidden on the container
        }}
      >
        <ScrollingText>
          <Typography variant="h6" component="div">
            ॐ जय गंगे माता, श्री जय गंगे माता । जो नर तुमको ध्याता, मनवांछित फल
            पाता ॥ चंद्र सी जोत तुम्हारी, जल निर्मल आता । शरण पडें जो तेरी, सो
            नर तर जाता ॥ ॥ॐ जय गंगे माता..॥ पुत्र सगर के तारे, सब जग को ज्ञाता ।
            कृपा दृष्टि तुम्हारी, त्रिभुवन सुख दाता ॥ ॥ ॐ जय गंगे माता..॥ एक ही
            बार जो तेरी, शारणागति आता । यम की त्रास मिटा कर, परमगति पाता ॥ ॥ॐ जय
            गंगे माता..॥ आरती मात तुम्हारी, जो जन नित्य गाता । दास वही सहज में,
            मुक्त्ति को पाता ॥ ॥ ॐ जय गंगे माता..॥ ॐ जय गंगे माता, श्री जय गंगे
            माता । जो नर तुमको ध्याता, मनवांछित फल पाता ॥ ॐ जय गंगे माता, श्री
            जय गंगे माता ।
          </Typography>
        </ScrollingText>
      </Box>
    </Box>
  );
};

export default ScrollPage;
