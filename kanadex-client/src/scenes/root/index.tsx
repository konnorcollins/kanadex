import { Box, Divider, Drawer, FormControl, InputLabel, List, ListItem, ListItemButton, MenuItem, Select, Switch } from "@mui/material";

import { ALL_PALETTES, ColorPalette } from "../../features/ColorPalettes/ColorPalettes";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { setColorPallete, toggleTwoBitsFlag } from "../../features/ColorPalettes/ColorPaletteSlice";
import { Link, Outlet } from "react-router-dom";




function Root()
{
    const drawerWidth = 200;

    const colorPalette = useAppSelector((state) => state.colorPalette);
    const dispatch = useAppDispatch();

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

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: "border-box"} }}
                >
                <List>
                    <ListItem>
                        <Link to={'/'}><ListItemButton>Home</ListItemButton></Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'gallery'}><ListItemButton>Gallery</ListItemButton></Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        2-Bit <Switch defaultChecked onChange={handleBitToggleClick} />
                    </ListItem>
                    <ListItem>
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
                    </ListItem>
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Root;