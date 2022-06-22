import { Form } from "./components/Form"
import { useEffect, useState } from 'react';

const delay = 1000; // 1s

const App = () => {

  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => clearTimeout(timer)
  }, [value, delay]);



  return (
    <div className="container">
      <h1> <span>Search Engine</span> whit <span>Debounce Effect</span> </h1>
      <Form {...{ value, onChange }} />
    </div>
  )
}
export default App