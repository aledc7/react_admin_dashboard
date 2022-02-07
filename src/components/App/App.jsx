import { Topbar } from "../Topbar/Topbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import './app.css';
import { Home } from '../pages/Home/home.jsx'
import Box from '@mui/material/Box';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Userlist } from "../pages/UserList/UserList.jsx";
import { User } from '../pages/User/User.jsx';
import { NewUser } from '../pages/newUser/NewUser.jsx'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Box className="container">
        <Sidebar />
          <Routes>
            <Route path='/' element={ <Home/> }   />
            <Route path='/users' element={ <Userlist/> }  />
            <Route path='/user/:userID' element={ <User/> }  />
            <Route path='/user/newUser' element={ <NewUser/> }  />
          </Routes>
      </Box>

    </div>
  );
}

export { App };
