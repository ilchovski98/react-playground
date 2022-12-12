import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import Route from './components/Route';
import Link from './components/Link';

function App() {
  return (
    <>
      Navigation:
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/button">Button</Link>

      <Route path="/">
        <h1>Welcome</h1>
      </Route>

      <Route path="/dropdown">
        <DropdownPage />
      </Route>

      <Route path="/accordion">
        <AccordionPage />
      </Route>

      <Route path="/button">
        <ButtonPage />
      </Route>
    </>
  );
}

export default App;
