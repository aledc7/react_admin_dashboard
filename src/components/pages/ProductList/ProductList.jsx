import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever, Edit, AddCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './productList.css';
import { useContext } from "../../../customHooks/useContext.jsx";
import {
    MdSearch,
    MdAddCircle,
    MdCloudDownload,
} from "react-icons/md";

import { Tableresponsive } from '../../TableResponsive/TableResponsive.jsx';








function Productlist() {

    const {

        todos, //este tiene los datos del local storage
    } = useContext();

    // const[data,setData] = React.useState(productRows);
    const [data, setData] = React.useState(todos);



    const handleDelete = (id) => {

        Swal.fire({
            title: 'Esta seguro de Borrar el Producto ?',
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
                    'El Producto ha sido borrado.',
                    'success'
                )
            }
        })

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Product', width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <Link to={'/product/' + params.row.id}>
                            <Edit className="productListEdit" />
                        </Link>
                        <MdSearch className='addCircle' />

                        <DeleteForever className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            },
        },
    ];


    return (

        <div className='productList'>
            <div className="productTitleContainer">
                <h2>Lista de Productos</h2>
                <div className='actionBtn'>
                    <Link to='/newProduct'>
                        <MdCloudDownload className='addCircle' />
                    </Link>
                    <Link to='/newProduct'>
                        <MdSearch className='addCircle' />
                    </Link>
                    <Link to='/newProduct'>
                        <MdAddCircle className='addCircle' />
                    </Link>
                </div>
                
            </div>
            <div style={{ height: 400, width: 1000 }}>
                <DataGrid
                    rows={todos}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export { Productlist };
