import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

const arrivalData = {
  Products: [true, false, false, false],
  Vendors: [false, false, false, false]
}

const DynamicTable = () => {
  const data: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const columns = ['GET', 'POST', 'DELETE']
  const [checkedCells, setCheckedCells] = useState<number[]>([])
  const [manual, setManual] = useState(false)
  const [matreexx, setMatreexx] = useState<boolean[][]>([])

  const handleCheckboxChange = (value: number) => {
    const newCheckedCells = checkedCells.slice()
    const valueeeExist = newCheckedCells.indexOf(value)
    if (valueeeExist !== -1) {
      newCheckedCells.splice(valueeeExist, 1)
    } else {
      newCheckedCells.push(value)
    }
    setCheckedCells(newCheckedCells)
    setManual(!manual)
  };

  const handleColumnChange = (cellIndex: number) => {
    console.log("CellIndex: ", cellIndex)
    let copyMatreexx = matreexx.slice()
    for (let i = 0; i < copyMatreexx.length; i++) {
      copyMatreexx[i][cellIndex] = !copyMatreexx[i][cellIndex]
    }
    setMatreexx(copyMatreexx)
  }

  const generateMatreexx = () => {
    setMatreexx(
      data.map((row) =>
        row.map((cell) => {
          if (checkedCells.includes(cell)) {
            return true
          }
          else
            return false
        }))
    )
  }

  useEffect(() => {
    console.log("Checked List", checkedCells)
    generateMatreexx()
  }, [checkedCells])

  useEffect(() => {
    console.log("MATREEXX: ", matreexx)
  }, [matreexx])

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((title, cellIndex) => (
              <th key={title}><Checkbox onChange={() => handleColumnChange(cellIndex)} />{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <Checkbox
                    checked={checkedCells.includes(cell)}
                    onChange={() => handleCheckboxChange(cell)}
                  />
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;


