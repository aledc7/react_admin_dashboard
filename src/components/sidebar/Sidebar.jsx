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
    Home,
    GitHub,
} from '@mui/icons-material';

import { ImTable2 } from "react-icons/im";



import { MdStorage } from "react-icons/md";
import { SiNestjs } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { SiRedux } from "react-icons/si";


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
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/users'>
                                <People className='sidebarIcon' />
                                Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/products'>
                                <MdStorage className='sidebarIcon' />
                                LocalStorage
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'link sidebarListItem active' : 'link sidebarListItem'} to='/crud'>
                                <SiNestjs className='sidebarIcon' />
                                NEST
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Backoffice</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <ImTable2 className='sidebarIcon' />
                            Table Responsive
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
                    <SiRedux className='logofooter' />
                    Ale DC Profile ➳
                </p>

                <p className='text-dc' title="Click me..." onClick={() => openInNewTab('https://github.com/aledc7/react_admin_dashboard')}>
                    <GitHub className='github' />
                    Clone on Github
                </p>

                <p>v1.2</p>
            </Box>
        </div>
    )
}

export { Sidebar };
