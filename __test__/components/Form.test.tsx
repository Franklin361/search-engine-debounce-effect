import { screen, render, fireEvent } from '@testing-library/react';
import { Form } from '../../src/components/Form';

describe('📂 Form.tsx', () => {
   test('🟣 Should show the form successfully', () => {
      const props = {
         onChange: jest.fn(),
         value: '123'
      }
      render(<Form {...props} />)

      expect(screen.findByLabelText('Name or ID of a Pokemon')).toBeTruthy();
      expect(screen.getByRole('textbox').getAttribute('value')).toBe(props.value);
   });

   test('🟣 Should change the input value', () => {
      const props = {
         onChange: jest.fn(),
         value: ''
      }
      const { rerender} = render(<Form {...props} />)
      props.value = 'example';
      rerender(<Form {...props} />)

      const input = screen.getByRole('textbox') as HTMLInputElement;
      
      expect(input.value).toBe('example');
   });
})