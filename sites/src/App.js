import { Example, ExampleUseMemo } from './modules/memo-callback';
import { ExmapleNoCallback, ExampleUseCallback } from './modules/callback-use';
import ReactMemoDemo from './modules/react-memo-demo';

export default (props) => {
  return (
    <div>
      <Example />
      <ExampleUseMemo />
      <ExmapleNoCallback />
      <ExampleUseCallback />
      <ReactMemoDemo />
    </div>
  );
};
