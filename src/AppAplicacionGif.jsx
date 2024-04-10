import { useState } from "react";
import { CardGif, FormEpi, FormGif } from "./components";
import { Result } from "postcss";

export const AppAplicacionGif = () => {
  const [categories, setCategories] = useState([]);
  const [espisodios, setEpisodios] = useState([]);

  const addEpisodios = (Episodes) => {
    setEpisodios([Episodes, ...espisodios]);
  };

  const addCategory = (category) => {
    setCategories([category, ...categories]);
  };

  const handleDelete = (id) => {
    const deletePersonajes = categories.filter(
      (category) => category.id !== id
    );
    setCategories(deletePersonajes);
  };

  return (
    <div>
      <nav className="bg-teal-100">
        <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
          <div className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
            Tarea N° 2 - Robert Braya Ycaza Legua - CERTUS /////--/////
            CONSULTANDO A LA API DE RICK Y MORTI
          </div>
        </div>
      </nav>

      <div className="text-center">
        <FormGif addCategory={addCategory} />

        {categories.map((category, id) => (
          <div key={id}> Personaje Seleccionado: {category}</div>
        ))}

        {categories.map((category, name) => (
          <div key={name}>
            <button
              className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
              onClick={() => handleDelete(name.id)}
            >
              Limpiar
            </button>
            <CardGif key={name} category={category} />
          </div>
        ))}
      </div>
      <hr />

      <div className="text-center">
        <FormEpi />
      </div>
    </div>
  );
};
