import { Fragment, Component, render } from "preact";
import { Checkbox } from "@fluentui/react-components";

export class ProxyCheckBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Checkbox label={this.props.Content} name={this.props.Name} />
      </Fragment>
    );
  }
}
