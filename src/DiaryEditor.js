import React, { useState } from 'react';
import styled from 'styled-components';

function DiaryEditor({ onCreate, setData, data }) {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: '',
  });
  const test = [
    { name: '1점', value: 1 },
    { name: '2점', value: 2 },
    { name: '3점', value: 3 },
    { name: '4점', value: 4 },
    { name: '5점', value: 5 },
  ];

  const handelInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    onCreate(state.author, state.content, state.emotion);
  };

  return (
    <Container>
      <input name="author" placeholder="작성자" onChange={handelInputChange} />
      <textarea name="contents" placeholder="내용을 입력해주세요." onChange={handelInputChange} />
      <p>오늘의 감정점수:</p>
      <select>
        {test.map((num) => (
          <option key={num.index} value={num.value}>
            {num.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  textarea,
  button {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }
  textarea {
    height: 150px;
  }
  select {
    width: 50%;
    margin-bottom: 10px;
  }
`;
export default DiaryEditor;
