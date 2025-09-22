import { useState, type KeyboardEventHandler } from "react";

interface Props {
    placeholder?: string;
    onQuery:(query: string) => void // function to handle the search query as function 
}

export const SearchBar = ({placeholder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState(' '); // valor inicial del input

  const handleSearch = () => {
    onQuery(query);
    setQuery(''); // limpiar el input despues de la busqueda
  }

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input type="text"
       placeholder= {placeholder}
       value={ query }
       onChange={ (event) => setQuery(event.target.value) }   // actualiza el estado con el valor del input
       onKeyDown={ handleKeyDown }    
       />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
