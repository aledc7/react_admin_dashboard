import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react';
import './update.css';
import axios from 'axios';
import { DeleteForever, Edit, AddCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";





function Update() {

    let navigate = useNavigate();

    const updateAPIData = () => {
        axios.put(`https://6208161622c9e90017d3301d.mockapi.io/ReactApp/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/crud')
        })
    }

    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);



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



    return (
        <div className="main">
            <h1>Editar Usuario</h1>
            <Form className="update-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={!!checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>


    )
}


export { Update };


