import React from 'react';
import {
  useDispatchContext,
  useStateContext,
} from '../contexts/ContextExample';

function ReducerExample() {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  const setCount = () =>
    dispatch({ type: 'SET_COUNT', count: state.count + 1 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
  const setToggle = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <>
      <div>
        <p>
          <code>count:</code>
          {state.count}
        </p>
        <p>
          <code>text:</code>
          {state.text}
        </p>
        <p>
          <code>color:</code>
          {state.color}
        </p>
        <p>
          <code>isGood:</code>
          {state.isGood ? 'true' : 'false'}
        </p>
      </div>
      <div>
        <button onClick={setCount}>setCount</button>
        <button onClick={setText}>setText</button>
        <button onClick={setColor}>setColor</button>
        <button onClick={setToggle}>setToggle</button>
      </div>
    </>
  );
}

export default ReducerExample;
