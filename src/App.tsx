import React, { useState } from "react";
import { mascotas } from "./data/mascotas";
import ListaMascotas from "./components/ListaMascotas";
import FiltroEspecie from "./components/FiltroEspecie";

const App: React.FC = () => {
  const [filtroEspecie, setFiltroEspecie] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  // Normalizar y validar el texto de búsqueda
  const normalizarTexto = (texto: string) => {
    return texto.trim().toLowerCase().slice(0, 50); // Recorta espacios, convierte a minúsculas y limita a 50 caracteres
  };

  const textoBusqueda = normalizarTexto(busqueda);

  // Filtrar mascotas por especie y nombre
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      filtroEspecie === "Todas" || mascota.especie === filtroEspecie;
    const coincideNombre = mascota.nombre.toLowerCase().includes(textoBusqueda);
    return coincideEspecie && coincideNombre;
  });

  // Contar mascotas en adopción urgente
  const urgentes = mascotasFiltradas.filter((mascota) => mascota.adopcionUrgente).length;

  return (
    <div>
      <h1>Adopta una Mascota</h1>

      {/* Campo de búsqueda */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="busqueda">Buscar por nombre: </label>
        <input
          id="busqueda"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Escribe un nombre..."
        />
      </div>

      {/* Filtro por especie */}
      <FiltroEspecie
        filtroEspecie={filtroEspecie}
        setFiltroEspecie={setFiltroEspecie}
      />

      {/* Contador de urgentes */}
      <p>
        <strong>Mascotas en adopción urgente:</strong> {urgentes}
      </p>

      {/* Renderizado condicional para mostrar mensaje si no hay resultados */}
      {mascotasFiltradas.length === 0 ? (
        <p>No hay mascotas que coincidan</p>
      ) : (
        <ListaMascotas mascotas={mascotasFiltradas} />
      )}
    </div>
  );
};

export default App;