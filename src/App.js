import './App.css';
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Search from './pages/Search';
import ArtworkPage from './pages/Artwork';
//Navigation
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='search' element={ <Search /> }/>
        <Route path='artwork/:id' element={ <ArtworkPage/> }/>
      </Routes>
    </>
  );
}

export default App;
