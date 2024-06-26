import { Fragment, Component, render } from "preact";
import { Image } from "@fluentui/react-components";

/*
"ProxyImage.Height",
"ProxyImage.Width",
*/
export class ProxyImage extends Component {
  constructor() {
    super();
  }

  render() {
    return <Image src={this.props.Source} />;
  }
}
