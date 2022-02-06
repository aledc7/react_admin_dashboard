import { Topbar }  from "../Topbar/Topbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import './app.css';
import { Home} from '../pages/Home/home.jsx'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
        
      </div>
      
    </div>
  );
}

export { App };
