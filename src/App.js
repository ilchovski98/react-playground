import ButtonPage from './pages/ButtonPage';
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'asdf',
      label: 'Do you know React?',
      content: 'Of course! I have been doing it for 3 years now!'
    },
    {
      id: 'rewg',
      label: 'Is web3 the future?',
      content: 'Are banks printing money? Do we need water in order to survive? Is Kobe the best basketball player to ever live?'
    },
    {
      id: 'poqkwe',
      label: 'Who are you?',
      content: 'Ambitious, curious, good individual. :)'
    }
  ];
  return (
    <Accordion items={items} />
  )
}

export default App;
