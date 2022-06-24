import { render, screen } from '@testing-library/react';
import { Pokemon } from '../../src/components/Pokemon';
import { ResponseAPI } from '../../src/interface/pokemon';

describe('📂 Pokemon.tsx', () => {
    test('🟣 Should show pokemon successfully', () => {
        const pokemon = { name: 'ditto', sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' } } as ResponseAPI;

        render(<Pokemon pokemon={pokemon} />)

        expect(screen.getAllByText(pokemon.name).length).toBeGreaterThanOrEqual(1);
    });

    test('🟣 Should not show anything', () => {
        const pokemon = {} as ResponseAPI;

        const { container } = render(<Pokemon pokemon={pokemon} />)
        expect(container.childNodes.length).toBe(0)
    });

    test('🟣 Should show the message: "No results"', () => {
        const pokemon = null;

        render(<Pokemon pokemon={pokemon} />)

        expect(screen.getAllByText('No results')).toBeTruthy();
    });
})