import { Fragment, Component, render } from "preact";
import { Button } from "@fluentui/react-components";

export class ProxyButton extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.Content === undefined) {
      return <Button>{this.props.children}</Button>;
    } else {
      return <Button>{this.props.Content}</Button>;
    }
  }
}
