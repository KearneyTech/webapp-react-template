import React, { MouseEventHandler } from "react";

export default function Tile({color, tileClick}: {color: string, tileClick: MouseEventHandler}) {
    return (
        <div onClick={tileClick} className={'border border-slate-600 w-24 h-24 cursor-pointer ' + color}></div>
    );
}