import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuth.context';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={!user ? <LogIn /> : <Navigate to='/' />} />
            <Route path='signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
