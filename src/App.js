import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Loading from './Pages/Shared/Loading/Loading';
import NotFound from './Pages/Shared/NotFound/NotFound';
import UpdateItem from './Pages/UpdateItem/UpdateItem';

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
        <Route path='/blogs' element={<Blogs />} />
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
        <Route path='/manageinventories/updateItem/:updateId' element={
          <RequireAuth>
            <UpdateItem />
          </RequireAuth>
        } />
        <Route path='/addnewitem' element={
          <RequireAuth>
            <AddNewItem />
          </RequireAuth>
        } />
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
