import { useState } from "react";
import { movies } from "../helpers/Movies";
const FormPelicula = ({searchMoviesFilter, setSearch, setFiltro }) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(false);
        setFiltro(true);
        searchMoviesFilter(title,year)
    };
    return (
        <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/2 mx-auto mt-20">
            <h2 className="text-stone-600 text-3xl text-center font-bold my-10">
                Buscar Película
            </h2>
            <form onSubmit={handleSubmit} className="px-5">
                <div className="m-1 font-bold">
                    <label className="m-4 text-xl text-red-800">
                        Nombre Película:
                    </label>
                    <input
                        id="titulo"
                        type="text"
                        placeholder="Añade el Titulo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                </div>

                <div className="m-7 font-bold">
                    <label className="m-5 text-xl text-red-800">
                        Año Película:
                    </label>

                    <input
                        id="año"
                        type="text"
                        placeholder="Año"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}

                    />
                </div>

                <input
                    className="bg-red-700 hover:bg-red-900 text-white font-bold py-4 px-4 rounded w-full my-5 text-lg"
                    type="submit"
                    value={"Buscar pelicula"}
                />
            </form>
        </div>
    )
}
export default FormPelicula;