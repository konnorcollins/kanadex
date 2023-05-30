import { useState } from 'react'


import './App.css'
import BitCanvas from './BitCanvas'
import testImage from './assets/violin_concerto.png'


function App() {

  const image = new Image(195, 164);
  image.src = testImage;

  // const BASE_COLORS = ["000000", "FFFFFF", "FF40FF", "C000C0"]
  const altColors = new Map<string, string>()
  altColors.set("000000", "000000");
  altColors.set("ffffff", "ffffff");
  altColors.set("ff40ff", "ff40ff");
  altColors.set("c000c0", "c000c0");


  const [bits, setBits] = useState(2);
  // const [colors, setColors] = useState(new Map<string, string>())

  const handleBitToggle = () => 
  {
    if (bits == 1) setBits(2)
    if (bits == 2) setBits(1)
  }

  return (
    <>
      <h1>WoH BitCanvas</h1>
      <div className="card">
          <button onClick={() => handleBitToggle()}>{bits} bits (toggle not yet working)</button>
        </div>
      <div className="card">
          <BitCanvas baseImage={image} altColors={altColors} />
      </div>
      <div className="card">
        <p>todo</p>
        <ul>
          <li>fully implement bit toggle</li>
          <li>color palette swap</li>
        </ul>
      </div>
      <p className="read-the-docs">
        [this space intentionally left blank]
      </p>
    </>
  )
}

export default App
