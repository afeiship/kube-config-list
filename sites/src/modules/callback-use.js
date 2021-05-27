import React, { useState, useCallback } from 'react';
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

const Child = React.memo(function ({ val, onChange }) {
  console.log('render child...');
  return <input value={val} onChange={onChange} />;
});

function ExmapleNoCallback() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const onChange1 = (evt) => {
    setVal1(evt.target.value);
  };

  const onChange2 = (evt) => {
    setVal2(evt.target.value);
  };

  console.log('render app');

  return (
    <C1>
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
    </C1>
  );
}

function ExampleUseCallback() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const onChange1 = useCallback(
    (evt) => {
      setVal1(evt.target.value);
    },
    [val1]
  );

  const onChange2 = useCallback(
    (evt) => {
      setVal2(evt.target.value);
    },
    [val2]
  );

  console.log('render app');

  return (
    <C2>
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
    </C2>
  );
}

export { ExmapleNoCallback, ExampleUseCallback };
