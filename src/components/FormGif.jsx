// import { useState } from "react";

// export const FormGif = (props) => {
//   const { addCategory } = props;

//   const [category, setCategory] = useState("");

//   const handleInput = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSubmitGit = (event) => {
//     event.preventDefault();
//     if (category.trim() !== "") {
//       // Verifica si el texto ingresado no está vacío
//       addCategory(category);
//       setCategory("");
//     } else {
//       alert("Por favor ingresa un texto antes de buscar.");
//     }
//   };

//   /*console.log("category",category)*/

//   return (
//     <form onSubmit={handleSubmitGit}>
//       <p>Buscar Personajes</p>
//       <input
//         onChange={handleInput}
//         type="text"
//         placeholder="Buscador de personajes"
//         value={category}
//       />
//       <button>Buscar</button>
//     </form>
//   );
// };
import React, { useEffect, useState } from "react";
import { getCategoryGif } from "../actions/api.gif";

export const FormGif = ({ addCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Error en la solicitud de búsqueda de personajes.");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setCharacters([]);
      }
    };
    fetchCharacters();
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      addCategory(searchTerm);
      setSearchTerm("");
    } else {
      alert("Por favor ingresa un término de búsqueda antes de buscar.");
    }
  };

  const handleSelectOption = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-center">Buscar Personajes</p>

      <section className="grid place-items-center bg-emerald-90 p-1 ">
        <div className="flex gap-4">
          {/* <input
            className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            onChange={handleInput}
            type="text"
            placeholder="Buscador de personajes"
            value={searchTerm}
          /> */}

          {/* <div className="flex gap-4 mt-4"> */}
          <select
            value={searchTerm}
            onChange={handleSelectOption}
            className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
          >
            <option value="" disabled>
              Selecciona un personaje
            </option>
            {characters.map((character) => (
              <option key={character.id} value={character.name}>
                {character.name}
              </option>
            ))}
          </select>
          {/* </div> */}
          <button
            type="submit"
            className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          >
            Buscar
          </button>

          {/*Selecct  */}
        </div>
      </section>

      {/* <input
        onChange={handleInput}
        type="text"
        placeholder="Buscador de personajes"
        value={searchTerm}
      />
      <button type="submit">Buscar</button> */}
    </form>
  );
};
