import { useState } from 'react';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (selection) => {
    setSelection(selection);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ];

  return (
    <>
      <AccordionPage />
      <ButtonPage />
      <span>-------------------------------------</span>

      <div className="flex">
        <Dropdown options={options} value={selection} onChange={handleSelection} />
      </div>
    </>
  )
}

export default App;
