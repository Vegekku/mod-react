# Practice Requirements

## Arquitectura

1. &#9745; Utilizar la API de https://developers.themoviedb.org/3
2. &#9745;Guardar en localstorage:
  * &#9745;las colecciones del usuario.
  * &#9745;puntuaciones de cada pelicula.
3. &#9745;Interfaz realizada con React.

## Funcionalidad

1. &#9745;Buscar películas (/search/movie) para añadirlas a la colección.
2. &#9745;Listar sugerencias de películas (/discover/movie?sort_by=popularity.desc)
3. &#9745;Valorar películas de sus colecciones
4. &#9745;Crear (y borrar) colecciones y modificarlas añadiendo o borrando películas
5. &#9745;Vista detalle de película

## Estructura localStorage

```json
{
  user: {
    scores: [
      1: {
        value: 10
      }
    ],
    collections: [
      1: {
        title: 'Example',
        movies: [1],
        created_at: date
      }
    ]
  }
}
```

## Usos de API

```
API Key: a7344235cf71916f964295b0d4d6133a
```

### Búsqueda de películas

https://api.themoviedb.org/3/search/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-Es&query=dragon%20ball

### Sugerencias de películas

https://api.themoviedb.org/3/discover/movie?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES&sort_by=popularity.desc

### Detalle de película

https://api.themoviedb.org/3/movie/503314?api_key=a7344235cf71916f964295b0d4d6133a&language=es-ES

### Obtención de imágenes

https://image.tmdb.org/t/p/w500/4urPfAgAWyimfKghVWRvVwD88Cz.jpg