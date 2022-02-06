import { Topbar }  from "../Topbar/Topbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import './app.css';
import { Home} from '../pages/Home/home.jsx'
import Box from '@mui/material/Box';

function App() {
  return (
    <Box className="App">
      <Topbar/>
      <Box className="container">
        <Sidebar/>
        <Home/>
        
      </Box>
      
    </Box>
  );
}

export { App };
