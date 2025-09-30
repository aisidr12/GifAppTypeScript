import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

const gifsCache : Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    if(gifsCache [term]){
        setGifs(gifsCache[term]);
        return;
    }
  };

  const handleSearch = async (query: string = " ") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return; // evitar terminos repetidos

    setPreviousTerms([query, ...previousTerms].slice(0, 5));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs); // <-- Guarda los gifs en el estado

  }
    return { 
       
        //props
        gifs, 
        // actions / methods
        handleSearch,
        handleTermClicked,
        previousTerms,
    }
}