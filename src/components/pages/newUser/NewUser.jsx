import React from 'react';
import './newUser.css';

function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">Crear Usuario</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='Aledc7' />
                </div>
                <div className="newUserItem">
                    <label>Nombre Completo</label>
                    <input type="text" placeholder='Alejandro De Castro' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='info@aledc.tk' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='info@aledc.tk' />
                </div>
                <div className="newUserItem">
                    <label>Celular</label>
                    <input type="text" placeholder='+54 3415498622' />
                </div>
                <div className="newUserItem">
                    <label>Direccion</label>
                    <input type="text" placeholder='Colombres 677 | Rosario' />
                </div>
                <div className="newUserItem">
                    <label>Género</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor="male">Hombre</label>

                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor="male">Mujer</label>

                        <input type="radio" name='gender' id='other' value='other' />
                        <label htmlFor="other">otro</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label>Activo</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value='yes' >Si</option>
                        <option value='no' >No</option>
                    </select>
                </div>

                <button className="newUserButton">Agregar</button>
            </form>
        </div>
    )
}



export { NewUser };
