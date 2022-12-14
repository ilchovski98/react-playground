import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import Route from './components/Route';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />

      <Route path="/">
        <DropdownPage />
      </Route>

      <Route path="/accordion">
        <AccordionPage />
      </Route>

      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </>
  );
}

export default App;
