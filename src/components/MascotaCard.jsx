import React from "react";
import PropTypes from "prop-types";

// Estilos diferenciados según la especie
const estilosEspecie = {
  Perro: { backgroundColor: "#d4edda", border: "1px solid #155724" },
  Gato: { backgroundColor: "#d1ecf1", border: "1px solid #0c5460" },
  Otro: { backgroundColor: "#fefefe", border: "1px solid #6c757d" },
};

const MascotaCard = ({ nombre, raza, edad, especie, descripcion, caracteristicas }) => {
  return (
    <div style={{ ...estilosEspecie[especie] || estilosEspecie["Otro"], padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>{nombre}</h2>
      <p><strong>Raza:</strong> {raza}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Especie:</strong> {especie}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Características:</strong></p>
      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
    </div>
  );
};

// Definición de tipos de props
MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  especie: PropTypes.oneOf(["Perro", "Gato", "Otro"]).isRequired,
  descripcion: PropTypes.string.isRequired,
  caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Valores por defecto para props
MascotaCard.defaultProps = {
  nombre: "Sin nombre",
  raza: "Desconocida",
  edad: 0,
  especie: "Otro",
  descripcion: "Sin descripción",
  caracteristicas: ["Sin características"],
};

export default MascotaCard;