import { useEffect, useRef } from "react";

type BitCanvasProps = {
    baseImage: HTMLImageElement;
    width: number;
    height: number;
    altColors: Map<string, string>;
};

// helper functions
const getColorString = (r: number, g: number, b: number): string => {
    const rstr = r.toString(16).padStart(2, '0');
    const gstr = g.toString(16).padStart(2, '0');
    const bstr = b.toString(16).padStart(2, '0');
    return rstr + gstr + bstr
}

const getColorValues = (hex: string): Array<number> => {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b]
}

const translateColor = (hex: string, altColors: Map<string, string>): string =>
{

    const translatedHex = altColors.get(hex);
    if (translatedHex) return translatedHex

    // failsafe
    return hex
}

function BitCanvas({baseImage, width, height, altColors}: BitCanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // "000000"; // white
    // "FFFFFF"; // black
    // "FF40FF"; // bright pink
    // "C000C0"; // dark pink

    useEffect(() => {
        if (canvasRef.current)
        {
            const context = canvasRef.current.getContext('2d');

            context?.drawImage(baseImage, 0, 0)

            
            let imgData = context?.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
            if (imgData) {
                for (let i = 0; i < imgData?.data.length; i+= 4)
                {

                    const originalHex = getColorString(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2])
                    const translatedHex = translateColor(originalHex, altColors);
                    const [r, g, b] = getColorValues(translatedHex);

                    // r
                    imgData.data[i] = r;
                    imgData.data[i + 1] = g;
                    imgData.data[i + 2] = b;
                    //imgData.data[i + 3] = 255;
                }
                context?.putImageData(imgData, 0, 0);
            }
            
            
        }    
    });

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