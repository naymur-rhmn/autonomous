import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <AuthProvider>
      <Navigation></Navigation>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
