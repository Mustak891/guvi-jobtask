import './App.css';
import ResponsiveAppBar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Register from './components/register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Protected from './Protected';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Logout from './components/Logout/Logout.jsx';
import Update from './components/Dashboard/update/update';

function App() {

  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch(`https://guvi-jobtask-node.vercel.app/api/auth`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });

      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <div className="App">
      <ResponsiveAppBar auth={auth1} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={<Protected auth={auth1}> <Register /> </Protected>} />
        <Route path='/login' element={<Protected auth={auth1}> <Login /> </Protected>} />
        <Route path='/dashboard' element={<Protected auth={auth}> <Dashboard /> </Protected>} />
        <Route path='/dashboard/update' element={<Protected auth={auth}> <Update /> </Protected>} />
        <Route path='/logout' element={<Protected auth={auth}> <Logout /> </Protected>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
