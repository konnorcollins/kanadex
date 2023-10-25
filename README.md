# kanadex
Custom content gallery for [World of Horror](https://store.steampowered.com/app/913740/WORLD_OF_HORROR/).
This is unofficial and not affiliated with the developer panstasz or the publisher ysbrd games.  
Please support the official release.

## kanadex-client
Front-end react application.  Handles the display of custom WoH card images.
### BitCanvas (custom react component)
Draws an image and then swaps the colors in a 1-bit or 2-bit format. 
This allows for previewing any custom game card image in your preferred color palette.

### TODO:
* fully implement bit toggle (DONE)
* fully implement color palette swap (DONE)
* add better method of automagically creating palette swap buttons (DONE)
* add the remainder of in-game color palettes
* allow for the user to preview their own image

## kanadex-server
Back-end api.  Monolith.  Handles file upload and retrieval.

## How to run locally
See the docker-compose.yml