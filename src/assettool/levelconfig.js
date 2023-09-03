
export const tilesetpath = "./forest-tiles.png";
export const tilefilew = 640; // px
export const tilefileh = 224; // px 

// export const tilesetpath = "./magecity.png";
// export const tilefilew = 256; // px
// export const tilefileh = 1408; // px 

export const tiledim = 32; // px

// const TILESETFILE = "./pipo.png";
// const tilefilew = 256;
// const tilefileh = 4256;

export const levelwidth  = 1600; // px
export const levelheight = 1600; // px

export let leveltilewidth  = levelwidth / tiledim;
export let leveltileheight = levelheight / tiledim;

export const MAXTILEINDEX = leveltilewidth * leveltileheight;

export let tilesettilewidth = Math.floor(tilefilew/tiledim); 
export let tilesettileheight = Math.floor(tilefileh/tiledim); 

export function settilesettilewidth(val) {
    tilesettilewidth =  val;
}
export function settilesettileheight(val) {
    tilesettileheight = val;
}

// -- HTML

export const htmlLayerPaneW = 640;
export const htmlLayerPaneH = 480;

export const htmlCompositePaneW = 640;
export const htmlCompositePaneH = 480;

// --  zIndex

// 1-10 taken by layers
export const zIndexFilter           =  20;
export const zIndexMouseShadow      =  30;
export const zIndexGrid             =  50;
export const zIndexCompositePointer =  100;