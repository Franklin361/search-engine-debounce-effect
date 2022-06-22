import { Form } from "./components/Form"
import { useEffect, useState } from 'react';
import { searchPokemon } from "./utils/searchPokemon";
import { ResponseAPI } from "./interface/pokemon";

const delay = 1000; // 1s
const controller = new AbortController();
const App = () => {

  const [pokemon, setPokemon] = useState<ResponseAPI | null>(null)

  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => clearTimeout(timer)
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue) {
      searchPokemon(debouncedValue, controller.signal)
        .then(data => setPokemon(data))
    }

    return () => controller.abort();
  }, [debouncedValue])


  return (
    <div className="container">
      <h1> <span>Search Engine</span> whit <span>Debounce Effect</span> </h1>
      <Form {...{ value, onChange }} />
    </div>
  )
}
export default App