import React from 'react';
import logo from '../../images/logo.svg';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="logoWrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://i.pravatar.cc/100" alt='User' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}


export { Topbar };