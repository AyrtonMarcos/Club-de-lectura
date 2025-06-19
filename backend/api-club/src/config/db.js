const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB correctamente');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error);
    process.exit(1);
  }
};

module.exports = conectarDB;