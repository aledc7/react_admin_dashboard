import './sidebar.css';
import { 
    FingerprintSharp, 
    ThreeDRotation, 
    Feed,
    Search,
    Home,
    Person,
    ManageAccounts,
    MonetizationOn,
    QueryStats,
    Print,
    Build,

 } from '@mui/icons-material';


export default function Sidebar() {
    

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Mesa de Ayuda</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <FingerprintSharp className='sidebarIcon'/>
                            Ventas
                        </li>
                        <li className="sidebarListItem">
                            <ThreeDRotation className='sidebarIcon'/>
                            Reportes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Calendario</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Feed className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Search className='sidebarIcon'/>
                            Ventas
                        </li>
                        <li className="sidebarListItem">
                            <Person className='sidebarIcon'/>
                            Reportes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Mi Equipo Online</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <ManageAccounts className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOn className='sidebarIcon'/>
                            Ventas
                        </li>
                        <li className="sidebarListItem">
                            <QueryStats className='sidebarIcon'/>
                            Reportes
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Gestiones</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <account_circle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Print className='sidebarIcon'/>
                            Ventas
                        </li>
                        <li className="sidebarListItem">
                            <Build className='sidebarIcon'/>
                            Reportes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
