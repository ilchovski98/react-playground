import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: 'change-value',
      payload: value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({
      type: 'add-value-to-count',
    });
  }

  const increment = () => {
    dispatch({
      type: 'increment-count'
    });
  }

  const decrement = () => {
    dispatch({
      type: 'decrement-count'
    });
  }

  return <Panel className="m-3">
    <h1 className="text-lg">Count is {state.count}</h1>

    <div className="flex flex-row">
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>

    <form onSubmit={event => handleSubmit(event)}>
      <label>Add a lot!</label>

      <input
        type="number"
        className="p-1 m-3 bg-gray-50 border border-gray-300"
        value={state.valueToAdd || ""}
        onChange={event => handleChange(event)}
      />

      <Button>Add it!</Button>
    </form>
  </Panel>
}

export default CounterPage;
