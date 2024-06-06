import { Fragment, Component, render } from "preact";
import { Combobox } from "@fluentui/react-components";

export class ProxyComboBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Combobox label={this.props.Content} name={this.props.Name} />
      </Fragment>
    );
  }
}
