import { Fragment, Component, render } from "preact";
import { Text } from "@fluentui/react-components";
import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import { translateMargin } from "../../utils";

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
