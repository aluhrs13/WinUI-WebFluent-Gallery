import { Fragment, Component, render } from "preact";
import { SearchBox } from "@fluentui/react-components";

export class ProxySearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <SearchBox />
      </Fragment>
    );
  }
}
