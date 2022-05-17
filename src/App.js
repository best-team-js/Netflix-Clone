import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/getMovies" element={<FavList/>} />
    
  </Routes>
    </>

  );
}

export default App;
