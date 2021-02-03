import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  color: Color;
  text: string;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

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
