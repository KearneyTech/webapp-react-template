import Tile from "./tile";

export default function Page() {
    return (
        <div className="flex flex-col justify-between w-96">
            <h2>Cube</h2>
            <div className="flex flex-wrap justify-center w-64 place-self-center">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>
        </div>
    );
}