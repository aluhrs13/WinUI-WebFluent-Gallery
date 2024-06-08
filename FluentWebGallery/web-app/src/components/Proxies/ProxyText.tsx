import { Fragment, Component, render } from "preact";
import { Text } from "@fluentui/react-components";
import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import { translateMargin } from "../../utils";

/*
"ProxyText.CharacterSpacing",
"ProxyText.FontStyle",
"ProxyText.FontWeight",
"ProxyText.Foreground",
"ProxyText.Grid.Column",
"ProxyText.Grid.Row",
"ProxyText.HorizontalAlignment",
"ProxyText.Padding",
"ProxyText.RelativePanel.AlignLeftWith",
"ProxyText.RelativePanel.AlignVerticalCenterWith",
"ProxyText.RelativePanel.RightOf",
"ProxyText.RelativePanelBelow",
"ProxyText.TextAlignment",
"ProxyText.Uid",
"ProxyText.VerticalAlignment",
"ProxyText.Visibility",
"ProxyText.Width",
*/
export class ProxyText extends Component {
  constructor() {
    super();
  }

  useStyles = makeStyles({
    root: {},
    header: { marginBottom: "16px" },
  });

  render() {
    const classes = this.useStyles();
    let margin = null;
    if (this.props.Margin != null) {
      margin = translateMargin(this.props.Margin);
    }

    return (
      <div className={classes.root} style={margin != null ? { margin } : null}>
        <Text>{this.props.Text}</Text>{" "}
      </div>
    );
  }
}
