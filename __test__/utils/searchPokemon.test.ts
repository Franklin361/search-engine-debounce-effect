import { searchPokemon } from '../../src/utils/searchPokemon';
describe('📂 searchPokemon.ts', () => {
     test('🟣 Should return a pokemon', async () => {
        const namePokemon = 'ditto';
        
        const pokemon = await searchPokemon(namePokemon);
        expect(pokemon).toBeTruthy()
        expect(pokemon?.name).toBe(namePokemon)
     });

     test('🟣 Should return a null if the key word is empty', async () => {
        const namePokemon = '';
        
        const pokemon = await searchPokemon(namePokemon);
        expect(pokemon).toBeNull()
     });

     test('🟣 Should return a null if the api does not found the pokemon', async () => {
        const namePokemon = 'no-exists';
        
        const pokemon = await searchPokemon(namePokemon);
        expect(pokemon).toBeNull()
     });
})