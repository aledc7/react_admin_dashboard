import { Topbar } from "../Topbar/Topbar.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import './app.css';
import { Home } from '../pages/Home/home.jsx'
import Box from '@mui/material/Box';
import { Routes, Route, } from "react-router-dom";
import { Userlist } from "../pages/UserList/UserList.jsx";
import { User } from '../pages/User/User.jsx';
import { NewUser } from '../pages/newUser/NewUser.jsx';
import { Productlist } from '../pages/ProductList/ProductList.jsx';
import { Product } from '../pages/Product/Product.jsx';
import { NewProduct } from '../pages/NewProduct/NewProduct.jsx';
import { useContext } from "../../customHooks/useContext.jsx";

// import { Modal } from "../Modal/Modal.jsx";


function App() {
  const { 
      openInNewTab,
      productName,
      setProductName,
   } = useContext();


  return (
    <>
      <Topbar />
      <Box className="container">


        {/* <Modal>
          <h1>hola</h1>
        </Modal> */}



        <Sidebar 
          openInNewTab={openInNewTab}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Userlist />} />
          <Route path='/user/:userID' element={<User />} />
          <Route path='/user/newUser' element={<NewUser />} />
          <Route path='/products' element={<Productlist />} />
          <Route path='/product/:productID' element={<Product productName={productName}></Product>  } />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
        
      </Box>

      

    </>
  );
}

export { App };
