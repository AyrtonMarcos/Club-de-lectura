//Imports
const express = require('express'); // Importamos express
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:mongopassword@localhost:27017/db_club?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const librosLeidosRoutes = require('./src/routes/librosleidos.routes');
const proximosLibrosRoutes = require('./src/routes/proximoslibros.routes');
const miembrosRoutes = require('./src/routes/miembros.routes');


const app = express(); // Creamos la app
const PORT = 3000; // Puerto donde escuchará el servidor


app.use(express.json());
app.use('/libros-leidos', librosLeidosRoutes);
app.use('/miembros', miembrosRoutes);
app.get('/', (req, res) => {
  res.send( "API del Club de Lectura 📚 funcionando correctamente" );
});

app.use('/proximos-a-leer', proximosLibrosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


 