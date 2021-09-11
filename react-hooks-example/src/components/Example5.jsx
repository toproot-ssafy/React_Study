import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWullUnmount의 역할을 함.
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      // 실행되기 전의 이전 count 값으로 먼저 실행하고 렌더 후에 위 consoel 실행
      console.log("cleanup by count", count);
    };
  }, [count]);

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
