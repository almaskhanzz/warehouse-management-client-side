import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Loading from './Pages/Shared/Loading/Loading';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loading' element={< Loading />} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } />
        <Route path='/addnewitem' element={
          <RequireAuth>
            <AddNewItem />
          </RequireAuth>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
