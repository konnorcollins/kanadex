// App.tsx
import BitCanvas from './BitCanvas'
import { useAppDispatch, useAppSelector } from './app/Hooks'
import { setColorPallete, toggleTwoBitsFlag } from './features/ColorPalettes/ColorPaletteSlice'
import { ALL_PALETTES, ColorPalette } from './features/ColorPalettes/ColorPalettes'

import './App.css'
import testImage from './assets/violin_concerto.png'
import { Button, Card, CardActions, CardContent, CssBaseline, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, ThemeProvider, Typography, createTheme } from '@mui/material'

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
    ALL_PALETTES.forEach(p => {
      if (p.name == palette)
      {
        dispatch(setColorPallete(p));
      }
    });
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  })

  return (
    <>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Card>
          <CardContent>
            <BitCanvas baseImage={image} width={image.width} height={image.height} />
            <Typography variant="h5" component="div">
              violin concerto
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Would you like to know more?</Button>
          </CardActions>
        </Card>
        <Switch defaultChecked onChange={handleBitToggleClick} />
        <FormControl>
          <InputLabel id="palette-select-label">Palette</InputLabel>
          <Select
            labelId="palette-select-label"
            id="palette-select"
            value={colorPalette.palette.name}
            label="Palette"
            onChange={(event) => handlePalleteSwap(event.target.value)}
          >
            {ALL_PALETTES.map((value: ColorPalette, index) => 
              (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>)
            )}
          </Select>
        </FormControl>
      </ThemeProvider>
    </>
  )
}

export default App
