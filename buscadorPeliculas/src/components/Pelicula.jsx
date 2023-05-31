const Pelicula = ({ icon, title, year, description }) => {
    return (
      <div className="bg-gray-100 shadow-lg rounded-2xl py-5   mx-10 my-10">
      <div className="flex flex-row">
      <div className="basis-1/2 p-5 mx-30">
      <img src={icon} alt="Icono Pelicula" />
      </div>
      <div className="basis-1/2 p-5">
      <p className="font-semibold text-gray-500 mt-5">
          <span className="font-bold text-red-800 text-lg">
            Titulo:
          </span>{" "}
          {title}
        </p>
        <p className="font-semibold text-gray-500 mt-5">
          <span className="font-bold text-red-800 text-lg">
            Año:
          </span>{" "}
          {year}
        </p>
        <p className="font-semibold text-gray-500 mt-5 text-justify">
          <span className="font-bold text-red-800 text-lg ">
            Descripción:
          </span>{" "}
          {description}
        </p>
      </div>
      </div>
    </div>
  );
};
  export default Pelicula
  