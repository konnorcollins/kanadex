// src/scenes/gallery/index.tsx

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

import testImage from '../../assets/violin_concerto.png'
import BitCanvas from '../../BitCanvas';

function Gallery()
{

    const image = new Image(195, 164);
    image.src = testImage;


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {['a', 'b', 'c', 'd', 'e'].map((value) => (
                <Card sx={{ margin: "1em" }}>
                    <CardContent>
                        <BitCanvas baseImage={image} width={image.width} height={image.height} />
                        <Typography variant="h5" component="div">
                            violin concerto {value}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Would you like to know more?</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

export default Gallery;