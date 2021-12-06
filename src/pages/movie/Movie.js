import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'

import api from '../../services/api'
import './movie.css'

export function Movie() {
  const [movie, setMovieo] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    async function handleGetMovie() {
      const response = await api.get(`r-api/?api=filmes/${id}`)
      console.log(response.data)
      if (response.data.length === 0) {
        navigate('/')
        return
      }
      setMovieo(response.data)
      setLoading(false)
    }

    handleGetMovie()
    return () => {
      console.log('Component ended')
    }
  }, [id, navigate])

  function saveMovie() {
    const myList = localStorage.getItem('movies')

    let savedMovies = JSON.parse(myList) || []

    // If the IDMovie alredy exist, dont save again
    const hasMovie = savedMovies.some(savedMovie => savedMovie.id === movie.id)

    if (hasMovie) {
      toast.error('The movie is alredy saved.')
      return
    }

    savedMovies.push(movie)
    localStorage.setItem('movies', JSON.stringify(savedMovies))
    toast.success('Successfully saved')
  }

  if (loading) {
    ;<div>
      <h2>Filmaria</h2>
      <h3>Carregando</h3>
    </div>
  }

  return (
    <div className="container">
      <div className="main">
        <h1>ASSISTA ONLINE</h1>
        <h2>{movie.nome}</h2>
        <img src={movie.foto} alt={movie.nome} />

        <div className="midle">
          <h2>Sinopse</h2>
          {movie.sinopse}
        </div>
      </div>

      <div className="base">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://youtube.com/results?search_query=${movie.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Movie
