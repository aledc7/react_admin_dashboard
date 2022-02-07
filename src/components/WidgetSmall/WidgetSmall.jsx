import './widgetsmall.css';
import { Visibility } from '@mui/icons-material';


function WidgetSmall() {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmTitle">New Join Memers</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://i.pravatar.cc/97" alt="https://i.pravatar.cc/100" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Aledc </span>
                        <span className="widgetSmUserTitle"> Systems Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://i.pravatar.cc/96" alt="https://i.pravatar.cc/100" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lucas Bracamonte </span>
                        <span className="widgetSmUserTitle"> Systems Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://i.pravatar.cc/95" alt="https://i.pravatar.cc/100" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Gonzalo Romano </span>
                        <span className="widgetSmUserTitle">Programmer</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://i.pravatar.cc/94" alt="https://i.pravatar.cc/100" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Pablo Pafundi </span>
                        <span className="widgetSmUserTitle">Provider</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://i.pravatar.cc/93" alt="https://i.pravatar.cc/100" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Martin Zalazar </span>
                        <span className="widgetSmUserTitle">Scientific</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                    </button>
                </li>
            </ul>
        </div>
    )
}


export  { WidgetSmall};
