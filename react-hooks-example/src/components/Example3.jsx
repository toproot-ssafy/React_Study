import React from "react";

// useState => count 에서
// useState => { count: 0 }; 로 변경하기
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );
  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}
