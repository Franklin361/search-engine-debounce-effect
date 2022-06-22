import { Form } from "./components/Form"
import { useEffect, useState } from 'react';
import { searchPokemon } from "./utils/searchPokemon";
import { ResponseAPI } from "./interface/pokemon";
import { Pokemon } from "./components/Pokemon";

const delay = 1000; // 1s

const App = () => {

  const [pokemon, setPokemon] = useState<ResponseAPI | null>({} as ResponseAPI);
  const [isLoading, setIsLoading] = useState(false)

  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => clearTimeout(timer)
  }, [value, delay]);

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