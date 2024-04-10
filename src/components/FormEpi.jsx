import { useEffect, useState } from "react"
import { getEpisodes } from "../actions/api.epi"
import { Episodes } from './Episodes';

export const FormEpi = () => {

    const [episodes,setEpisodes] = useState({});

    useEffect(() => {
      //getEpisodes(Episodes).then(res => getEpisodes(res.results))
       const fetchData = async () => {
        const data = await getEpisodes();
         setEpisodes(data);
       }
       fetchData();
    },[])
   return (
    <div >
        <br />
        <p>Listado de Episodios</p>
        <Episodes episodes={episodes} />
        
    </div>

  )
  //console.log("episodes",episodes)
}
