import {useState} from 'react';


function BuildSquare({value}) {
    function handleClick() {
        setValue('X');
    }

    return (
        <button className="square">{value}</button>
    );
}

function BuildRowSquare({boxes}) {
    return (
        <div className="board-row">
            {boxes.map((square, index) => (
                <BuildSquare key={"square-" + index} value={square}/>
            ))}
        </div>
    );
}

export default function Board() {
    const initialArray = Array.from({length: 3}, () => Array.from({length: 3}, () => null));

    const [squares, setSquares] = useState(initialArray);

    return (
        <>
        {squares.map((items, index) => (
            <BuildRowSquare key={"row-" + index} boxes={items} />
        ))}
        </>
    );
}
  