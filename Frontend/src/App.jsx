
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar/>
      <main className="min-h-screen max-w-screen-2xl mx-auto px-6 py-6 font-primary">
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
