import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

const C1 = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ccc;
`;
// 用于记录 getData 调用次数
let count = 0;

function App() {
  const [val, setVal] = useState('');

  function getData() {
    setTimeout(() => {
      setVal('new data comming' + count);
      console.log('newData');
      count++;
    }, 500);
  }

  const optGetData = useCallback(getData, []);

  return <Child val={val} getData={optGetData} />;
}

function Child({ val, getData }) {
  useEffect(() => {
    getData();
  }, [getData]);

  return <C1>{val}</C1>;
}

export default App;
