import React, { useEffect, useState, useMemo } from 'react';
import '../../styles/Fetchs/ArgridFetch.scss';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import axios from 'axios';
import 'ag-grid-enterprise';

const ArGridFetch = () => {

    const [rowUsers, setRowUsers] = useState([]);

    //Each Column Definition result in one Column
    const [columnUsers, setColumnUsers] = useState([
        { field: 'id', filter: true },
        { field: 'email', filter: true },
        { field: 'first_name', filter: true },
        { field: 'last_name', filter: true },
        { field: 'avatar' }
    ]);
    //console.log('>>> check the columnReqresUsers: ', columnReqresUsers)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://reqres.in/api/users?page=2`);
                // result && result.data && result.data.data ?
                result?.data?.data ?
                    setRowUsers(result.data.data)
                    :
                    setRowUsers([])
                // setRowUsers(result.data.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchData();
    }, []);
    console.log('>>> check setRowUsers', rowUsers)

    const defaultColUsers = useMemo(() => ({
        sortable: true,
        filter: true,
        enableRowGroup: true
    }));

    return (
        <div className='argrid-fetch-container'>
            <h2>Fetch all list users using API Ar-grid plugin</h2>
            <center><div className="ag-theme-alpine-dark"
                style={{ width: 1000, height: 350 }}>
                <AgGridReact
                    //Recieve the data to a table
                    rowGroupPanelShow='always'
                    rowData={rowUsers}
                    columnDefs={columnUsers}
                    defaultColDef={defaultColUsers}
                />
            </div></center>
        </div>
    );
};
export default ArGridFetch;
