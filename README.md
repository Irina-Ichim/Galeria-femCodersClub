# GaleríaFemCoders Club

Bienvenido/a a la Galería FemCoders Club, una plataforma donde los miembros registrados pueden compartir fotos de los eventos organizados por la comunidad femCoders Club. Este proyecto consta de dos partes principales: el backend y la interfaz de usuario.

## Descripción 📝

La Galería FemCoders Club es una galería pública donde los usuarios registrados pueden subir y compartir fotos de los eventos de femCoders Club. Está diseñada para ser una plataforma segura y accesible para todos los miembros de la comunidad.

## Características 🚀

___ Registro de Usuarios: Los usuarios pueden registrarse para obtener una cuenta y acceder a la galería.

___ Subida de Fotos: Los usuarios pueden subir fotos de los eventos del FemCoders Club.

___ Política de Privacidad: Todos los usuarios deben cumplir con nuestra Política de Privacidad al usar la plataforma.

___ Backend Node.js: El backend está creado con Node.js, Express y MySQL para gestionar la lógica y la base de datos.

___ Interfaz de Usuario SvelteKit: La interfaz de usuario está creada con SvelteKit para una experiencia de usuario dinámica y receptiva.

## Requisitos 🛠️

___ Node.js: El servidor backend está creado con Node.js. Se recomienda utilizar la versión 18 para compatibilidad con el despliegue en Vercel.

___ MySQL: Se utiliza MySQL como base de datos para almacenar la información de las imágenes y otros datos relacionados.

## Configuración ⚙️

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio en tu máquina local utilizando el siguiente comando en tu terminal:

```bash
git clone https://github.com/femcodersclub/Galeria-femCodersClub.git
```

2.Instala las dependencias utilizando 

```bash
npm install.
```

3.Configura tu base de datos MySQL y actualiza la información de conexión en el archivo config.js.

4.Inicia el servidor backend con:

```bash
node server.mjs
```

5.Para la interfaz de usuario, utiliza:

```bash
npm run dev
```

## Destacando las Ventajas de SvelteKit 🚀

___Agregar Rutas Dinámicas
SvelteKit facilita la creación de rutas dinámicas, lo que significa que puedes crear rutas personalizadas para cada evento.

Compresión de Imágenes
___Con SvelteKit, la compresión de imágenes es simple y eficiente. Puedes integrar fácilmente funciones de compresión de imágenes en tu aplicación para reducir el tamaño de los archivos y mejorar el rendimiento de carga de la página.

___Simplificación del Manejo de Formularios
Con SvelteKit, el manejo de formularios es sencillo y directo. Puedes utilizar las funciones proporcionadas por el framework, como on:submit y bind:value, para manejar la entrada de datos del usuario de manera eficiente.

___Navegación entre Páginas
La importación de goto desde $app/navigation es una característica poderosa de SvelteKit que simplifica la navegación entre páginas de manera intuitiva. Puedes utilizar esta función para dirigir a los usuarios a diferentes secciones de tu aplicación de forma dinámica y sin problemas.

___Integración con Bases de Datos
SvelteKit se integra fácilmente con bases de datos, lo que te permite recuperar y mostrar datos dinámicamente en tu aplicación. Además, puedes agregar características adicionales, como un contador de likes en el carousel, permitiendo a los usuarios interactuar con las imágenes y expresar su aprecio.

## Conclusión 🌟

SvelteKit hace que el desarrollo de aplicaciones web sea más rápido y sencillo al proporcionar herramientas intuitivas para manejar la lógica de la aplicación, la navegación entre páginas y la integración con bases de datos. Con estas características, la Galería FemCoders Club ofrece una experiencia de usuario fluida y una gestión eficiente de los datos. ¡Explora todas las posibilidades que ofrece SvelteKit y sigue construyendo aplicaciones increíbles!

## Agradecimientos especiales 💖

Queremos expresar nuestro agradecimiento a [Spline](https://spline.design/) y su vibrante comunidad por inspirarnos y ayudarnos a dar vida a nuestras ideas! 🎨🚀
