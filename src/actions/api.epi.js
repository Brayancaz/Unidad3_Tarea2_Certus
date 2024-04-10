export const getEpisodes = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
};
