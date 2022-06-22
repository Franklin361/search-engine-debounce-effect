import { ResponseAPI } from "../interface/pokemon"

export const Pokemon = ({ pokemon }: { pokemon: ResponseAPI | null }) => {
  
  if(pokemon && Object.keys(pokemon).length === 0) return <></>;
  
  return (
    <>
      {
        !pokemon
          ? <span>No results</span>
          : <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
      }
    </>
  )
}