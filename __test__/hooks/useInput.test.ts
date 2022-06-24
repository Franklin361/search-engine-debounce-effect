import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { useInput } from '../../src/hooks/useInput';

describe('📂 useInput.ts', () => {
    test('🟣 Should return a function and a string', async () => {
        const { result } = renderHook(() => useInput())

        expect(result.current.length).toBe(2);
        expect(typeof result.current[0]).toBe('string')
        expect(typeof result.current[1]).toBe('function')
    });

    test('🟣 Should change value', async () => {
        const { result } = renderHook(() => useInput())
        const onChange = result.current[1];

        const event = { target: { value: 'example' } } as ChangeEvent<HTMLInputElement>

        act(()=> {
            onChange(event)
        })

        expect(result.current[0]).toBe('example')

    });


})