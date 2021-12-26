import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import api from '../../services/api'
import './home.css'

export const Home = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    async function handleLoadMovies() {
      const response = await api.get('r-api/?api=filmes')
      setmovies(response.data)
    }

    handleLoadMovies()
  }, [])

  return (
    <div className="container">
      <h1>Page Home</h1>
      <div className="list_movies">
        {movies.map(movie => {
          return (
            <article key={movie.id}>
              <strong>{movie.nome}</strong>
              <p>{movie.nome}</p>
              <img src={movie.foto} alt={movie.nome} />
              <Link className="link" to={`movie/${movie.id}`}>
                Acessar
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home
