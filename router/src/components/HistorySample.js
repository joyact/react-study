import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  }; // 뒤로가기

  const goHome = () => {
    history.push('/');
  }; // 홈으로(특정경로로 이동)

  const replaced = () => {
    history.replace('/');
  }; // 경로 덮어씀 (history 삭제)

  useEffect(() => {
    //마운트될 때 실행
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');

    //언마운트 시 실행
    return () => {
      unblock(); // 이탈방지
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaced}>홈(REPLACE)</button>
    </div>
  );
}

export default HistorySample;
