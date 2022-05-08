import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
