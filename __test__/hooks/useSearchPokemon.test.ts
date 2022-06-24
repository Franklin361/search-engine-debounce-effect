import { renderHook, waitFor, act } from '@testing-library/react';
import { useSearchPokemon } from '../../src/hooks/useSearchPokemon';

describe('📂 useSearchPokemon.ts', () => {
     test('🟣 Should return initial state', () => {
         const { result } = renderHook(()=> useSearchPokemon(''))
         
        expect(result.current.pokemon).toEqual({})
        expect(result.current.isLoading).toEqual(false)
     });

     test('🟣 Should return a pokemon', async() => {
         const { result } = renderHook(()=> useSearchPokemon('ditto'))
         expect(result.current.isLoading).toBe(true);
         await waitFor(
            () => expect( result.current.pokemon?.name ).toBe('ditto')
        );
     });

     test('🟣 Should return null', async() => {
         const { result } = renderHook(()=> useSearchPokemon('no exists'))

         await waitFor(
            () => expect( result.current.pokemon ).toBeNull(),
            { timeout: 2000 }
        );
     });
})