import axios from 'axios'

// https://sujeitoprogramador.com/r-api/?api=filmes/

// URL para todos os filmes (r-api/?api=filmes/)
// URL para um filme (r-api/?api=filmes/id)

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
})

export default api
