import React from "react";
import PropTypes from "prop-types";

const FiltroEspecie = ({ filtroEspecie, setFiltroEspecie }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="filtro-especie">Filtrar por especie: </label>
      <select
        id="filtro-especie"
        value={filtroEspecie}
        onChange={(e) => setFiltroEspecie(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtroEspecie: PropTypes.string.isRequired,
  setFiltroEspecie: PropTypes.func.isRequired,
};

export default FiltroEspecie;