import { Fragment, Component, render } from "preact";
import { Calendar } from "@fluentui/react-calendar-compat";

export class ProxyCalendar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Calendar />
      </Fragment>
    );
  }
}
