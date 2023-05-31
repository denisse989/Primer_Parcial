import { movies } from "../helpers/Movies";
export const NavBar = ({ setFiltro, setFiltroMovies }) => {
  const resetear = () => {
    setFiltro(false)
    setFiltroMovies(movies)
  }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-full flex justify-between ">
        <div className="text-white font-bold mx-10 text-3xl">
          Buscador de Películas</div>
        <div className="space-x-8">
          <button
            className=" hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
            onClick={resetear}
            type="button"
          >
            Eliminar Filtros
          </button>

        </div>
      </div>
    </nav>
  );
};
