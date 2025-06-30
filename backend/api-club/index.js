const path = require('path');
const express = require('express'); // Importamos express
const dotenv = require('dotenv');
dotenv.config();

const conectarDB = require('./src/config/db');
conectarDB();

// Routes
const librosLeidosRoutes = require('./src/routes/librosleidos.routes');
const proximosLibrosRoutes = require('./src/routes/proximoslibros.routes');
const miembrosRoutes = require('./src/routes/miembros.routes');


const app = express(); // Creamos la app
const PORT = process.env.PORT || 3000; // Puerto donde escuchará el servidor


app.use(express.json());
app.use('/libros-leidos', librosLeidosRoutes);
app.use('/miembros', miembrosRoutes);
app.use('/proximos-a-leer', proximosLibrosRoutes);
app.get('/', (req, res) => {
  res.send( "API del Club de Lectura 📚 funcionando correctamente" );
});


app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


 