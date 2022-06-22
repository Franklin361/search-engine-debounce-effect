import { Form } from "./components/Form"
import { useState } from 'react';

const App = () => {

  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value); 
  
  return (
    <div className="container">
      <h1> <span>Search Engine</span> whit <span>Debounce Effect</span> </h1>
      <Form {...{value, onChange}}/>
    </div>
  )
}
export default App