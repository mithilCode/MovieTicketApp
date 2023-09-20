import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Views/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movie" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
