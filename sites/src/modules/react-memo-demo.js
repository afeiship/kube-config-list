import React, { useState } from 'react';
import styled from 'styled-components';

/**
 React.PureComponent通过props和state的浅对比来实现 shouldComponentUpate()。
 所以我们只需要往组件中传入需要显示在页面上的值就可以了。（ React.memo ）
 */

const Container = styled.div`
  width: 80%;
  border: 1px solid rgb(204, 204, 204);
  margin: 10px auto;
`;

const Item = styled.div`
  width: 100%;
  padding: 10px;
`;

const Child = (props) => {
  console.log('render..');
  return <Item>{props.value} - update-value1</Item>;
};

const Child1 = React.memo(
  (props) => {
    console.log('render..');
    return <Item>{props.value} - update-value1</Item>;
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);

export default (props) => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [checked, setChecked] = useState(false);
  const change1 = (e) => {
    console.log('change1');
    setVal1(e.target.value);
  };

  const change2 = (e) => {
    console.log('change2');
    setVal2(e.target.value);
  };

  console.log('checked:', checked);
  const ChildComponent = checked ? Child1 : Child;

  return (
    <Container>
      <ChildComponent value={val1} />
      <ChildComponent value={val2} />
      <Item>
        <label>
          React.memo used?:
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        </label>
      </Item>
      <Item>
        <input value={val1} type="text" onChange={change1} />
      </Item>
      <Item>
        <input value={val2} type="text" onChange={change2} />
      </Item>
    </Container>
  );
};
