import { ResponseAPI } from "../interface/pokemon";

export const searchPokemon = async (pokemon: string, signal?: AbortSignal): Promise<ResponseAPI | null> => {
    try {
        
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await fetch(url, { signal });
        const data: ResponseAPI = await res.json();
        return data ? data: null

    } catch (error) {
        console.log(error)
        return null
    }
}