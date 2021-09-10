import React from "react";

class UnControlledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    console.log(this.inputRef.current.value);
  };
}

export default UnControlledComponent;
