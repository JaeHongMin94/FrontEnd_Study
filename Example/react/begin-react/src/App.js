import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import InputSample2 from './inputSample2';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'JaeHong',
      email: 'moonshin123@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Min',
      email: 'test123@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'react',
      email: 'react123@naver.com',
      active: false,
    },
    {
      id: 4,
      username: 'reactttt',
      email: 'reactttt123@naver.com',
      active: false,
    },
  ]);

  const nextId = useRef(5);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

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
      <b>배열 렌더링하기, useRef로 컴포넌트 안의 변수 만들기</b>
      <br />
      <b>배열에 항목 추가하기, 배열에 항목 제거하기, 배열에 항목 수정하기</b>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
export default App;
