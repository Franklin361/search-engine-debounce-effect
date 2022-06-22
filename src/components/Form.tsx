import { useState } from 'react';

interface Props {
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({ onChange, value }:Props) => {

  return (
    <>
        <label htmlFor="pokemon">Name of a Pokemon</label>
        <input 
          type="text" 
          id="pokemon" 
          placeholder="Example: Pikachu" 
          value={value}
          onChange={onChange}
        />
    </>
  )
}