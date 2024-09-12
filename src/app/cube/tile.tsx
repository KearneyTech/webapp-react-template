'use client';

function localClick(e: any){
    console.log(e);

}
export default function Tile({color, tileClick}: {color: string, tileClick: Function}) {
    return (
        <div onClick={tileClick} className={'border border-slate-600 w-24 h-24 cursor-pointer ' + color}></div>
    );
}