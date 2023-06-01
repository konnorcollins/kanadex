import './App.css'
import BitCanvas from './BitCanvas'
import testImage from './assets/violin_concerto.png'

import { useAppDispatch, useAppSelector } from './app/Hooks'
import { setColorPallete, toggleTwoBitsFlag } from './features/ColorPalettes/ColorPaletteSlice'
import { DEFAULT_PALETTE, GOTHIC, RETRO_DARK } from './features/ColorPalettes/ColorPalettes'

function App() {
  const colorPalette = useAppSelector((state) => state.colorPalette);
  const dispatch = useAppDispatch();

  const image = new Image(195, 164);
  image.src = testImage;

  const handleBitToggleClick = () => 
  {
    dispatch(toggleTwoBitsFlag());
  }

  const handlePalleteSwap = (palette: string) =>
  {
    switch (palette)
    {
      case("retro (dark)"):
        dispatch(setColorPallete(RETRO_DARK));
        break;
      case("gothic"):
        dispatch(setColorPallete(GOTHIC));   
        break;
      case("default"):  
      default:
        dispatch(setColorPallete(DEFAULT_PALETTE));
        break;
    }
  }


  return (
    <>
      <h1>WoH BitCanvas</h1>
      <div className="card">
          <button onClick={handleBitToggleClick}>{colorPalette.twoBitsFlag? 2 : 1} bits</button>
      </div>
      <div className="card">
          <button onClick={() => handlePalleteSwap('default')}>default</button>
          <button onClick={() => handlePalleteSwap('retro (dark)')}>gameboy</button>
          <button onClick={() => handlePalleteSwap('gothic')}>gothic</button>
      </div>
      <div className="card">
          <BitCanvas baseImage={image} width={195} height={164} />
      </div>
      <div className="card">
        <p>todo</p>
        <ul>
          <li>(DONE) bit toggle</li>
          <li>(DONE) color palette swap</li>
          <li>add more palettes programmatically</li>
          <li>allow using a custom image</li>
        </ul>
      </div>
      <p className="read-the-docs">
        [this space intentionally left blank]
      </p>
    </>
  )
}

export default App
