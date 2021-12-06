import Routers from './Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="app">
      <Routers />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
