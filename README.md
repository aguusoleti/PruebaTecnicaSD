# PruebaTecnicaSD

<a name="beginning"></a>
[Español](#ES) - [English](#EN)

<a name="ES"></a>

# Stoy Dots

![Story Dots](https://prueba-tecnica-sd.vercel.app/logo.jpeg)


Galeria de Productos

  La Galería de Productos es una aplicación que te permite visualizar un catálogo de Story Dots. Puedes acceder a la aplicación como invitado para ver los productos o registrarte y acceder como usuario. Si tienes el rol de administrador, tendrás la capacidad de ver, modificar, crear y eliminar productos.


# BackEnd

El backend de la aplicación consta de tres modelos principales: products, users y brands. Cada uno de estos modelos tiene sus respectivas rutas y controladores para realizar diferentes operaciones.

### Products
El modelo products contiene la información de los productos disponibles en la galería. Las rutas y controladores asociados te permiten crear, editar, eliminar y obtener todos los productos. También puedes filtrar los productos según cualquier propiedad.

### Users
El modelo users se encarga del registro y autenticación de los usuarios. Las rutas asociadas te permiten crear un nuevo usuario y realizar el inicio de sesión.

### Brands
El modelo brands se utiliza para crear y administrar las marcas de los productos en la galería. Puedes agregar nuevas marcas a través de las rutas correspondientes.

Además, todas las rutas cuentan con validadores implementados utilizando Joi para garantizar la integridad de los datos.

# FrontEnd

Características principales

Interfaz de usuario intuitiva y atractiva.

Registro y autenticación de usuarios.

Visualización de productos disponibles.

Filtrado de productos por propiedades específicas.

Funcionalidades adicionales para administradores, como la modificación, creación y eliminación de productos.

## Configuración del proyecto

Sigue estos pasos para configurar el proyecto y ejecutar la aplicación en tu entorno local:

Clona este repositorio en tu máquina local.

Abre una terminal en la carpeta raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias:

npm install

Configura las variables de entorno en un archivo .env. Asegúrate de incluir la URL del backend y cualquier otra configuración necesaria.

## Estructura del proyecto  
La estructura del proyecto sigue una arquitectura modular y escalable. A continuación, se muestra un resumen de los directorios y archivos principales:  

pages: Contiene las páginas de la aplicación.  

components: Agrupa los componentes reutilizables de la interfaz de usuario.  

api: Proporciona funciones para realizar solicitudes al backend.  

styles: Contiene estilos y temas personalizados para la aplicación.  

public: Almacena los archivos estáticos de la aplicación.  


# Uso
Clona este repositorio en tu máquina local.

Instala las dependencias utilizando el comando npm install.

Configura las variables de entorno en un archivo .env (ver más abajo).

Ejecuta la aplicación con el comando npm start.

Variables de entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo .env:

|nombre         |Datos                                 |
|---------------|--------------------------------------|
|DB_CONNECTION: |Cadena de conexión a la base de datos.|
|JWT_SECRET:    |Clave secreta para generar tokens JWT.|

cd BackEnd/

npm install

npm run dev

cd FrontEnd/

npm install

npm run dev

Esto iniciará el servidor de desarrollo de Next.js y podrás acceder a la aplicación en tu navegador en la dirección http://localhost:3000





#Contribuciones
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Realiza un fork de este repositorio.

Crea una rama nueva para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y realiza commits explicativos.

Envía tus cambios al repositorio remoto (git push origin feature/nueva-funcionalidad).

Abre una pull request para revisar tus cambios.


## ROLES 

| Developer          | Rol                     | LinkedIn                                                   | GitHub                                    |
| ------------------ | ----------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| Agustin Soleti     | FullStack               | https://www.linkedin.com/in/aguusoleti/                    | https://github.com/aguusoleti             |

## Contacto
Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto 
¡Esperamos que disfrutes utilizando la Galería de Productos!


## Tecnologías usadas:

        En el Frontend:

<p align="left">
## Next
## React
## MUI
</p>

        En el Backend:

<p align="left">
## MongoDb
## Node.js
## Express
</p>


[Volver al Inicio](#beginning)
---

