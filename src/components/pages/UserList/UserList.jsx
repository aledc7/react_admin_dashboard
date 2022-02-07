import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever, Edit } from '@mui/icons-material';
import { userRows } from '../../../dummyData.js';

import './userlist.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Userlist() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'userName', headerName: 'User Name', width: 200,
            renderCell: (params) => {
                return (
                    <div className='UserListUser'>
                        <img className='userListImg' src={params.row.avatar} alt='' />
                        {params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 230 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (

                    <>

                            <Link to={'/user/' + params.row.id}>
                                <Edit className="userListEdit" />
                            </Link>
                            <Link to={'/user/' + params.row.id}>
                                <DeleteForever className='userListDelete' />
                            </Link>

                    </>


                );

            },
        },
    ];





    return (
        <div className='UserList'>
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}


export { Userlist }
