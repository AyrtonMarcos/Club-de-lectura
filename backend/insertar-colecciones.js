const mongoose = require('mongoose');

// Cargar los datos
const miembros = require('./datos-miembros');
const librosLeidos = require('./datos-libros_leidos');
const proximosLibros = require('./datos-proximos_libros');

// Conectar a MongoDB
mongoose.connect('mongodb://root:mongopassword@localhost:27017/db_club?authSource=admin')
  .then(() => {
    console.log('Conectado a MongoDB');
    insertarDatos();
  })
  .catch(err => console.error('Error de conexión:', err));

// Esquemas y modelos
const miembroSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String,
  email: String,
  generoPreferido: String,
});

const libroLeidoSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  genero: String,
  paginas: Number,
  editorial: String,
});

const proximoLibroSchema = new mongoose.Schema({
 
  titulo: String,
  autor: String,
  genero: String,
  paginas: Number,
  editorial: String,
  fecha: String,
});

const modeloMiembro = mongoose.model('Miembro', miembroSchema, 'miembros');
const modeloLibroLeido = mongoose.model('LibroLeido', libroLeidoSchema, 'libros_leidos');
const modeloProximoLibro = mongoose.model('ProximoLibro', proximoLibroSchema, 'proximos_libros');

// Función para insertar
async function insertarDatos() {
  try {
    await modeloMiembro.insertMany(miembros);
    await modeloLibroLeido.insertMany(librosLeidos);
    await modeloProximoLibro.insertMany(proximosLibros);
    console.log('Todos los datos fueron insertados correctamente');
  } catch (err) {
    console.error('Error al insertar los datos:', err);
  } finally {
    mongoose.disconnect();
  }
}