import React, { useState } from 'react';

function MultiplicationTable() {
    const [inputValue, setInputValue] = useState(1);
    const [table, setTable] = useState([]);

    const generateTable = () => {
        const newTable = [];
        const value = parseInt(inputValue);

        if (!isNaN(value)) {
            for (let i = 1; i <= 10; i++) {
                newTable.push(
                    <tr key={i}>
                        <td>
                            {value} x {i} = {value * i}
                        </td>
                    </tr>
                );
            }
        }

        setTable(newTable);
    };

    return (
        <div>
            <h1>Multiplication Table</h1>
            <div>
                Enter an integer value: <input type=" " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={generateTable}>Generate Table</button>
            </div>
            {table.length > 0 && (
                <table>
                    <tbody>{table}</tbody>
                </table>
            )}
        </div>
    );
}

export default MultiplicationTable;



