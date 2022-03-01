# Prueba práctica frontend developer

\_Este es un desafio de frontend enviado por Merqueo, hecho con Reactjs

## Comenzando 🚀

\_Primero clonarlo con:

```
git clone https://github.com/rimitola8511/supermarket
```

Una vez clonado, abrir el directorio raiz y ejecutar `cd supermarket` para entrar al directorio del proyecto.

### Pre-requisitos 📋

Nota: `Para efectos de la práctica se eliminó del .gitignore la linea que no permitía subir al repo el archivo .env, de tal manera que al clonar el poryecto esté ya se descargue con el mismo`

```
Crear un archivo .env y definir la variable REACT_APP_API_URL = https://run.mocky.io/v3
```

### Instalación 🔧

Nota: `La versión de nodejs utilizada es v14.18.2`

\_Para iniciar el proyecto localmente se debe seguir los siguientes pasos:

```
npm install
```

_Y luego_

```
npm start
```

## Ejecutando las pruebas ⚙️

\_Para ejecutar las pruebas unitarias se debe ejecutar en la terminal `npm run test`

Las instrucciones mencionadas anteriormente te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

## Despliegue 📦

\_La versión final de la aplicación se encuentra publicada en Netlify en la siguiente URL:

```
https://laughing-jepsen-b60f96.netlify.app
```

## ¿Qué tecnología se utilizaron? 🧱

Se utilizó HTML, CSS y Javascript esté último se combinó con la libreria Reactjs y typescript, ademas de sass, axios y react-testing-library con jest para los test.

## ¿Qué interesante tiene el código?

Se intentó seguir las mejores practicas aplicando arquitectura hexagonal con Reactjs y Typescript, la cual nos permite ordenar nuestro código y hacer que las distintas partes de la aplicación se comuniquen entre sí, también nos ayuda a mantener unos atributos de calidad como la escalabilidad, desacoplamiento y mantenibilidad; se intento modularizar y reutilizar todo lo más posible. La idea es tener un código prolijo pero eficiente fácilmente escalable, se realizaron test unitarios de los componentes visuales, se utilizó una instacia de axios para definir una URL base y así realizar las peticiones a la API de forma optima, se añadireron types como validación de props, se creó un contexto para mantener un estado global de lo necesario junto con el hook useReducer para manejo de estados complejos.

Se prestó atención a la accesibilidad del sitio y al diseño en general respetando el diseño provisto, el cual se optó por desarrollarlo con HTML y CSS sin la necesidad de un framework css, sin descuidar la adaptabilidad a las diferentes pantallas.

---

⌨️ con ❤️ por [Ricardo Imitola](https://github.com/rimitola8511) 😊
