import { createRef, useRef, useState } from "react";

export default function Example9() {
  const [value, setValue] = useState("");
  // render 될 때마다 새로 레퍼런스를 만들어서 넣어줌
  const input1Ref = createRef();
  // render를 돌아도 계속 유지, 첫번째 최초 렌더시에는 undefined
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
