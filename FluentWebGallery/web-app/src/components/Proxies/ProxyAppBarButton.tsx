import { Fragment, Component, render } from "preact";
import { CompoundButton } from "@fluentui/react-components";

/*
"ProxyAppBarButton",
"ProxyAppBarButton.Click",
"ProxyAppBarButton.Command",
"ProxyAppBarButton.CommandParameter",
"ProxyAppBarButton.HorizontalAlignment",
"ProxyAppBarButton.Icon",
"ProxyAppBarButton.IsCompact",
"ProxyAppBarButton.IsTabStop",
"ProxyAppBarButton.Label",
"ProxyAppBarButton.ToolTipService.ToolTip",
"ProxyAppBarButton.Visibility",
"ProxyAppBarButton.aria-label",
*/
export class ProxyAppBarButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <CompoundButton />
      </Fragment>
    );
  }
}
