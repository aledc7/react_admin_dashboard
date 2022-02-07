import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever, Edit } from '@mui/icons-material';
import { userRows } from '../../../dummyData.js';
import './userlist.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Userlist() {


    const [data, setData] = React.useState(userRows);


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Esta seguro de Borrar el Usuario ?',
            text: "Esta acción no podrá deshacerse!",
            icon: 'warning',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
        }).then((result) => {
            if (result.isConfirmed) {
                // el setTImeout es para que no de errorres la datatable al borrar un id y que despues no encuentre.
                setTimeout(() => {
                    setData(data.filter(item => item.id !== id));
                });

                Swal.fire(
                    'Eliminado!',
                    'El Usuario ha sido borrado.',
                    'success'
                )
            }
        })
        
    }

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

                        <DeleteForever className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            },
        },
    ];





    return (
        <div className='UserList'>
            <DataGrid
                rows={data}
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
