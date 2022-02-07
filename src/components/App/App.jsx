import { Topbar } from "../Topbar/Topbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import './app.css';
import { Home } from '../pages/Home/home.jsx'
import Box from '@mui/material/Box';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Userlist } from "../pages/UserList/UserList.jsx";
import { User } from '../pages/User/User.jsx';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Box className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home/> }   />
            <Route path='/users' element={ <Userlist/> }  />
            <Route path='/user/:userID' element={ <User/> }  />
          </Routes>
        </BrowserRouter>

      </Box>

    </div>
  );
}

export { App };
