import { Fragment, Component, render } from "preact";
import { Combobox } from "@fluentui/react-components";

/*
"ProxyComboBox.Grid.Column",
"ProxyComboBox.HorizontalAlignment",
"ProxyComboBox.Margin",
"ProxyComboBox.SelectedIndex",
"ProxyComboBox.SelectedValue",
"ProxyComboBox.Uid",
"ProxyComboBox.VerticalAlignment",
*/
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
