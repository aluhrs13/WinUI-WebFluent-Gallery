import { Fragment, Component, render } from "preact";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { Field, makeStyles } from "@fluentui/react-components";

export class ProxyDatePicker extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Field label={this.props.Header}>
        <DatePicker placeholder={this.props.PlaceholderText} isMonthPickerVisible={false} />
      </Field>
    );
  }
}
