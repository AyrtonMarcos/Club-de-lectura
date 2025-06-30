import { useEffect, useState } from 'react'

function AdminPanel() {
  const [libros, setLibros] = useState([])
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: '',
    autor: '',
    genero: '',
    paginas: '',
    editorial: '',
    imagen: '',
  })

  // Traer libros al cargar
  useEffect(() => {
    obtenerLibros()
  }, [])

  const obtenerLibros = () => {
    fetch('http://localhost:3000/libros-leidos')
      .then(res => res.json())
      .then(data => setLibros(data))
      .catch(err => console.error(err))
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/libros-leidos/${id}`, {
      method: 'DELETE',
    })
      .then(() => obtenerLibros())
      .catch(err => console.error(err))
  }

  const handleChange = (e) => {
    setNuevoLibro({ ...nuevoLibro, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/libros-leidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoLibro),
    })
    .then((data)=> {return data.json()})
      .then((info) => {console.log(info)
        setNuevoLibro({
          titulo: '',
          autor: '',
          genero: '',
          paginas: '',
          editorial: '',
          imagen: '',
        })
        obtenerLibros()
      })
      .catch(err => console.error(err))
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Panel de Administración</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h3>Agregar Nuevo Libro</h3>
        <input name="titulo" placeholder="Título" value={nuevoLibro.titulo} onChange={handleChange} required />
        <input name="autor" placeholder="Autor" value={nuevoLibro.autor} onChange={handleChange} required />
        <input name="genero" placeholder="Género" value={nuevoLibro.genero} onChange={handleChange} required />
        <input name="paginas" type="number" placeholder="Páginas" value={nuevoLibro.paginas} onChange={handleChange} required />
        <input name="editorial" placeholder="Editorial" value={nuevoLibro.editorial} onChange={handleChange} required />
        <input name="imagen" placeholder="Ruta de imagen (ej: /images/titulo.webp)" value={nuevoLibro.imagen} onChange={handleChange} required />
        <button type="submit">Agregar</button>
      </form>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {libros.map(libro => (
          <div key={libro._id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            width: '200px',
            backgroundColor: '#fff'
          }}>
            <img src={`http://localhost:3000${libro.imagen}`} alt={libro.titulo} style={{ width: '100%', height: 'auto' }} />
            <h3>{libro.titulo}</h3>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Género:</strong> {libro.genero}</p>
            <p><strong>Páginas:</strong> {libro.paginas}</p>
            <p><strong>Editorial:</strong> {libro.editorial}</p>
            <button onClick={() => handleDelete(libro._id)} style={{ backgroundColor: 'red', color: 'white' }}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel