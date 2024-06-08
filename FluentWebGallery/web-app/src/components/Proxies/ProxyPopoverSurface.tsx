import { Fragment, Component, render } from "preact";
import { PopoverSurface } from "@fluentui/react-components";

export class ProxyPopoverSurface extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <PopoverSurface />
      </Fragment>
    );
  }
}
