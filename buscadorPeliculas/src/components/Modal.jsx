import CerrarBtn from "../assets/cerrar.svg";
import FormPelicula from "./FormPelicula";

const Modal = ({ searchMoviesFilter, setSearch, setFiltro }) => {
    const ocultarModal = () => {
        setSearch(false);
    };
    return (
        <div className="fixed inset-0 w-full h-full bg-custom-black">
            <div className="absolute right-3 top-3 w-5 h-5">
                <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
            </div>
            <FormPelicula
                searchMoviesFilter={searchMoviesFilter}
                setSearch={setSearch}
                setFiltro={setFiltro}>
            </FormPelicula>
        </div>
    );
};

export default Modal;