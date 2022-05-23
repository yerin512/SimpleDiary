import styled from 'styled-components';
import DiaryEditor from './DiaryEditor';

function App() {
  return (
    <div className="App">
      <Container>
        <h2>오늘의 일기</h2>
        <DiaryEditor />
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
