import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react';
import './create.css';
import axios from 'axios';
import { DeleteForever, Edit, AddCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';





function Create() {

    const getData = () => {
        axios.get(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    const onDelete = (id) => {
        axios.delete(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp/${id}`)
            .then(() => {
                getData();
            })
    }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }


    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp`)
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
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Checked</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>




                    <Table.Body>
                        {APIData.map((data, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>

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


