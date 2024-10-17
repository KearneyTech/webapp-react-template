import React from 'react';
import Tile from './Tile.tsx';
import {useState, useEffect} from 'react';

function CubeApp() {
    const tileColors = [
        'bg-white',
        'bg-[#008000]',
        'bg-[#0000ff]',
        'bg-[#ff0000]'
    ];


    const [tile1Color, setTile1Color] = useState(tileColors[randomNumber(4)]);
    const [tile2Color, setTile2Color] = useState(tileColors[randomNumber(4)]);
    const [tile3Color, setTile3Color] = useState(tileColors[randomNumber(4)]);
    const [tile4Color, setTile4Color] = useState(
        nextColor(tile3Color)
    );
    const [boardStyle, setBoardStyle] = useState('');

    useEffect(() => {
        evaluateCube();
    }, [tile1Color]);
    useEffect(() => {
        evaluateCube();
    }, [tile2Color]);
    useEffect(() => {
        evaluateCube();
    }, [tile3Color]);
    useEffect(() => {
        evaluateCube();
    }, [tile4Color]);

    function randomNumber(max: number) {
        return Math.floor(Math.random() * max);
    }

    function nextColor(color: string) {
        let colorIndex = tileColors.indexOf(color);
        colorIndex = colorIndex === tileColors.length - 1 ? 0 : colorIndex + 1;
        return tileColors[colorIndex];
    }

    function handleTopLeftClick() {
        const newColor = nextColor(tile1Color);
        console.log('handleTopLeftClick', tile1Color, newColor);
        setTile1Color(newColor);
    }

    function handleTopRightClick() {
        const newColor = nextColor(tile2Color);
        console.log('handleTopRightClick', tile2Color, newColor);
        setTile2Color(newColor);
    }

    function handleBottomLeftClick() {
        const newColor = nextColor(tile3Color);
        console.log('handleBottomLeftClick', tile3Color, newColor);
        setTile3Color(newColor);
    }

    function handleBottomRightClick() {
        const newColor = nextColor(tile4Color);
        console.log('handleBottomRightClick', tile4Color, newColor);
        setTile4Color(newColor);
    }

    function evaluateCube() {
        if (
            tile1Color === tile2Color &&
            tile1Color === tile3Color &&
            tile1Color === tile4Color
        ) {
            console.log('solved');
            resetCube();
            return true;
        } else {
            console.log(
                `${tile1Color}, ${tile2Color}, ${tile3Color}, ${tile4Color} - evaluateCube`
            );
            return false;
        }
    }

    function newCube() {
        setTile1Color(tileColors[randomNumber(4)]);
        setTile2Color(tileColors[randomNumber(4)]);
        setTile3Color(tileColors[randomNumber(4)]);
        setTile4Color(nextColor(tile3Color));
    }

    function resetCube() {
        const pause = 2000;
        console.log(pause);
        setBoardStyle(' rotate-center');
        setTimeout(() => {
            setBoardStyle(' fade-out');
        }, 1000);
        setTimeout(() => {
            newCube();
            setBoardStyle(' fade-in');
        }, pause);
    }

    return (
        <div className="flex flex-col justify-between w-96">
            <p className="mb-8">the CUBE</p>
            <div
                className={
                    'flex flex-wrap justify-center w-64 place-self-center' +
                    boardStyle
                }
            >
                <Tile color={tile1Color} tileClick={handleTopLeftClick} />
                <Tile color={tile2Color} tileClick={handleTopRightClick} />
                <Tile color={tile3Color} tileClick={handleBottomLeftClick} />
                <Tile color={tile4Color} tileClick={handleBottomRightClick} />
            </div>
            <p className="mt-8 text-slate-400">
                Click tiles to change color. Match color of all tiles to solve
                the Cube.
            </p>
        </div>
    );
}

export default CubeApp;
