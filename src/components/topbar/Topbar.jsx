import React from 'react';
import logo from '../../images/logo.svg';
import './topbar.css';
import { NotificationsNone, Settings, EventNote } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';



function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="logoWrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="topRight">

                    <div className="topbarIconContainer">
                        <Tooltip title="Notificaciónes">
                            <NotificationsNone />
                        </Tooltip>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Tooltip title="Calendario">
                            <EventNote />
                        </Tooltip>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Tooltip title="Ajustes">
                            <Settings />
                        </Tooltip>
                    </div>
                    <img src="https://i.pravatar.cc/100" alt='User' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}


export { Topbar };