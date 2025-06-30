import Home from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LibrosLeidos from './components/librosleidos'
import ProximosLibros from './components/proximoslibros'
import AdminPanel from './pages/admin-librosleidos'
function App() {
  return (
    <Router>
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/libros-leidos" element={<LibrosLeidos />} />
       <Route path="/proximos-libros" element={<ProximosLibros />} />
        <Route path="/admin" element={<AdminPanel />} /> {/* nueva ruta */}
   </Routes>
    </Router>
  )
}

export default App