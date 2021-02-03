import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// 필요한 타입들을 미리 선언
type Color = 'red' | 'orange' | 'yellow';

// 상태를 위한 타입
type State = {
  count: number;
  color: Color;
  text: string;
  isGood: boolean;
};

// 모든 액션을 위한 타입
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'TOGGLE_GOOD' };

// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음)
// Action 타입을 Dispatch의 Generics에 할당
type DispatchType = Dispatch<Action>;

// context 만들기
const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<DispatchType | null>(null);

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

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// state와 dispatch를 쉽게 사용하기 위한 커스텀 Hooks
export function useStateContext() {
  const state = useContext(StateContext);
  // 에러 처리를 하지않으면 리턴값이 'State | null'로 null을 함께 반환한다
  if (!state) throw new Error('Cannot find Provider'); // 유효하지 않으면 에러
  return state;
}

export function useDispatchContext() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider'); // 유효하지 않으면 에러
  return dispatch;
}
