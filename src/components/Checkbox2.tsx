import React, { Key, useEffect, useState } from 'react';
import { Checkbox, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    name: string;
}

interface FinalDataType {
    roleArray: [],
    getArray: [],
    postArray: [],
    deleteArray: [],
    patchArray: [],
}

const data: DataType[] = [
    {
        key: '1',
        name: 'One',
    },
    {
        key: '2',
        name: 'Two',
    },
    {
        key: '3',
        name: 'Three',
    },
    {
        key: '4',
        name: 'Four',
    },
];

// const finalData: FinalDataType =
// {
//     roleArray: [],
//     getArray: [],
//     postArray: [],
//     deleteArray: [],
//     patchArray: [],
// }


const CheckBoxNew = () => {
    const [finalData, setFinalData] = useState<Array<string>>([])
    const [checkBoxColumns, setCheckBoxColumns] = useState<Array<string>>([])
    const [roleArray, setRoleArray] = useState<Array<string>>([])
    const [getArray, setGetArray] = useState<Array<string>>([])
    const [postArray, setPostArray] = useState<Array<string>>([])
    const [deleteArray, setDeleteArray] = useState<Array<string>>([])
    const [patchArray, setPatchArray] = useState<Array<string>>([])
    const [manual, setManual] = useState(false)

    const checkAllRole = roleArray.length > 0 || roleArray.includes('one' || 'two' || 'three')
    const checkAllGet = getArray.length > 0 || getArray.includes('get')
    const checkAllPost = postArray.length > 0 || postArray.includes('post')
    const checkAllDelete = deleteArray.length > 0 || deleteArray.includes('delete')
    const checkAllPatch = patchArray.length > 0 || patchArray.includes('patch')

    const indeterminateRole = roleArray.length > 0 && roleArray.length !== data.length
    const indeterminateGet = roleArray.length > 0 && getArray.length !== data.length
    const indeterminatePost = roleArray.length > 0 && postArray.length !== data.length
    const indeterminateDelete = roleArray.length > 0 && deleteArray.length !== data.length
    const indeterminatePatch = roleArray.length > 0 && patchArray.length !== data.length
    const columns: TableColumnsType<DataType> = [
        {
            title: <Checkbox indeterminate={indeterminateRole} onClick={() => handleHeadClick('name')} checked={checkAllRole}>RoleName</Checkbox>,
            dataIndex: 'name',
            key: 1,
            render: (text: string, record) => (
                <Checkbox key={record.key}
                    onChange={() => handleRowChange()}
                    indeterminate={roleArray.length > 0 && roleArray.length < 4}>
                    {text}
                </Checkbox>
            ),
        },
        {
            title: <Checkbox indeterminate={indeterminateGet} onClick={() => handleHeadClick('get')} checked={checkAllGet}>GET</Checkbox>,
            dataIndex: 'get',
            key: 2,
            render: (text: string, record) => <Checkbox value={getArray}
                onChange={() => { setOnChange(record.key, 'get') }}
                checked={checkAllGet}
            >{text}</Checkbox>,
        },
        {
            title: <Checkbox indeterminate={indeterminatePost} onClick={() => handleHeadClick('post')} checked={checkAllPost}>POST</Checkbox>,
            dataIndex: 'post',
            key: 3,
            render: (text: string, record) => <Checkbox value={postArray}
                onChange={() => { setOnChange(record.key, 'post') }}
                checked={checkAllPost}
            >{text}</Checkbox>,
        },
        {
            title: <Checkbox indeterminate={indeterminateDelete} onClick={() => handleHeadClick('delete')} checked={checkAllDelete}>DELETE</Checkbox>,
            dataIndex: 'delete',
            key: 4,
            render: (text: string, record) => <Checkbox value={getArray}
                onChange={() => { setOnChange(record.key, 'delete') }}
                checked={checkAllDelete}
            >{text}</Checkbox>,
        },
        {
            title: <Checkbox indeterminate={indeterminatePatch} onClick={() => handleHeadClick('patch')} checked={checkAllPatch}>PATCH</Checkbox>,
            dataIndex: 'patch',
            key: 5,
            render: (text: string, record) => <Checkbox value={patchArray}
                onChange={() => { setOnChange(record.key, 'patch') }}
                checked={checkAllPatch}
            >{text}</Checkbox>,
        },
    ];

    function handleHeadClick(val: string) {
        console.log("YES");
        switch (val) {
            case 'name':
                if (roleArray.length === 0) {
                    setGetArray(['GET', 'GET', 'GET'])
                    setRoleArray(['One', 'One', 'One'])
                    setPostArray(['Post', 'Post', 'Post'])
                    setDeleteArray(['Delete', 'Delete', 'Delete'])
                    setPatchArray(['Patch', 'Patch', 'Patch'])
                    setManual(!manual)
                }
                else {
                    setRoleArray([])
                    setGetArray([])
                    setPostArray([])
                    setDeleteArray([])
                    setPatchArray([])
                    setManual(!manual)
                }
                break;
            case 'get':
                if (getArray.length === 0) {
                    setGetArray(['GET', 'GET', 'GET'])
                    setManual(!manual)
                }
                else {
                    setGetArray([])
                    setManual(!manual)
                }
                break;
            case 'post':
                if (postArray.length === 0) {
                    setPostArray(['Post', 'Post', 'Post'])
                    setManual(!manual)
                }
                else {
                    setPostArray([])
                    setManual(!manual)
                }
                break
            case 'delete':
                if (deleteArray.length === 0) {
                    setDeleteArray(['Delete', 'Delete', 'Delete'])
                    setManual(!manual)
                }
                else {
                    setDeleteArray([])
                    setManual(!manual)
                }
                break
            case 'patch':
                if (patchArray.length === 0) {
                    setPatchArray(['Patch', 'Patch', 'Patch'])
                    setManual(!manual)
                }
                else {
                    setPatchArray([])
                    setManual(!manual)
                }
                break
            default:
                break;
        }
    }

    const handleRowChange = () => {
        if (!(getArray || postArray || deleteArray || patchArray).includes('get' || 'post' || 'patch' || 'delete')) {
            setGetArray(['get'])
            setPostArray(['post'])
            setDeleteArray(['delete'])
            setPatchArray(['patch'])
        }
        else {
            setGetArray([])
            setPostArray([])
            setDeleteArray([])
            setPatchArray([])
        }
    }

    // const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    //     console.log('checked = ', checkedValues);
    // };

    const setOnChange = (keyy: Key, title: string) => {
        console.log("GET KA ARRAY", getArray)
        switch (title) {
            case 'get':
                if (getArray.includes('get')) {
                    setGetArray([])
                }
                else {
                    setGetArray(['get'])
                }
                break;
            case 'post':
                if (postArray.includes('post')) {
                    setPostArray([])
                }
                else {
                    setPostArray(['post'])
                }
                break;
            case 'delete':
                if (deleteArray.includes('delete')) {
                    setDeleteArray([])
                }
                else {
                    setDeleteArray(['delete'])
                }
                break;
            case 'patch':
                if (patchArray.includes('patch')) {
                    setPatchArray([])
                }
                else {
                    setPatchArray(['patch'])
                }
                break;
            default:
                break;
        }
    }

    function populateFinalArray() {
        console.log(checkBoxColumns);

    }

    useEffect(() => {
        setCheckBoxColumns(['GET', 'POST', 'DELETE', 'PATCH'])
    }, [])

    useEffect(() => {
        console.log("Final Data: ", { roleArray, getArray, postArray, deleteArray, patchArray })
        // console.log("Final Data 2: ", finalData, "Columns: ", checkBoxColumns);
    }, [roleArray, deleteArray, getArray, manual, patchArray, postArray, checkBoxColumns])

    useEffect(() => {
        populateFinalArray()
    }, checkBoxColumns)

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default CheckBoxNew;