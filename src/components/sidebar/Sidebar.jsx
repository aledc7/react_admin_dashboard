import './sidebar.css';
import '../../components/common.css';
import {
    FingerprintSharp,
    People,
    PointOfSale,
    Search,
    AccessibilityNew,
    Summarize,
    ManageAccounts,
    MonetizationOn,
    QueryStats,
    Print,
    Build,
    Equalizer,
    AddReaction,
    Storefront,


} from '@mui/icons-material';
import { Link } from "react-router-dom";


function Sidebar() {


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">RRHH</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <AccessibilityNew className='sidebarIcon' />
                            Estados Laborales
                        </li>
                        <li className="sidebarListItem">
                            <FingerprintSharp className='sidebarIcon' />
                            Inasistencias
                        </li>
                        <li className="sidebarListItem">
                            <People className='sidebarIcon' />
                            Empleados
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Backoffice</h3>
                    <ul className="sidebarList">
                        <Link to={'/users'} className="link">
                            <li className="sidebarListItem">
                                <People className='sidebarIcon' />
                                Users
                            </li>
                        </Link>


                        <Link to={'/products'} className="link">
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
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
        </div>
    )
}

export { Sidebar };
