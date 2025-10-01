import { useState, useRef } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

//const gifsCache : Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const gifsCache = useRef< Record<string, Gif[]>> ({}) //UseRef se usa para mantener el mismo objeto en toda la vida del componente


  const handleTermClicked = async (term: string) => {
    if(gifsCache.current[term]){
        setGifs(gifsCache.current[term]);
        return;
    }
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = " ") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return; // evitar terminos repetidos

    setPreviousTerms([query, ...previousTerms].slice(0, 5));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs); // <-- Guarda los gifs en el estado
    gifsCache.current[query] = gifs; // <-- Guarda los gifs en el cache
};

    return { 
       
        //props
        gifs, 
        // actions / methods
        handleSearch,
        handleTermClicked,
        previousTerms,
    }
}