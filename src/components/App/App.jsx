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


function App() {
  return (
    <BrowserRouter className="App">
      <Topbar />
      <Box className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/users' element={<Userlist />}  />
        </Routes>

      </Box>

    </BrowserRouter>
  );
}

export { App };
