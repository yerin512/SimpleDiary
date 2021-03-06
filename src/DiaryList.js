import React from 'react';
import styled from 'styled-components';

function DiaryList({ data }) {
  console.log(data);

  return (
    <Container>
      <h3>일기 리스트</h3>
      {/* <p>{data?.length()}개의 일기가 있습니다.</p> */}
      {/* {data?.map((item) => (
        <div className="contents_box" key={item.id}>
          <p>
            작성자: {item.author} | 감정점수 : {item.emotion}
          </p>
          <p>{item.create_date}일</p>
          <div>{item.content}</div>
          <button>삭제하기</button>
          <button>수정하기</button>
        </div>
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .contents_box {
    width: 100%;
    background-color: #f1f1f1;
    margin-bottom: 10px;
  }
`;

export default DiaryList;
