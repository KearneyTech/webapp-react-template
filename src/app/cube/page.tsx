/**
 * TODOs
 * Tile click functionality
 * Cube solved check function
 * Create tests
 */
'use client';
import Tile from "./tile";

const tileColors = [
    'bg-white',
    'bg-[#008000]',
    'bg-[#0000ff]',
    'bg-[#ff0000]'
];

type TileObject = {
    color: string;
};

let tile1 = {color: ''} as TileObject,
    tile2 = {color: ''} as TileObject,
    tile3 = {color: ''} as TileObject,
    tile4 = {color: ''} as TileObject;

function initTiles(){
    tile1.color = tileColors[randomNumber(4)];
    tile2.color = tileColors[randomNumber(4)];
    tile3.color = tileColors[randomNumber(4)];
    tile4.color = tileColors[randomNumber(4)];
};

function randomNumber(max: number){
    return Math.floor(Math.random() * max);
}

function tileClick(e: any){
    console.log('say something', e);
}

export default function Page() {
    initTiles();

    return (
        <div className="flex flex-col justify-between w-96">
            <h2>Cube</h2>
            <div className="flex flex-wrap justify-center w-64 place-self-center">
                <Tile color={tile1.color} tileClick={tileClick}/>
                <Tile color={tile2.color} tileClick={tileClick}/>
                <Tile color={tile3.color} tileClick={tileClick}/>
                <Tile color={tile4.color} tileClick={tileClick}/>
            </div>
        </div>
    );
}