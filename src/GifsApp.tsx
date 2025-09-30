import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/Components/PreviousSearches"
import { GifList } from "./gifs/Components/GifList"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

  const { handleSearch, handleTermClicked, previousTerms, gifs } = useGifs();

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
    <GifList gifs = {gifs} />
    
   </>
  )
}
