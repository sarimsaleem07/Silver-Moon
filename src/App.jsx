import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components/Index';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
