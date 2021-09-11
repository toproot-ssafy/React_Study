import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me!</button>
    </div>
  );
  function click() {
    setCount(count + 1); // state의 값을 변경하고 전체 다시 렌더되게 하는 역할.
  }
}
