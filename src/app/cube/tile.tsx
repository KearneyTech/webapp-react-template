export default function Tile({color}: {color: string}) {
    return (
        <div className={'border border-slate-600 w-24 h-24 cursor-pointer ' + color}>
            <button></button>
        </div>
    );
}