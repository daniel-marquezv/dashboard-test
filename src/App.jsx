import './App.css'
// import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar'
import AppRouter from './routes/AppRouter'

function App() {


  return (
    <div className='sidebar'>
      <div >
        <Sidebar />
      </div>
      <div className='content-container'>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
