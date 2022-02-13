import { React, useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './update.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Update() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [id, setId] = useState('');
    
    const updateAPIData = () => {


        // HAGO EL UPDATE
        axios.put(`http://localhost:3000/users/${id}`, {
            email,
            role,
        },

            // LE PASO LA CABECERA
            {
                headers: { 'Content-Type': 'application/json' }

                // REDIRIJO A LA PAGINA DE USUARIOS   
            }).then(() => {
                navigate('/crud');
            })
    }


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setEmail(localStorage.getItem('email'));
        setRole(localStorage.getItem('role'));
    }, []);


    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/users/`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])



    return (
        <div className="main">
            <h1>Editar Usuario</h1>
            <Form className="update-form">
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Role</label>
                    <input placeholder='set your password' value={role} onChange={(e) => setRole(e.target.value)} />
                </Form.Field>

                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}


export { Update };