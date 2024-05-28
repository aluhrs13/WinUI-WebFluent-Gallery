import { Fragment, Component, render } from "preact";

import { makeStyles } from "@fluentui/react-components";

export class ControlExample extends Component {
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

    return (
      <div>
        <h1>{this.props.HeaderText}</h1>
        <div className={classes.row}>{this.props.children}</div>
      </div>
    );
  }
}
