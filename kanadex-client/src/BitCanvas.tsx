// BitCanvas.tsx

import { useEffect, useRef } from "react";
import { useAppSelector } from "./app/Hooks";
import { getColorString, getColorValues, translateColor } from "./features/ColorPalettes/ColorUtils"

export interface BitCanvasProps {
    baseImage: HTMLImageElement;
    width: number;
    height: number;
}

function BitCanvas({baseImage, width, height}: BitCanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let context: CanvasRenderingContext2D;

    const colorPalette = useAppSelector((state) => state.colorPalette);

    // store the original information here
    let ORIGINAL_IMAGE_DATA:  ImageData;

    // handle loading the original image
    const loadImage = () =>
    {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;
        context = ctx;
        context.drawImage(baseImage, 0, 0);
        ORIGINAL_IMAGE_DATA = context.getImageData(0, 0, width, height);
    }

    // handle loading the image with the alternative colors applied over it
    const drawImage = () =>
    {
        // a:"What do you mean if there isn't a reference?"
        // b:"I'm just asking questions"
        if (!canvasRef.current) return;
        if (!context) return;

        // draw the original image
        context.putImageData(ORIGINAL_IMAGE_DATA, 0, 0) 

        // if alternative colors are defined, load the image data, modify, and re-put
        const imgData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        if (imgData) {
            for (let i = 0; i < imgData.data.length; i+= 4)
            {
                // grab the hex value, (optionally) translate it to the selected palette, then set the rgb values manually
                const originalHex = getColorString(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2])
                const translatedHex = translateColor(originalHex, colorPalette.twoBitsFlag, ...colorPalette.palette.colors); 
                const [r, g, b] = getColorValues(translatedHex);

                imgData.data[i] = r;
                imgData.data[i + 1] = g;
                imgData.data[i + 2] = b;
                //imgData.data[i + 3] = 255; // uncomment in case we need an alpha channel clamp 
            }
            context.putImageData(imgData, 0, 0);
        }
    }

    useEffect(() => {
        const initialLoad = async () => {
            loadImage();
        }
        initialLoad().finally(() => drawImage())
    });

    return (
        <canvas 
            ref={canvasRef}
            width={width}
            height={height}
            style={{ border: "2px solid black", width: "100%", height: "100%",}}
        />
    )
}

export default BitCanvas