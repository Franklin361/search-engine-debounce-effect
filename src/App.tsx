import { Form } from "./components/Form"
import { useEffect, useState } from 'react';
import { searchPokemon } from "./utils/searchPokemon";
import { ResponseAPI } from "./interface/pokemon";
import { Pokemon } from "./components/Pokemon";
import { useInput } from "./hooks/useInput";
import { useDebounce } from "./hooks/useDebounce";

const App = () => {

  const [value, onChange] = useInput();
  const debouncedValue = useDebounce(value, 1000);

  const [pokemon, setPokemon] = useState<ResponseAPI | null>({} as ResponseAPI);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const controller = new AbortController();
    if (debouncedValue) {
      setIsLoading(true)
      searchPokemon(debouncedValue, controller.signal)
        .then(data => {
          setPokemon(data);
          setIsLoading(false);
        })
    }

    return () => controller.abort();
  }, [debouncedValue])


  return (
    <div className="container">
      <h1> <span>Search Engine</span> whit <span>Debounce Effect</span> </h1>
      <Form {...{ value, onChange }} />
      {
        isLoading 
          ? <span>Loading Results...</span>
          : <Pokemon pokemon={pokemon}/>
      }
      
    </div>
  )
}
export default App