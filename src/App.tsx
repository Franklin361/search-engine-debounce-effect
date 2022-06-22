import { Form } from "./components/Form"
import { Pokemon } from "./components/Pokemon";
import { useInput } from "./hooks/useInput";
import { useDebounce } from "./hooks/useDebounce";
import { useSearchPokemon } from "./hooks/useSearchPokemon";

const App = () => {

  const [value, onChange] = useInput();
  const debouncedValue = useDebounce(value, 1000);
  const { isLoading, pokemon } = useSearchPokemon(debouncedValue)


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