import React from "react";
import { mascotas } from "./data/mascotas";

const App: React.FC = () => {
  console.log("Listado de mascotas:", mascotas);

  return (
    <div>
      <h1>Adopta una Mascota</h1>
    </div>
  );
};

export default App;