import { useEffect, useState } from "react";
import { getEpisodes } from "../actions/api.epi";
import { Button } from "./Button";

export const Episodes = ({ episodes }) => {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  };

  return (
    <div>
      <button
        onClick={toggleEpisodes}
        type="text"
        className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
      >
        {/* Buscar */}
        {showEpisodes ? "Ocultar episodios" : "Mostrar episodios"}
      </button>

      {showEpisodes && (
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <strong>{episode.name}</strong> - {episode.episode} (
              {episode.air_date})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
