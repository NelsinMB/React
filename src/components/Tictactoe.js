import {useState} from 'react'
import "../styles.css"

export default function Board() {
    return (
        <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        </>
    )

}

function Square({value}) {
    const [value, setValue] = useState(null)

    function handleClick() {
        console.log('clicked!');
    }

    return (
        <button 
        className="square"
        onClick={handleClick}
        >

            {value}


        </button>
    );
}

