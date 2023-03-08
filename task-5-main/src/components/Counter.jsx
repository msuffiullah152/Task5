import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  changedNum: 1,
};
function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error();
    case 'updateChangedNum':
      return { ...state, changedNum: action.payload };
    case 'up':
      return { ...state, count: state.count + state.changedNum };
    case 'down':
      return { ...state, count: state.count - state.changedNum };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUp = () => {
    dispatch({ type: 'up' });
  };

  const handleDown = () => {
    dispatch({ type: 'down' });
  };

  function handleAddedChange(event) {
    dispatch({ type: 'updateChangedNum', payload: parseInt(event.target.value, 10) });
  }

  return (
    <div className="App">
      <pre className="rainbow box text-center">Value {state.count}</pre>
      <div className="flex gap center">
        <button className="button-box" onClick={handleUp}>
          <span className="huge">+</span>Increment by {state.changedNum}
        </button>
        <button className="button-box" onClick={handleDown}>
          <span className="huge">-</span>Decrement by {state.changedNum}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to Increment/Decrement by{' '}
        </label>
        <input
          className="input-box"
          onChange={handleUp}
          type="number"
          value={state.changedNum}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;
