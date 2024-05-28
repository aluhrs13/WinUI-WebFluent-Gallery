import { Component, render } from "preact";

export class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = { key: "Value" };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let value = new Date(this.state.key).toLocaleTimeString();
    return (
      <span>
        {value}
        {this.props.children}
      </span>
    );
  }
}
