import React from "react";
import { mascotas } from "./data/mascotas";
import MascotaCard from "./components/MascotaCard";

const App: React.FC = () => {
  console.log("Listado de mascotas:", mascotas);

  return (
    <div>
      <h1>Adopta una Mascota</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {mascotas.map((mascota) => (
          <MascotaCard
            key={mascota.id}
            nombre={mascota.nombre}
            raza={mascota.raza}
            edad={mascota.edad}
            especie={mascota.especie}
            descripcion={mascota.descripcion}
            caracteristicas={mascota.caracteristicas}
          />
        ))}
      </div>
    </div>
  );
};

export default App;