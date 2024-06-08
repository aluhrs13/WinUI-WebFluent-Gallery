import { Fragment, Component, render } from "preact";
import { Breadcrumb } from "@fluentui/react-components";
import { Children } from "preact/compat";

export class ProxyBreadcrumb extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb>{this.props.children}</Breadcrumb>
      </Fragment>
    );
  }
}
