import { Component, render } from "preact";
import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import { StackPanel } from "../../components/StackPanel";
import { ControlExample } from "../../components/ControlExample";

import { ProxyDatePicker } from "../../components/Proxies/ProxyDatePicker";


export class CalendarDatePickerPage extends Component {
  constructor() {
    super();
    this.state = { key: "Value" };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  useStyles = makeStyles({});

  render() {
    const classes = this.useStyles();

    return (<div class='page'>
    <StackPanel>
        <ControlExample HeaderText="CalendarDatePicker with a header and placeholder text." aria-label="Example1">
            <div class="Example">
                <ProxyDatePicker PlaceholderText="Pick a date" Header="Calendar"/>
            </div>
            <div class="XAML">
                <pre>
                    &lt;CalendarDatePicker PlaceholderText="Pick a date" Header="Calendar" /&gt;
                </pre>
            </div>
        </ControlExample>
    </StackPanel>
</div>);
  }
}