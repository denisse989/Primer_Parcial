import Pelicula from './Pelicula'
const Peliculas = ({filtroMovies}) => {
  return (
    <section>
      <div >
        {filtroMovies.map((movie) => {
          return <Pelicula {...movie} key={movie.id} />
        })}
      </div>
    </section>
  )
}
export default Peliculas
