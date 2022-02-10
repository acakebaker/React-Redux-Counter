import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);

  return (
    <div className='content'>
      <h2>Count: {counter}</h2>
      <button className='button' onClick={() => dispatch(increment())}>Increment</button>
      <button className='button' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='button' onClick={() => dispatch(reset())}>Reset</button>
      {isLogged ? <p>Logged In</p> : null}
    </div>
  );
}

export default App;
