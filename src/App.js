import { useRef, useState } from 'react';
import styled from 'styled-components';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newData = {
      author,
      content,
      emotion,
      id: dataId.current,
      create_date,
    };
    dataId.current += 1;
    setData({ ...data, ...newData });
  };
  return (
    <div className="App">
      <Container>
        <h2>오늘의 일기</h2>
        <DiaryEditor onCreate={onCreate} data={data} setData={setData} />
        <DiaryList data={data} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
