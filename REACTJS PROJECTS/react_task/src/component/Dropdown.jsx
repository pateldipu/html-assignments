// import React, { useState } from 'react'
// export default function Dropdown() {
//     const [search, setsearch] = useState(false)
//     const [searchtext, setsearchtext] = useState("")
//     const [SelectedState, setSelectedState] = useState([])

//     // const [items, setItems] = useState([]);
//     const data = [
//         {
//             Name: "gujrat",
//             age: '20'
//         },
//         {
//             Name: "delhi",
//             age: '20'
//         },
//         {
//             Name: "m.p",
//             age: '20'
//         },
//         {
//             Name: "u.p",
//             age: '20'
//         },
//         {
//             Name: "pune",
//             age: '20'
//         },
//     ]

//     const handlechange = (e) => {
//         setsearch(true)
//         setsearchtext(e.target.value)
//     }

//     const handleselectopt = (e) => {
//         console.log("fired", e);
//         setSelectedState([...SelectedState, e])
//     }
//     // const handleCancel = (event) => {
//     //     console.log("fire");
//     //     console.log(event);
//     //     setItems((current) =>
//     //         current.filter((fruit) => fruit !== event)
//     //     );
//     // };

//     return (
//         <div>
//             <div className='bg-info'>
//                 <input type="text" onChange={handlechange} className='p-1 border-1' />

//             </div>
//             <div>
//                 {SelectedState.map(e => {
//                     return <button >{e} ❌</button>
//                 })}
//                 {/* <button onClick={handleAddButtonClick}>Add</button> */}
//                 {/* <ul>
//                     {items.map((item, index) => (
//                         <li key={item}>{item} <button type="submit" onClick={() => handleCancel(item)}>❌</button></li>
//                     ))}

//                 </ul> */}
//             </div>
//             {search && <div className=''>
//                 {data.filter(f => f.Name.includes(searchtext)).map(e => {
//                     return <p onClick={() => handleselectopt(e.Name)}>{e.Name}</p>
//                 })}
//             </div>}
//         </div>
//     )
// }

import React, { Component } from 'react';
// import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9],
            ],
        };
    }

    isValidMove(row, col, num) {

        for (let i = 0; i < 9; i++) {
            if (
                this.state.board[row][i] === num ||
                this.state.board[i][col] === num
            ) {
                return false;
            }
        }


        const rowStart = Math.floor(row / 3) * 3;
        const colStart = Math.floor(col / 3) * 3;
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                if (this.state.board[i][j] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    solveSudoku() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.state.board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (this.isValidMove(row, col, num)) {
                            const newBoard = [...this.state.board];
                            newBoard[row][col] = num;
                            this.setState({ board: newBoard });

                            if (this.solveSudoku()) {
                                return true;
                            }

                            newBoard[row][col] = 0; // Backtrack
                            this.setState({ board: newBoard });
                        }
                    }
                    return false; // No valid move
                }
            }
        }
        return true; // All cells filled
    }

    handleSolveClick = () => {
        this.solveSudoku();
    };

    render() {
        return (
            <div className="App  mt-5">
                <h1 >Sudoku Game</h1>
                <button onClick={this.handleSolveClick} className='mb-5'>Solve</button>
                <div className="board mx-auto">
                    {this.state.board.map((row, rowIndex) => (
                        <div key={rowIndex} className="row ">
                            <div className="col-12 d-flex justify-content-between">
                                {row.map((cellValue, colIndex) => (
                                    <div key={colIndex} className="cell">
                                        {cellValue === 0 ? '' : cellValue}
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
