import './App.css'
import BitCanvas from './BitCanvas'
import testImage from './assets/violin_concerto.png'


function App() {

  const image = new Image(195, 164);
  image.src = testImage;

  const BASE_COLORS = ["000000", "ffffff", "ff40ff", "c000c0"]
  let altColors = [...BASE_COLORS];


  const handlePalleteSwap = (palette: string) =>
  {
    switch (palette)
    {
      case("bw"):
        altColors = [...BASE_COLORS]
        break;
      case("retro (dark)"):
        altColors = ["182005","769518","3c4d0c","182005"]
        break;
      case("gothic"):
        altColors = ["3f352d", "b3ab98", "a83d33", "7b8779"]   
        break;  
      default:
        altColors = [...BASE_COLORS]
        break;
    }
  }


  return (
    <>
      <h1>WoH BitCanvas</h1>
      <div className="card">
          <button onClick={() => 0}>0 bits (toggle not yet working)</button>
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
