import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import Favorits from './pages/favorits/Favorits'
import SearchOnYoutube from './pages/movie/SearchOnYoutube'

function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:id" element={<Movie />} />
        <Route exact path="/searchonyoutube" element={<SearchOnYoutube />} />
        <Route exact path="/favorits" element={<Favorits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
