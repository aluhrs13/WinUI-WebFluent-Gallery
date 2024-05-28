import {
  Nav,
  NavCategory,
  NavCategoryItem,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import "./style.css";

export function SideNav() {
  return (
    <div id="Nav" style="width:320px">
      <Nav multiple={true}>
        <NavCategory value="Design_Guidance">
          <NavCategoryItem> Design guidance</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="Color">Color</NavSubItem>
            <NavSubItem value="Geometry">Geometry</NavSubItem>
            <NavSubItem value="Iconography">Iconography</NavSubItem>
            <NavSubItem value="Spacing">Spacing</NavSubItem>
            <NavSubItem value="Typography">Typography</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="AccessibilityItem">
          <NavCategoryItem>Accessibility</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="AccessibilityColorContrast">
              Color Contrast
            </NavSubItem>
            <NavSubItem value="AccessibilityKeyboard">
              Keyboard Support
            </NavSubItem>
            <NavSubItem value="AccessibilityScreenReader">
              Screen Reader Support
            </NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="MenusAndToolbars">
          <NavCategoryItem> Menus & toolbars</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="XamlUICommand">XamlUICommand</NavSubItem>
            <NavSubItem value="StandardUICommand">StandardUICommand</NavSubItem>
            <NavSubItem value="AppBarButton">AppBarButton</NavSubItem>
            <NavSubItem value="AppBarSeparator">AppBarSeparator</NavSubItem>
            <NavSubItem value="AppBarToggleButton">
              AppBarToggleButton
            </NavSubItem>
            <NavSubItem value="CommandBar">CommandBar</NavSubItem>
            <NavSubItem value="MenuBar">MenuBar</NavSubItem>
            <NavSubItem value="CommandBarFlyout">CommandBarFlyout</NavSubItem>
            <NavSubItem value="MenuFlyout">MenuFlyout</NavSubItem>
            <NavSubItem value="SwipeControl">SwipeControl</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Collections">
          <NavCategoryItem> Collections</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="FlipView">FlipView</NavSubItem>
            <NavSubItem value="GridView">GridView</NavSubItem>
            <NavSubItem value="ItemsView">ItemsView</NavSubItem>
            <NavSubItem value="ListBox">ListBox</NavSubItem>
            <NavSubItem value="ListView">ListView</NavSubItem>
            <NavSubItem value="PullToRefresh">PullToRefresh</NavSubItem>
            <NavSubItem value="TreeView">TreeView</NavSubItem>
            <NavSubItem value="DataGrid">DataGrid</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="DateAndTime">
          <NavCategoryItem> Date & time</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="CalendarDatePicker">
              CalendarDatePicker
            </NavSubItem>
            <NavSubItem value="CalendarView">CalendarView</NavSubItem>
            <NavSubItem value="DatePicker">DatePicker</NavSubItem>
            <NavSubItem value="TimePicker">TimePicker</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="BasicInput">
          <NavCategoryItem> Basic input</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="InputValidation">InputValidation</NavSubItem>
            <NavSubItem value="Button">Button</NavSubItem>
            <NavSubItem value="DropDownButton">DropDownButton</NavSubItem>
            <NavSubItem value="HyperlinkButton">HyperlinkButton</NavSubItem>
            <NavSubItem value="RepeatButton">RepeatButton</NavSubItem>
            <NavSubItem value="ToggleButton">ToggleButton</NavSubItem>
            <NavSubItem value="SplitButton">SplitButton</NavSubItem>
            <NavSubItem value="ToggleSplitButton">ToggleSplitButton</NavSubItem>
            <NavSubItem value="CheckBox">CheckBox</NavSubItem>
            <NavSubItem value="ColorPicker">ColorPicker</NavSubItem>
            <NavSubItem value="ComboBox">ComboBox</NavSubItem>
            <NavSubItem value="RadioButton">RadioButton</NavSubItem>
            <NavSubItem value="RatingControl">RatingControl</NavSubItem>
            <NavSubItem value="Slider">Slider</NavSubItem>
            <NavSubItem value="ToggleSwitch">ToggleSwitch</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="StatusAndInfo">
          <NavCategoryItem> Status & info</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="InfoBadge">InfoBadge</NavSubItem>
            <NavSubItem value="InfoBar">InfoBar</NavSubItem>
            <NavSubItem value="ProgressBar">ProgressBar</NavSubItem>
            <NavSubItem value="ProgressRing">ProgressRing</NavSubItem>
            <NavSubItem value="ToolTip">ToolTip</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="DialogsAndFlyouts">
          <NavCategoryItem> Dialogs & flyouts</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="ContentDialog">ContentDialog</NavSubItem>
            <NavSubItem value="Flyout">Flyout</NavSubItem>
            <NavSubItem value="TeachingTip">TeachingTip</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Scrolling">
          <NavCategoryItem> Scrolling</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="AnnotatedScrollBar">
              AnnotatedScrollBar
            </NavSubItem>
            <NavSubItem value="PipsPager">PipsPager</NavSubItem>
            <NavSubItem value="ScrollView">ScrollView</NavSubItem>
            <NavSubItem value="ScrollViewer">ScrollViewer</NavSubItem>
            <NavSubItem value="SemanticZoom">SemanticZoom</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Layout">
          <NavCategoryItem> Layout</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="Border">Border</NavSubItem>
            <NavSubItem value="Canvas">Canvas</NavSubItem>
            <NavSubItem value="Expander">Expander</NavSubItem>
            <NavSubItem value="ItemsRepeater">ItemsRepeater</NavSubItem>
            <NavSubItem value="Grid">Grid</NavSubItem>
            <NavSubItem value="RadioButtons">RadioButtons</NavSubItem>
            <NavSubItem value="RelativePanel">RelativePanel</NavSubItem>
            <NavSubItem value="SplitView">SplitView</NavSubItem>
            <NavSubItem value="StackPanel">StackPanel</NavSubItem>
            <NavSubItem value="VariableSizedWrapGrid">
              VariableSizedWrapGrid
            </NavSubItem>
            <NavSubItem value="Viewbox">Viewbox</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Navigation">
          <NavCategoryItem> Navigation</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="BreadcrumbBar">BreadcrumbBar</NavSubItem>
            <NavSubItem value="NavigationView">NavigationView</NavSubItem>
            <NavSubItem value="Pivot">Pivot</NavSubItem>
            <NavSubItem value="SelectorBar">SelectorBar</NavSubItem>
            <NavSubItem value="TabView">TabView</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Media">
          <NavCategoryItem> Media</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="AnimatedVisualPlayer">
              AnimatedVisualPlayer
            </NavSubItem>
            <NavSubItem value="CaptureElementPreview">
              Capture Element / Camera Preview
            </NavSubItem>
            <NavSubItem value="Image">Image</NavSubItem>
            <NavSubItem value="MapControl">MapControl</NavSubItem>
            <NavSubItem value="MediaPlayerElement">
              MediaPlayerElement
            </NavSubItem>
            <NavSubItem value="PersonPicture">PersonPicture</NavSubItem>
            <NavSubItem value="Sound">Sound</NavSubItem>
            <NavSubItem value="WebView2">WebView2</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Styles">
          <NavCategoryItem> Styles</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="Acrylic">AcrylicBrush</NavSubItem>
            <NavSubItem value="AnimatedIcon">AnimatedIcon</NavSubItem>
            <NavSubItem value="ColorPaletteResources">
              ColorPaletteResources
            </NavSubItem>
            <NavSubItem value="CompactSizing">Compact Sizing</NavSubItem>
            <NavSubItem value="IconElement">IconElement</NavSubItem>
            <NavSubItem value="RadialGradientBrush">
              RadialGradientBrush
            </NavSubItem>
            <NavSubItem value="RevealFocus">Reveal Focus</NavSubItem>
            <NavSubItem value="Shape">Shape</NavSubItem>
            <NavSubItem value="Line">Line</NavSubItem>
            <NavSubItem value="SystemBackdrops">
              System Backdrops (Mica/Acrylic)
            </NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Text">
          <NavCategoryItem> Text</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="AutoSuggestBox">AutoSuggestBox</NavSubItem>
            <NavSubItem value="NumberBox">NumberBox</NavSubItem>
            <NavSubItem value="PasswordBox">PasswordBox</NavSubItem>
            <NavSubItem value="RichEditBox">RichEditBox</NavSubItem>
            <NavSubItem value="RichTextBlock">RichTextBlock</NavSubItem>
            <NavSubItem value="TextBlock">TextBlock</NavSubItem>
            <NavSubItem value="TextBox">TextBox</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="Motion">
          <NavCategoryItem> Motion</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="ConnectedAnimation">
              Connected Animation
            </NavSubItem>
            <NavSubItem value="EasingFunction">Easing Functions</NavSubItem>
            <NavSubItem value="PageTransition">Page Transitions</NavSubItem>
            <NavSubItem value="ThemeTransition">Theme Transitions</NavSubItem>
            <NavSubItem value="XamlCompInterop">Animation interop</NavSubItem>
            <NavSubItem value="ImplicitTransition">
              Implicit Transitions
            </NavSubItem>
            <NavSubItem value="ParallaxView">ParallaxView</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="MultipleWindows">
          <NavCategoryItem> Windowing</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="CreateMultipleWindows">
              Multiple windows
            </NavSubItem>
            <NavSubItem value="TitleBar">TitleBar</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavCategory value="System">
          <NavCategoryItem> System</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="Clipboard">Clipboard</NavSubItem>
            <NavSubItem value="FilePicker">FilePicker</NavSubItem>
            <NavSubItem value="ScratchPad">Scratch Pad</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
      </Nav>
    </div>
  );
}
