// BitCanvas.tsx

import { useRef } from "react";
import { useAppSelector } from "./app/Hooks";

export interface BitCanvasProps {
    baseImage: HTMLImageElement;
    width: number;
    height: number;
};

// helper functions
// converts r,g,b values between 0-255 into a 6-digit hex string
const getColorString = (r: number, g: number, b: number): string => {
    const rstr = r.toString(16).padStart(2, '0');
    const gstr = g.toString(16).padStart(2, '0');
    const bstr = b.toString(16).padStart(2, '0');
    return rstr + gstr + bstr
}

// converts a 6-digit hex string into r,g,b values between 0-255 (inclusive)
const getColorValues = (hex: string): Array<number> => {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b]
}

const BASE_COLOR_0 = "000000"; // white
const BASE_COLOR_1 = "ffffff"; // black
const BASE_COLOR_2 = "ff40ff"; // bright pink
const BASE_COLOR_3 = "c000c0"; // dark pink

// handles translating the expected stock colors into your selected palette
const translateColor = (hex: string, twoBit: boolean, ...altColors: string[]): string =>
{
    // just in case we somehow mess up the parameters
    if (altColors.length != 2 && altColors.length != 4) return hex;

    switch(hex)
    {
        case(BASE_COLOR_0):
            return altColors[0];
        case(BASE_COLOR_1):
            return altColors[1];
        case(BASE_COLOR_2):
            return twoBit ? altColors[2] : altColors[0];
        case(BASE_COLOR_3):
            return twoBit ? altColors[3] : altColors[1];
        default:
            return hex;
    }
}

function BitCanvas({baseImage, width, height}: BitCanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const context = canvasRef.current?.getContext('2d');

    const colorPalette = useAppSelector((state) => state.colorPalette);

    // store the original information here
    let ORIGINAL_IMAGE_DATA:  ImageData;

    // handle loading the original image
    const loadImage = () =>
    {
        if (!context) return;
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
        let imgData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        if (imgData) {
            for (let i = 0; i < imgData.data.length; i+= 4)
            {
                // grab the hex value, (optionally) translate it to the selected palette, then set the rgb values manually
                const originalHex = getColorString(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2])
                const translatedHex = translateColor(originalHex, colorPalette.twoBitsFlag, ...colorPalette.colors); 
                const [r, g, b] = getColorValues(translatedHex);

                imgData.data[i] = r;
                imgData.data[i + 1] = g;
                imgData.data[i + 2] = b;
                //imgData.data[i + 3] = 255; // uncomment in case we need an alpha channel clamp 
            }
            context.putImageData(imgData, 0, 0);
        }
    }


    loadImage()
    drawImage()

    return (
        <canvas 
            ref={canvasRef}
            width={width}
            height={height}
            style={{ border: "2px solid black"}}
        />
    )
}

export default BitCanvas