import './crud.css';
import { React, useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';

import { DeleteForever, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import {
    MdSearch,
    MdAddCircle,
    MdCloudDownload,
} from "react-icons/md";




function Crud() {

    // Creo el estado para leer la API NEST
    const [APIData, setAPIData] = useState([]);

    const getData = () => {
        axios.get(`http://localhost:3000/users/`)
            .then((getData) => {
                console.log(getData);
                setAPIData(getData.data);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/users/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);


    // Creo el Local Storage
    const setData = (data) => {
        let { id, email, password, role, customer } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('role', role);
        localStorage.setItem('customerId', customer)
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                getData();
            })
    }


    return (
        <div className="main">
            <h2>Usuarios API NestJS Propia</h2>
                <div className='actionBtn'>
                    <Link to='/newProduct'>
                        <MdCloudDownload className='addCircle' />
                    </Link>
                    <Link to='/newProduct'>
                        <MdSearch className='addCircle' />
                    </Link>
                    <Link to='/create'>
                        <MdAddCircle className='addCircle' />
                    </Link>
                </div>

            <div className='dataGridAPI'>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>email</Table.HeaderCell>
                            <Table.HeaderCell>Role</Table.HeaderCell>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {APIData.map((data, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.role}</Table.Cell>
                                    <Table.Cell>{data.customer}</Table.Cell>

                                    <Table.Cell>
                                        <Link to='/update'>
                                            <Button onClick={() => setData(data)}> <Edit /> </Button>
                                        </Link>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}><DeleteForever /></Button>
                                    </Table.Cell>

                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export { Crud };
