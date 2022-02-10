import './sidebar.css';
import '../../components/common.css';
import Box from '@mui/material/Box';
import {
    FingerprintSharp,
    People,
    Summarize,
    ManageAccounts,
    MonetizationOn,
    QueryStats,
    Print,
    Build,
    Equalizer,
    AddReaction,
    Storefront,
    Home,
    GitHub,
    SentimentSatisfiedAlt,


} from '@mui/icons-material';

import { NavLink } from "react-router-dom";


function Sidebar({ openInNewTab }) {


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">RRHH</h3>
                    <ul className="sidebarList">


                        
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/'>
                                <Home className='sidebarIcon' />
                                Home
                            </NavLink>
                        </li>
                        

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/products'>
                                <Storefront className='sidebarIcon' />
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/users'>
                                <People className='sidebarIcon' />
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Backoffice</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <FingerprintSharp className='sidebarIcon' />
                            Inasistencias
                        </li>

                        <li className="sidebarListItem">
                            <People className='sidebarIcon' />
                            Empleados
                        </li>

                        <li className="sidebarListItem">
                            <Summarize className='sidebarIcon' />
                            Reportes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Capacitación</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccounts className='sidebarIcon' />
                            Campañas
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOn className='sidebarIcon' />
                            Cargas
                        </li>
                        <li className="sidebarListItem">
                            <AddReaction className='sidebarIcon' />
                            Carpetas
                        </li>
                        <li className="sidebarListItem">
                            <QueryStats className='sidebarIcon' />
                            Estadisticas
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Planificacion</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Equalizer className='sidebarIcon' />
                            Reporte Global
                        </li>
                        <li className="sidebarListItem">
                            <Print className='sidebarIcon' />
                            PowerBI
                        </li>
                        <li className="sidebarListItem">
                            <Build className='sidebarIcon' />
                            NPS
                        </li>
                    </ul>
                </div>
            </div>

            <Box className="footerCopy">
                <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://stackoverflow.com/users/10220740/ale-dc')}>
                    <SentimentSatisfiedAlt className='logofooter' />
                    Ale DC Profile ➳
                </p>

                <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://github.com/aledc7/react_admin_dashboard')}>
                    <GitHub className='github' />
                    Clone on Github
                </p>
            </Box>
        </div>
    )
}

export { Sidebar };
