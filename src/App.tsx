import React from "react";
import { mascotas } from "./data/mascotas";
import ListaMascotas from "./components/ListaMascotas";

const App: React.FC = () => {
  console.log("Listado de mascotas:", mascotas);

  return (
    <div>
      <h1>Adopta una Mascota</h1>
      {/* Renderizar ListaMascotas y pasarle el array de mascotas */}
      <ListaMascotas mascotas={mascotas} />
    </div>
  );
};

export default App;