import { Link } from 'react-router-dom'


function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>¡Bienvenido al club de lectura Charles Dickens!</h1>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/libros-leidos">
          <button style={{ marginRight: '1rem' }}>Libros Leídos</button>
        </Link>
        <Link to="/proximos-libros">
          <button>Próximos a Leer</button>
        </Link>
        <Link to="/admin">
          <button style={{ backgroundColor: '#007bff', color: 'white' }}>Panel de Administración</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
