import { React, useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './create.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




function Create() {

    var navigate = useNavigate();

    // Creo el estado para leer la API NEST
    const [APIData, setAPIData] = useState([]);


    const getData = () => {
        axios.get(`http://localhost:3000/users/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/users/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);


    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');


    // creo el nuevo usuario en la APi
    const postData = () => {
        axios.post(`http://localhost:3000/users/`, {
            email,
            role,
            password
        },{
            headers: { 'Content-Type': 'application/json' }

            // REDIRIJO A LA PAGINA DE USUARIOS   
        }).then(() => {
            getData();
            setEmail('');
            setRole('');
            setPassword('');
            navigate('/crud');
        })

    }

    return (
        <div className="main">
            <h1>Crear Usuario</h1>
            <Form className="create-form">
                
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={ email } />
                </Form.Field>

                <Form.Field>
                    <label>Role</label>
                    <input placeholder='Role' onChange={(e) => setRole(e.target.value)} value={ role } />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} value={ password } />
                </Form.Field>

                
                <Button onClick={ postData } type='submit'>Submit</Button>
            </Form>
        </div>


    )
}


export { Create };


