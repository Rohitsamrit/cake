import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Canvas = () => {
  const dispatch = useDispatch();
  const spritePosition = useSelector((state) => state.motion.position);

  const handleCanvasClick = (event) => {
    // Dispatch action to move sprite to mouse pointer
    dispatch(moveSpriteToPosition(event.clientX, event.clientY));
  };

  return (
    <Card
      className="highlighted"
      style={{
        position: "relative",
        width: "700px",
        margin: "24px auto",
        height: "581px",
        overflow: "hidden",
      }}
      onClick={handleCanvasClick}
    >
      <h1 style={{ textAlign: "center", fontSize: "14px" }}>Bake Cake</h1>
      {/* Render sprite or other canvas elements here */}
      <div id="docx"></div>
    </Card>
  );
};

export default Canvas;
