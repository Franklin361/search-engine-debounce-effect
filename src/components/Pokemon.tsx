import { ResponseAPI } from "../interface/pokemon"

export const Pokemon = ({ pokemon }: { pokemon: ResponseAPI | null }) => {
  
  if(pokemon && Object.keys(pokemon).length === 0) return <></>;
  
  return (
    <>
      {
        !pokemon
          ? <span className="no-results">No results</span>
          : <div className="pokemon">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default ?? 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png'} alt={pokemon.name} />
          </div>
      }
    </>
  )
}