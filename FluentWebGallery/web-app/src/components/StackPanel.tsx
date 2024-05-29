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
      gap: "16px",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      alignItems: "top",
    },
  });

  render() {
    const classes = this.useStyles();

    if (this.props.Orientation === "Horizontal") {
      return <div className={classes.row}>{this.props.children}</div>;
    } else {
      return <div className={classes.column}>{this.props.children}</div>;
    }
  }
}
