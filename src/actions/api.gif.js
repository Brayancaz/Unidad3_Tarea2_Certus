// export const getCategoryGif = async (category) => {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/?name=${category}`
//   );
//   const data = await response.json();
//   return data;
// };
export const getCategoryGif = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud de búsqueda de personaje.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al buscar personaje:", error);
    return [];
  }
};
