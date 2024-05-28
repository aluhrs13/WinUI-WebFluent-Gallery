import { Fragment, Component, render } from "preact";

import { makeStyles } from "@fluentui/react-components";

export class StackPanel extends Component {
  constructor() {
    super();
  }

  useStyles = makeStyles({
    row: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "top",
      gap: "10px",
    },
  });

  render() {
    const classes = this.useStyles();

    if (this.props.Orientation === "Horizontal") {
      return <div className={classes.row}>{this.props.children}</div>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}
