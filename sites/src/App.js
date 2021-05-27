import { Example, ExampleUseMemo } from './modules/memo-callback';
import { ExmapleNoCallback, ExampleUseCallback } from './modules/callback-use';
import ReactMemoDemo from './modules/react-memo-demo';
import CallbackUse2 from './modules/callback-use2';

export default (props) => {
  return (
    <div>
      <Example />
      <ExampleUseMemo />
      <ExmapleNoCallback />
      <ExampleUseCallback />
      <ReactMemoDemo />
      <CallbackUse2 />
    </div>
  );
};
