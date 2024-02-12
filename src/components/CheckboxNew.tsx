import { Checkbox } from "antd";
import { useEffect, useState } from "react";

const CheckboxTable = () => {
    const arrivalData = {
        Products: [false, false, false, false],
        Vendors: [false, false, false, false]
    }

    const permissions = ["GET", "POST", "DELETE", "PATCH"]
    const [columnsChecked, setColumnsChecked] = useState<number[]>([])
    const [rowsChecked, setRowsChecked] = useState<number[]>([])
    const [clickedAll, setClickedAll] = useState<boolean>(false)
    const columns = Array.from(Object.keys(arrivalData))

    var arrivalDataLength = Object.keys(arrivalData).length
    var permissionsLength = permissions.length

    var countCol: number = 0
    var countRow: number = 0
    var tempColumnArray = Array.from({ length: permissionsLength }, () => countCol++)
    var tempRowArray = Array.from({ length: arrivalDataLength }, () => countRow++)

    const [matreexx, setMatreexx] = useState<boolean[][]>(
        Array.from({ length: arrivalDataLength }, () =>
            Array.from({ length: permissionsLength }, () => false)
        )
    )

    const indeterminateRow = matreexx[0].filter((data) => data === true).length > 0
    const indeterminateAll = indeterminateRow

    const handleCheckboxChange = (colIndex: number, rowIndex: number) => {
        var tempRowData = [...rowsChecked]
        var tempColData = [...columnsChecked]
        var valueeeExist = rowsChecked.indexOf(rowIndex)
        let tempArr = [...matreexx]
        if (valueeeExist !== -1) {
            rowsChecked.splice(valueeeExist, 1)
        }
        tempArr[rowIndex][colIndex] = !tempArr[rowIndex][colIndex]

        if (matreexx[rowIndex].filter((data) => data === true).length === permissionsLength) {
            if (!rowsChecked.includes(rowIndex)) {
                tempRowData.push(rowIndex)
            }
            else {
                tempRowData.splice(rowIndex, 1)
            }
            setRowsChecked(tempRowData)
        }

        var countTrue: number = 0
        // console.log("Count Values", countTrue);
        Object.keys(arrivalData).forEach((title, cellIndex) => {
            if (matreexx[cellIndex][colIndex] === true) {
                countTrue++
            }
        })
        if (countTrue === arrivalDataLength) {
            if (!columnsChecked.includes(colIndex)) {
                tempColData.push(colIndex)
            }
            else {
                tempColData.splice(colIndex, 1)
            }
            setColumnsChecked(tempColData)
        }
        else if (countTrue < arrivalDataLength) {
            console.log("ColIndex: ", colIndex);
            if (columnsChecked.includes(colIndex)) {
                tempColData.splice(colIndex, 1)
            }
            setColumnsChecked(tempColData)
        }
        console.log("TRUECOUNT: ", countTrue)
        setMatreexx(tempArr)
    }

    const handleColumnChange = (value: number) => {
        let tempData = [...columnsChecked]
        const valueeeExist = tempData.indexOf(value)
        if (valueeeExist !== -1) {
            setClickedAll(false)
            tempData.splice(valueeeExist, 1)
            setRowsChecked([])
            Object.keys(arrivalData).forEach((title, key) => {
                matreexx[key][value] = false
            })
        }
        else {
            Object.keys(arrivalData).forEach((title, key1) => {
                matreexx[key1][value] = true
            })
            tempData.push(value)
            if (tempData.length === permissionsLength) {
                setRowsChecked(tempRowArray)
                setClickedAll(true)
            }
        }
        setColumnsChecked(tempData)
    }

    const handleRowChange = (value: number) => {
        let tempData = [...rowsChecked]
        const valueeeExist = tempData.indexOf(value)
        if (valueeeExist !== -1) {
            setClickedAll(false)
            tempData.splice(valueeeExist, 1)
            setColumnsChecked([])
            permissions.forEach((title, key) => {
                matreexx[value][key] = false
            })
        }
        else {
            permissions.forEach((title, key) => {
                matreexx[value][key] = true
            })
            tempData.push(value)
            if (tempData.length === arrivalDataLength) {
                setClickedAll(true)
                setColumnsChecked(tempColumnArray)
            }
        }
        setRowsChecked(tempData)
    }

    const handleAllCheckboxChange = () => {
        if (clickedAll) {
            setClickedAll(false)
            setColumnsChecked([])
            setRowsChecked([])
            Object.keys(arrivalData).forEach((title, key) => {
                permissions.forEach((value, key1) => {
                    matreexx[key][key1] = false
                })
            })
        }
        else {
            setClickedAll(true)
            setRowsChecked(tempRowArray)
            setColumnsChecked(tempColumnArray)
            Object.keys(arrivalData).forEach((title, key) => {
                permissions.forEach((value, key1) => {
                    matreexx[key][key1] = true
                })
            })
        }
    }

    useEffect(() => {
        console.log("Checked Columns: ", columnsChecked)
        console.log("Clicked Rows: ", rowsChecked)
        console.log("Clicked All: ", clickedAll)
        finalDataaa()
    }, [columnsChecked, rowsChecked, clickedAll])

    const finalDataaa = () => {
        const finalDataa: { [key: string]: boolean[] } = {}
        columns.forEach((colIndex, rowIndex) => {
            finalDataa[colIndex] = matreexx[rowIndex]
        });
        console.log("Generated Arrival Data:", finalDataa)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><Checkbox
                            indeterminate={indeterminateAll && !clickedAll}
                            onChange={handleAllCheckboxChange}
                            checked={columnsChecked.length === permissionsLength || rowsChecked.length === arrivalDataLength || clickedAll}
                        />RoleName</th>
                        {
                            permissions.map((title, cellIndex) => (
                                <th key={cellIndex}><Checkbox
                                    onChange={() => handleColumnChange(cellIndex)}
                                    checked={columnsChecked.includes(cellIndex) || rowsChecked.length === arrivalDataLength || clickedAll}
                                />{title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {columns.map((colName, key) => (
                        <tr key={key}>
                            {
                                <td>
                                    <Checkbox
                                        indeterminate={matreexx[key].filter((data) => data === true).length > 0 && matreexx[key].filter((data) => data === true).length < 4 && !clickedAll}
                                        onChange={() => handleRowChange(key)}
                                        checked={rowsChecked.includes(key) || columnsChecked.length === permissionsLength || matreexx[key].filter((data) => data === true).length === permissions.length || clickedAll}
                                    />{colName}
                                </td>
                            }
                            {matreexx[key].map((title, cellIndex1) => (
                                <td key={cellIndex1}><Checkbox
                                    onChange={() => handleCheckboxChange(cellIndex1, key)}
                                    checked={columnsChecked.includes(cellIndex1) || rowsChecked.includes(key) || matreexx[key][cellIndex1] || clickedAll}
                                /></td>
                            ))}
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CheckboxTable;
