import { renderHook, waitFor, act } from '@testing-library/react';
import { useDebounce } from '../../src/hooks/useDebounce';

describe('📂 useDebounce.ts', () => {
    test('🟣 Should its initial value be "ditto"', async () => {
        const initialValue = 'ditto'
        const { result } = renderHook(() => useDebounce(initialValue));
        expect(result.current).toBe(initialValue)
    });

    test('🟣 Should change value after 500ms ', async () => {

        const { rerender, result } = renderHook(({ value }) => useDebounce(value), {
            initialProps: { value: '' }
        });


        const newValue = 'ditto'
        rerender({ value: newValue })

        await waitFor(() => {
            expect(result.current).toBe(newValue);
        }, { timeout: 550 });

    });
})