import React from "react";
import PropTypes from "prop-types";
import MascotaCard from "./MascotaCard";

const ListaMascotas = ({ mascotas }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id} // Usar el id como key
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
};

// Definición de tipos de props
ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ListaMascotas;