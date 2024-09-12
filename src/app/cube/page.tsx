/**
 * TODOs
 * Randomize colors
 * Set color sequence
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

function tileClick(e: any){
    console.log('say something', e);
}



export default function Page() {
    let i = 0;
    const tiles = tileColors.map(tileColor =>
        <Tile key={i++} color={tileColor} tileClick={tileClick}/>
    )

    return (
        <div className="flex flex-col justify-between w-96">
            <h2>Cube</h2>
            <div className="flex flex-wrap justify-center w-64 place-self-center">
                {tiles}
            </div>
        </div>
    );
}