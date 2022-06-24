import { render } from '@testing-library/react';
import App from '../src/App';

describe('📂 App.tsx', () => {
    test('🟣 Should show title', async () => {
        const { container } = render(<App />)
        expect(container.textContent).toContain('Search Engine')
    });
    test('🟣 Should match the snapshot', async () => {
        const { container } = render(<App />)
        expect(container).toMatchSnapshot();
    });

})