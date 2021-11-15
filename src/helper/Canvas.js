import React, { useRef, useEffect, forwardRef } from "react";
import { ImageCanvas } from "../components/ImageList/ImageList.style";

const Canvas = forwardRef((props, ref) => {
  const { canvasimage } = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let imageObj = new Image();
    imageObj.src = canvasimage;

    imageObj.onload = () => {
      context.drawImage(imageObj, 0, 0, 300, 200);
    };
  }, []);

  return <ImageCanvas ref={canvasRef} {...props} />;
});

export default Canvas;
