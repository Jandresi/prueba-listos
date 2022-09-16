# Api en NodeJs para prueba de acrónimos

Prueba backend realizada en Node.js

## Tecnologías utilizadas

Node.js 16.14.2
Express
Mssql
Cors
Dotenv
Morgan

## Instalación del proyecto

De la página oficial de [Node.js](https://nodejs.org/es/download/) descargar el programa.

Descargar el repositorio con git a través del siguiente comando:
**git clone https://github.com/Jandresi/prueba-listos-backend.git**

*(O descargarlo como archivo comprimido en un zip)*

Tras la clonación del proyecto, ejecutar en una terminal dentro de la carpeta el comando **npm install** para instalar los paquetes necesarios para la ejecución del programa

## Ejecución del programa

Estando en una terminal, ubicados dentro de la carpeta del proyecto *prueba-listos-backend* ejecutaremos el siguiente comando para inicializar el servidor:
**npm run dev**

## Estructura de base de datos requerida

Dentro de este mismo repositorio hay un archivo llamado **scipts-database.sql** que contiene las líneas requeridas para la creación de la base de datos.

## Variables de conexión con la base de datos

Dentro de la carpeta **database** existe un archivo llamado **conection.js** que contiene las siguientes variables de conexión:

user: 'silva'
password: 'silva'
server: 'localhost'
database: 'prueba_listos'

Significando esto que debe existir en la base de datos un usuario con nombre *"silva"* y clave *"silva"*

## FIN DE LA DOCUMENTACIÓN