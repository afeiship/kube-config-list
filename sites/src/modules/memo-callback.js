import { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';

const C1 = styled.div`
  width: 80%;
  border: 1px solid rgb(204, 204, 204);
  margin: 20px auto;
  padding: 10px;
`;

const C2 = styled(C1)`
  border-color: red;
`;

const C3 = styled(C1)`
  border-color: blue;
`;

const exampleGetNum = (count) => {
  console.log('calc from Example.');
  return Array.from({ length: count * 100 }, (v, i) => i).reduce((a, b) => a + b);
};

// const exampleGetNumWithCallback = (count) => {
//   console.log('calc from Example use Callback.');
//   return Array.from({ length: count * 100 }, (v, i) => i).reduce((a, b) => a + b);
// };

export const Example = () => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  function getNum() {
    return exampleGetNum(count);
  }

  return (
    <C1>
      <h4>总和：{getNum()}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </C1>
  );
};

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  const num = useMemo(() => {
    console.log('calc from ExampleUseMemo.');
    return Array.from({ length: count * 100 }, (v, i) => i).reduce((a, b) => a + b);
  }, [count]);

  return (
    <C2>
      <h4>总和：{num}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </C2>
  );
};

// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
// 这个demo有问题，不能说明 callback的优点
export const ExampleUseCallback = () => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  const getNum = useCallback(() => {
    console.log('calc from ExampleUseCallback.');
    return Array.from({ length: count * 100 }, (v, i) => i).reduce((a, b) => a + b);
  }, [count]);

  // console.log(getNum);
  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

  return (
    <C3>
      <h4>总和：{getNum()}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </C3>
  );
};
