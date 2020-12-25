import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import InputSample2 from './inputSample2';

function App() {
  return (
    <>
      <Wrapper>
        <b>props를 통해 컴포넌트에게 값 전달하기, 조건부 렌더링</b>
        <Hello name='react' color='red' isSpecial={true} />
        <Hello color='pink' />
      </Wrapper>
      <hr />
      <b>useState를 통해 컴포넌트에서 바귀는 값 관리하기</b>
      <Counter />
      <hr />
      <b>input 상태 관리하기</b>
      <InputSample />
      <hr />
      <b>여러개의 input 상태 관리하기, useRef로 특정 DOM 선택하기</b>
      <InputSample2 />
      <hr />
      <b></b>
    </>
  );
}
export default App;
