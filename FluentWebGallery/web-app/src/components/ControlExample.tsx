import { Fragment, Component, render } from "preact";
import { ProxyText } from "./Proxies/ProxyText";
import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

/*
"ControlExample.CSharpSource",
"ControlExample.FontFamily",
"ControlExample.HorizontalContentAlignment",
"ControlExample.Loaded",
"ControlExample.Margin",
"ControlExample.VerticalAlignment",
"ControlExample.WebViewHeight",
"ControlExample.XamlSource",
*/
export class ControlExample extends Component {
  constructor() {
    super();
  }

  useStyles = makeStyles({
    root: { marginTop: "24px" },
    nestedBg: {
      backgroundColor: tokens.colorNeutralBackground2,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "top",
      gap: "24px",
      padding: "16px",
      borderRadius: "8px",
    },
    header: {
      padding: "16px",
      fontSize: "24px",
      fontWeight: "bold",
    },
  });

  render() {
    const classes = this.useStyles();

    return (
      <div className={classes.root}>
        <ProxyText Text={this.props.HeaderText} Margin="0,0,0,8" />
        <div className={mergeClasses(classes.nestedBg, classes.row)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
