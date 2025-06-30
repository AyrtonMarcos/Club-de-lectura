import { useEffect, useState } from 'react'

function ProximosLibros() {
  const [libros, setLibros] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/proximos-a-leer')
      .then(res => res.json())
      .then(data => setLibros(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Próximos a Leer</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {libros.slice(0, 4).map((libro) => (
          <div
            key={libro._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '220px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}
          >
            <img
              src={`http://localhost:3000${libro.imagen}`}
              alt={libro.titulo}
              style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '0.5rem' }}
            />
            <h3>{libro.titulo}</h3>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Género:</strong> {libro.genero}</p>
            <p><strong>Páginas:</strong> {libro.paginas}</p>
            <p><strong>Editorial:</strong> {libro.editorial}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProximosLibros