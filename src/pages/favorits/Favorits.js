import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import './favorits.css'

export function Favorits() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function handleMoviesFromLocalStorage() {
      const myList = await localStorage.getItem('movies')
      setMovies(JSON.parse(myList) || [])
      console.log(movies)
    }

    handleMoviesFromLocalStorage()
  }, [])

  function handleDeleteMovie(id) {
    var filterMovies = movies.filter(item => {
      return item.id !== id
    })

    setMovies(filterMovies)
    localStorage.setItem('movies', JSON.stringify(filterMovies))
    toast.success('Successfully deleted')
  }

  return (
    <div className="content">
      <h1>Favorits Movies</h1>
      {movies.length === 0 && <h2>Você não possui filmes salvos :(</h2>}
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <div>
              <span>{movie.nome}</span>
            </div>

            <div className="links">
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                Excluir
              </button>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default Favorits
