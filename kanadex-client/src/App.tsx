import { useState } from 'react'


import './App.css'
import BitCanvas from './BitCanvas'
import testImage from './assets/violin_concerto.png'


function App() {

  const image = new Image(195, 164);
  image.src = testImage;

  const BASE_COLORS = ["000000", "ffffff", "ff40ff", "c000c0"]
  const altColors = new Map<string, string>()
  altColors.set(BASE_COLORS[0], "182005");
  altColors.set(BASE_COLORS[1], "769518");
  altColors.set(BASE_COLORS[2], "3c4d0c");
  altColors.set(BASE_COLORS[3], "182005"); 


  const [bits, setBits] = useState(2);
  // const [colors, setColors] = useState(new Map<string, string>())

  const handleBitToggle = () => 
  {
    if (bits == 1) setBits(2)
    if (bits == 2) setBits(1)
  }

  const handlePalleteSwap = (palette: string) =>
  {
    switch (palette)
    {
      case("bw"):
        altColors.set(BASE_COLORS[0], "000000");
        altColors.set(BASE_COLORS[1], "ffffff");
        altColors.set(BASE_COLORS[2], "ff40ff");
        altColors.set(BASE_COLORS[3], "c000c0");
        break;
      case("retro (dark)"):
        altColors.set(BASE_COLORS[0], "182005");
        altColors.set(BASE_COLORS[1], "769518");
        altColors.set(BASE_COLORS[2], "3c4d0c");
        altColors.set(BASE_COLORS[3], "182005");
        break;
      case("gothic"):
        altColors.set(BASE_COLORS[0], "3f352d");
        altColors.set(BASE_COLORS[1], "b3ab98");
        altColors.set(BASE_COLORS[2], "a83d33");
        altColors.set(BASE_COLORS[3], "7b8779");     
        break;  
      default:
        altColors.set(BASE_COLORS[0], "000000");
        altColors.set(BASE_COLORS[1], "ffffff");
        altColors.set(BASE_COLORS[2], "ff40ff");
        altColors.set(BASE_COLORS[3], "c000c0");
        break;
    }
  }

  return (
    <>
      <h1>WoH BitCanvas</h1>
      <div className="card">
          <button onClick={() => handleBitToggle()}>{bits} bits (toggle not yet working)</button>
      </div>
      <div className="card">
          <button onClick={() => handlePalleteSwap('retro (dark)')}>gameboy</button>
          <button onClick={() => handlePalleteSwap('gothic')}>gothic</button>
      </div>
      <div className="card">
          <BitCanvas baseImage={image} width={195} height={164} altColors={altColors} />
      </div>
      <div className="card">
        <p>todo</p>
        <ul>
          <li>fully implement bit toggle</li>
          <li>color palette swap (hotswap is broken, cold swap works)</li>
        </ul>
      </div>
      <p className="read-the-docs">
        [this space intentionally left blank]
      </p>
    </>
  )
}

export default App
