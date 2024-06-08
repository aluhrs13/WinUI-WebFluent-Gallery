import { Fragment, Component, render } from "preact";
import { ToolbarDivider } from "@fluentui/react-components";

export class ProxyToolbarDivider extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <ToolbarDivider />
      </Fragment>
    );
  }
}
