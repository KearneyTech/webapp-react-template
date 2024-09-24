import React from "react";

export default function Tile({color, tileClick}) {
    return (
        <div onClick={tileClick} className={'border border-slate-600 w-24 h-24 cursor-pointer ' + color}></div>
    );
}