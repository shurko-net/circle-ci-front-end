import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import OurStory from './pages/OurStory';

function App() {
  // const [login, setLogin] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   if (login !== '' && password !== '') {
  //     setIsLogged(true);
  //   } else {
  //     setIsLogged(false);
  //   }
  // }, [login, password]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/saved" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<OurStory />} />
      </Routes>

    </div>
  );
}

export default App;
