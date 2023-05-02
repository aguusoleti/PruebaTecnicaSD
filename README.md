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
--------------------------------------------------------------------------------------------------------

<a name="EN"></a>
# Stoy Dots

![Story Dots](https://prueba-tecnica-sd.vercel.app/logo.jpeg)


# Product Gallery

The Product Gallery is an application that allows you to view a catalog of Story Dots. You can access the application as a guest to view the products or register and login as a user. If you have the administrator role, you will have the ability to view, modify, create, and delete products.

# BackEnd

The backend of the application consists of three main models: products, users, and brands. Each of these models has its respective routes and controllers to perform different operations.

### Products
The products model contains the information of the products available in the gallery. The associated routes and controllers allow you to create, edit, delete, and get all products. You can also filter the products based on any property.

### Users
The users model handles user registration and authentication. The associated routes allow you to create a new user and perform login.

### Brands
The brands model is used to create and manage the brands of the products in the gallery. You can add new brands through the corresponding routes.

Additionally, all routes have implemented validators using Joi to ensure data integr

# FrontEnd

Key Features

Intuitive and appealing user interface.

User registration and authentication.

Viewing available products.

Filtering products by specific properties.

Additional functionalities for administrators, such as modifying, creating, and deleting products.

## Project Setup

Follow these steps to set up the project and run the application in your local environment:

Clone this repository to your local machine.

Open a terminal in the project's root folder.

Run the following command to install the dependencies:

npm install

Set up the environment variables in a .env file. Make sure to include the backend URL and any other necessary configurations.


## Project Structure  
The project structure follows a modular and scalable architecture. Here is a summary of the main directories and files:

pages: Contains the application pages.

components: Groups reusable user interface components.

api: Provides functions to make requests to the backend.

styles: Contains custom styles and themes for the application.

public: Stores static files for the application.


# Usage
Clone this repository to your local machine.

Install the dependencies using the command npm install.

Set up the environment variables in a .env file (see below).

Run the application with the command npm start.

## Environment Variables

Make sure to configure the following environment variables in a .env file:

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

This will start the Next.js development server, and you can access the application in your browser at http://localhost:3000.

# Contributions
If you want to contribute to this project, please follow these steps:

Fork this repository.

Create a new branch for your feature (git checkout -b feature/new-feature).

Make your changes and commit them with explanatory messages.

Push your changes to the remote repository (git push origin feature/new-feature).

Open a pull request to review your changes.

## ROLES 

| Developer          | Role                    | LinkedIn                                                   | GitHub                                    |
| ------------------ | ----------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| Agustin Soleti     | FullStack               | https://www.linkedin.com/in/aguusoleti/                    | https://github.com/aguusoleti             |

## Contact

If you have any questions or suggestions, feel free to contact us. We hope you enjoy using the Product Gallery!


## Used Technologies:

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


[Back to the init](#beginning)
