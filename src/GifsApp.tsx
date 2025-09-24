import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/Components/PreviousSearches"
import { GifList } from "./gifs/Components/GifList"
import { useState } from "react"

export const GifsApp = () => {
 
    const [ previousTerms, setPreviousTerms ] = useState(['dragon ball z']);

    const handleTermClicked = (term: string) => {
        console.log(term);
    };

    const handleSearch =  (query: string = ' ') => {

      query = query.trim().toLowerCase();
      if( query.length ===0) return;
      if(previousTerms.includes(query)) return; // evitar terminos repetidos
  
      setPreviousTerms([query, ...previousTerms].slice(0,5));
      console.log({query});
    }
  return (
   <>
    <CustomHeader title="Mis Gifs" description="Descubre y comparte el gif perfecto" />
   
   {/* Search Form */}
    <SearchBar placeholder="Busca lo que quieras" 
    //onQuery = { ( query:string ) => handleSearch}
    onQuery={ handleSearch }
    />
  
   {/*  Busquedas previas*/}

    <PreviousSearches 
    searches={previousTerms} 
    onLabelClick ={handleTermClicked}  
    />

      {/*  Gifs*/}
    <GifList gifs = {mockGifs} />
    
   </>
  )
}
