import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react';
import './create.css';
import axios from 'axios';
import { DeleteForever, Edit, AddCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';





function Create() {

    // Creo el Local Storage
    const setData = (data) => {
        let { id, email, password, role, customer } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('role', role);
        localStorage.setItem('customerId', customer)
    }



    
    // Creo el estado para leer la API NEST
    const [APIData, setAPIData] = useState([]);


    const getData = () => {
        //axios.get(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp`)
        axios.get(`http://localhost:3000/users/`)
            .then((getData) => {
                console.log(getData);
                setAPIData(getData.data);
            })
    }


    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                getData();
            })
    }

    


    
    useEffect(() => {
       // axios.get(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp`)
        axios.get(`http://localhost:3000/users/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            getData();
        })

    }

    return (
        <>
            <h1>Crear Usuario</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>

            <div className='dataGridAPI'>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>email</Table.HeaderCell>
                            <Table.HeaderCell>Role</Table.HeaderCell>
                            <Table.HeaderCell>Customer</Table.HeaderCell>
                            {/* <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Checked</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell> */}
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
                                    {/* <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell> */}

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

        </>


    )
}


export { Create };


