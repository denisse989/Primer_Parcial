# Aplicación de buscador de películas
## Requerimientos
Crea una aplicación de React utilizando el entorno de desarrollo Vite. Utiliza Tailwind CSS para el estilo de la página. Implementa la funcionalidad utilizando los siguientes conceptos de React:
* useState: Utiliza el estado para controlar el contenido del formulario de la página.
* useEffect: Utiliza el efecto para guardar los datos del formulario en el almacenamiento local (localStorage) cada vez que cambien.
* reduce y map: Utiliza estos métodos para renderizar una lista de características de la página de manera dinámica.
* localStorage: Utiliza el almacenamiento local para almacenar los datos del formulario de manera persistente.

La página debe tener la siguiente estructura:
* Un encabezado con el título de la página.
* Un formulario de busqueda con los siguientes campos: titulo, año de las peliculas
* Una lista de características de la página que se renderice utilizando reduce y map.
* Un botón de envío para enviar el formulario.

La página debe cumplir con los siguientes requisitos:
* El estado del formulario debe actualizarse correctamente cuando los campos cambien.
* Los datos del formulario deben almacenarse en el almacenamiento local cada vez que cambien.
* La lista de características debe generarse dinámicamente a partir de un array de características.
* El envío del formulario debe mostrar una alerta en pantalla con los datos del formulario.
## Estructura
![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/ab28dc48-6021-41e2-bd0a-2dde1c3d6aa4)

Dentro de components tenemos los siguientes comoponentes:
* FormPelicula: Crea el form de busqueda y recibe los datos de los inputs.
* Modal: Estructura del Modal y envia parametros a FormPelicula.
* NavBar: Encabezado con el título de la página y un botón para resetear los filtros.
* Pelicula: Estructura de Card de cada película.
* Peliculas: Recorre el array de peliculas para enviarlas a Pelicula.

![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/8ffcfbe3-01f3-4a12-b282-767e378dbaa8)

Dentro de helpers tenemos Movies.js donde se crea el array de peliculas que se tiene por defecto en la página. Contiene 10 películas con sus respectivos datos.

![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/e67d63ee-4a48-41f9-9e89-d38c17c850d4)

Finalmente se tiene la App.jsx que es la que se encarga de integrar los componentes y donde se usa la mayoria de funcionalidades como:
* useState: Donde utiliza el estado de las constantes para controlar el contenido del formulario de busqueda de la página y los envia a sus componentes para su uso.
* useEffect: Se utiliza el efecto para guardar los datos del array de películas obtenido luego de aplicar un filtro en el almacenamiento local cada vez que cambien por un filtro o por ser restaurado.
* map y filter: Utiliza estos métodos para renderizar el array de películas de la página de manera dinámica.
* localStorage: Utiliza el almacenamiento local para almacenar los datos del array de películas filtradas de manera persistente. 

## Video Explicativo

https://drive.google.com/drive/folders/1-rnaP8CpodGCigmOnFdHknacn0AAXNrC?usp=sharing
