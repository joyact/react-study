// 파라미터로 액션의 타입 (GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export default function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액션 타입 문자열 준비
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 새로운 함수 생성
  // ...rest를 사용하여 나머지 파라미터를 rest 배열에 담기
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); // 요청 시작
    try {
      const data = await promiseFn(...rest); // rest 배열을 spread로 넣어준다
      dispatch({ type: SUCCESS, data }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, error: e }); // 실패
    }
  }

  return actionHandler;
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
  // data를 가져와서 객체로 만듬
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
  // error를 가져와서 객체로 만듬
  loading: false,
  data: null,
  error: error,
});

// 세가지 액션을 처리하는 리듀서 생성
// type = 액션 타입, key = 리듀서에서 사용할 필드 이름 (user, users)
export function createAsyncHandler(type, key) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 리듀서 핸들러
  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }
  return handler;
}
