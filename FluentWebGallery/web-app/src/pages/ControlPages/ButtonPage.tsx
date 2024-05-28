import { Component, render } from "preact";
import { StackPanel } from "../../components/StackPanel";
import { ControlExample } from "../../components/ControlExample";

import { ProxyCheckBox } from "../../components/Proxies/ProxyCheckBox";
import { ProxyButton } from "../../components/Proxies/ProxyButton";
import { ProxyText } from "../../components/Proxies/ProxyText";

import { Button } from "@fluentui/react-components";
import { Text } from "@fluentui/react-components";
import { Image } from "@fluentui/react-components";

export class ButtonPage extends Component {
  constructor() {
    super();
    this.state = { key: "Value" };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <StackPanel>
        <ControlExample
          Name="Example1"
          HeaderText="A simple Button with text content."
        >
          <div class="Example">
            <ProxyButton
              Name="Button1"
              Content="Standard XAML button"
              Click="Button_Click"
              AutomationName="Standard XAML"
              IsEnabled="{x:Bind DisableButton1.IsChecked.Value.Equals(x:False), Mode=OneWay}"
            />
          </div>
          <div class="Output">
            <ProxyText
              Name="Control1Output"
              FontFamily="Global User Interface"
            />
          </div>
          <div class="Options">
            <StackPanel>
              <ProxyCheckBox Name="DisableButton1" Content="Disable button" />
            </StackPanel>
          </div>
        </ControlExample>

        <ControlExample
          Name="Example2"
          HeaderText="A Button with graphical content."
        >
          <div class="Example">
            <StackPanel Orientation="Horizontal">
              <ProxyButton
                Name="Button2"
                Click="Button_Click"
                Width="50"
                Height="50"
                AutomationName="Pie"
              >
                <Image Source="/Assets/Slices.png" AutomationName="Slice" />
              </ProxyButton>
            </StackPanel>
          </div>
          <div class="Output">
            <ProxyText Name="Control2Output" />
          </div>
        </ControlExample>
        <ControlExample HeaderText="Wrapping Buttons with large content">
          <StackPanel>
            <ProxyText
              Text="The following buttons' content may get clipped if we don't pay careful attention to their layout containers."
              Margin="0,0,0,8"
              TextWrapping="Wrap"
            />
            <ProxyText
              Text="One option to mitigate clipped content is to place Buttons underneath each other, allowing for more space to grow horizontally:"
              Margin="0,0,0,8"
              TextWrapping="Wrap"
            />
            <ProxyButton HorizontalAlignment="Stretch" Margin="0,0,0,5">
              This is some text that is too long and will get cut off
            </ProxyButton>
            <ProxyButton HorizontalAlignment="Stretch">
              This is another text that would result in being cut off
            </ProxyButton>

            <ProxyText
              Text="Another option is to explicitly wrap the Button's content"
              Margin="0,8,0,8"
            />
            <StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
              <ProxyButton MaxWidth="240" Margin="0,0,8,0">
                <ProxyText
                  Text="This is some text that is too long and will get cut off without wrapping"
                  TextWrapping="WrapWholeWords"
                />
              </ProxyButton>
              <ProxyButton MaxWidth="240">
                <ProxyText
                  Text="This is another text that would result in being cut off without wrapping"
                  TextWrapping="WrapWholeWords"
                />
              </ProxyButton>
            </StackPanel>
          </StackPanel>
        </ControlExample>

        <ControlExample HeaderText="Accent style applied to Button.">
          <div class="Example">
            <ProxyButton
              Style="{StaticResource AccentButtonStyle}"
              Content="Accent style button"
              AutomationName="Accent style"
            />
          </div>
        </ControlExample>
      </StackPanel>
    );
  }
}
