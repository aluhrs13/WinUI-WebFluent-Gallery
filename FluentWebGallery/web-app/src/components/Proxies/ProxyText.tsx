import { Fragment, Component, render } from "preact";
import { Text } from "@fluentui/react-components";

export class ProxyText extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Text>{this.props.Text}</Text>
      </div>
    );
  }
}
