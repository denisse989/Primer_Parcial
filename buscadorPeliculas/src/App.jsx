import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import IconoBusqueda from "./assets/icono_busqueda.svg"
import Peliculas from './components/Peliculas'
import Modal from './components/Modal'
import { movies } from './helpers/Movies'

function App() {
  const [search, setSearch] = useState(false);
 
  const [filtro, setFiltro] = useState( false);

  const [filtroMovies, setFiltroMovies] = useState((
    localStorage.getItem('filtroMovies')) ?
    JSON.parse(localStorage.getItem('filtroMovies')) : movies);

  const searchMoviesFilter = (titulo, ye) => {
    const filteredMovies = movies.filter((movie) => {
      const { title, year } = movie;
      return (
        title.toLowerCase().includes(titulo.toLowerCase()) &&
        year.toLowerCase().includes(ye.toLowerCase()) 
      );
    });
    setFiltroMovies(filteredMovies);
  };
  useEffect(() => {
    localStorage.setItem("filtroMovies", JSON.stringify(filtroMovies));
  }, [filtroMovies]);
  /*useEffect(() => {
    localStorage.setItem("filtro", filtro);
  }, [filtro]);*/

  return (
    <>
      <NavBar setFiltro={setFiltro} setFiltroMovies={setFiltroMovies}></NavBar>
      {
        !filtro ? (
          <>
            <Peliculas filtroMovies={filtroMovies}></Peliculas>
            <div className="fixed bottom-5 right-5">
              <img
                className="w-20 hover:bg-gray-800 rounded"
                src={IconoBusqueda}
                alt="icono nuevo gasto"
                onClick={() => {
                  setSearch(true)
                }}
              />
            </div>
          </>
        ) : (
          <>
          <Peliculas filtroMovies={filtroMovies}></Peliculas>
          {
            filtroMovies.length>0 ?
            (<></>):
            (<div className='text-3xl text-center font-bold my-10'>No existe esta Película</div>)
          }
          </>
        )}

      {
        search ? (
          <Modal
            searchMoviesFilter={searchMoviesFilter}
            setSearch={setSearch}
            setFiltro={setFiltro} />
        ) : (<></>)
      }
    </>
  )
}

export default App
