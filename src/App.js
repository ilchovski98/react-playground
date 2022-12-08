import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log('click!');
  }

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          Notify Me
          <GoBell />
        </Button>
      </div>

      <div>
        <Button secondary>
          Downlaod
          <GoCloudDownload />
        </Button>
      </div>

      <div>
        <Button success outline>
          SQL Injection
          <GoDatabase />
        </Button>
      </div>

      <div>
        <Button warning outline rounded>
          Click
        </Button>
      </div>

      <div>
        <Button danger>Button!5</Button>
      </div>
    </div>
  )
}

export default App;
