import { Fragment, Component, render } from "preact";
import { Button } from "@fluentui/react-components";

import { translateMargin } from "../../utils";

export class ProxyButton extends Component {
  constructor() {
    super();
  }

  render() {
    let margin = null;
    if (this.props.Margin != null) {
      margin = translateMargin(this.props.Margin);
    }

    if (this.props.Content === undefined) {
      return (
        <Button style={margin != null ? { margin } : null}>
          {this.props.children}
        </Button>
      );
    } else {
      return (
        <Button style={margin != null ? { margin } : null}>
          {this.props.Content}
        </Button>
      );
    }
  }
}
