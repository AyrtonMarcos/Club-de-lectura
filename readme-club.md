# Club de Lectura Charles Dickens

## Descripción

Esta es una aplicación web para un club de lectura denominado "Charles Dickens". Permite a los usuarios explorar libros leídos y próximos a leer, y a los administradores gestionar el catálogo de lecturas, agregando, editando o eliminando entradas.

El proyecto está dividido en backend y frontend:

- **Backend:** API REST construida con Node.js, Express y MongoDB (Docker) que maneja las colecciones de libros leídos, próximos a leer y miembros.
- **Frontend:** Aplicación React que consume la API y presenta la interfaz para usuarios y administradores.

---

## ## Tecnologías Utilizadas

- **Frontend:** React 19, React Router Dom 7.6.3  
- **Backend:** Node.js con Express  
- **Base de Datos:** MongoDB  
- **Dependencias Backend:**  
  - cors ^2.8.5  
  - mongoose ^8.15.1  
  - dotenv ^16.4.5

---

## Funcionalidades

### Para usuarios:

- Ver listado de libros leídos con información completa.
- Ver listado de próximos libros a leer.
- Navegar entre páginas.

### Para administradores:

- Acceder a un panel especial donde pueden:
  - Agregar nuevos libros.
  - Eliminar libros existentes.
  - (Futuro) Modificar datos de los libros.

---

## Instrucciones para correr el proyecto

### Prerrequisitos

- Node.js instalado
- Docker instalado y corriendo o MongoDb en su defecto
- Archivo `.env` configurado en la carpeta backend

### variables de entorno

El backend requiere un archivo .env en la raíz de su carpeta para poder conectarse correctamente a la base de datos y definir el puerto.

Creá un archivo llamado .env dentro de la carpeta backend con el siguiente contenido:

MONGO_URI=mongodb://root:mongopassword@localhost:27017/db_club?authSource=admin
PORT=3000

### Configuración de la base de datos

Este proyecto usa MongoDB para almacenar los datos.

Puedes levantar la base de datos de dos maneras:

Usando Docker (recomendado):

Si tenés Docker instalado, ejecutá:

docker run -d -p 27017:27017 --name clubdb mongo
Esto levanta un contenedor con MongoDB en el puerto 27017.

### Backend

1. Abrir una terminal en la carpeta backend.
2. Ejecutar `npm install` para instalar dependencias.
4. Ejecutar `node index.js` para iniciar el servidor backend.
5. El backend estará disponible en `http://localhost:3000`.

### Frontend

1. Abrir otra terminal en la carpeta frontend.
2. Ejecutar `npm install` para instalar dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.
4. Abrir el navegador en `http://localhost:5173` 

---

## Uso

- Navegar a la página principal para ver los botones de navegación.
- Para acceder al panel de administración ir a `http://localhost:5173/admin`.
- Desde el panel de administración se pueden agregar y eliminar libros.

---

## Notas

- Actualmente no hay autenticación implementada, por lo que el panel de administración está abierto.

---

¡Gracias por revisar el proyecto!
