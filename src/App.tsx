import React from 'react';
import './App.css';
import Tile from './Tile.tsx';
import { useState, useEffect, useRef } from 'react';

function App() {
    const tileColors = [
        'bg-white',
        'bg-[#008000]',
        'bg-[#0000ff]',
        'bg-[#ff0000]'
    ];

    const [tile1Color, setTile1Color] = useState(tileColors[randomNumber(4)]);
    const [tile2Color, setTile2Color] = useState(tileColors[randomNumber(4)]);
    const [tile3Color, setTile3Color] = useState(tileColors[randomNumber(4)]);
    const [tile4Color, setTile4Color] = useState(tileColors[randomNumber(4)]);

    useEffect(() => {evaluateCube()}, [tile1Color]);
    useEffect(() => {evaluateCube()}, [tile2Color]);
    useEffect(() => {evaluateCube()}, [tile3Color]);
    useEffect(() => {evaluateCube()}, [tile4Color]);

    function randomNumber(max){
        return Math.floor(Math.random() * max);
    }

    function nextColor(color){
        let colorIndex = tileColors.indexOf(color);
        colorIndex = (colorIndex === (tileColors.length - 1)) ? 0 : colorIndex + 1;
        return tileColors[colorIndex];
    }

    function handleTopLeftClick(){
        const newColor = nextColor(tile1Color);
        console.log('handleTopLeftClick', tile1Color, newColor);
        setTile1Color(newColor);
    }

    function handleTopRightClick(){
        const newColor = nextColor(tile2Color);
        console.log('handleTopRightClick', tile2Color, newColor);
        setTile2Color(newColor);
    }

    function handleBottomLeftClick(){
        const newColor = nextColor(tile3Color);
        console.log('handleBottomLeftClick', tile3Color, newColor);
        setTile3Color(newColor);
    }

    function handleBottomRightClick(){
        const newColor = nextColor(tile4Color);
        console.log('handleBottomRightClick', tile4Color, newColor);
        setTile4Color(newColor);
    }

    function evaluateCube(){
        if(
            tile1Color === tile2Color &&
            tile1Color === tile3Color &&
            tile1Color === tile4Color
        ) {
            console.log('solved');
            return true;
        } else {
            console.log(`${tile1Color}, ${tile2Color}, ${tile3Color}, ${tile4Color} - evaluateCube`);
            return false;
        }
    }

    return (
        <div className='flex flex-col justify-between w-96'>
            <p className='mb-8'>the CUBE</p>
            <div className="App flex flex-wrap justify-center w-64 place-self-center">
                    <Tile color={tile1Color} tileClick={handleTopLeftClick}/>
                    <Tile color={tile2Color} tileClick={handleTopRightClick}/>
                    <Tile color={tile3Color} tileClick={handleBottomLeftClick}/>
                    <Tile color={tile4Color} tileClick={handleBottomRightClick}/>
            </div>
        </div>
    );
}

export default App;
