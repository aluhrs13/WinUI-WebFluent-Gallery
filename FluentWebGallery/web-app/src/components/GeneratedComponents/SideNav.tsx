import {
  Nav,
  NavCategory,
  NavCategoryItem,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";

import { makeStyles, shorthands } from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react-components";
import { NavigationRegular } from "@fluentui/react-icons";

const useClasses = makeStyles({
  icon24: { fontSize: "24px", margin: "8px" },
});

export function SideNav() {
  const classes = useClasses();

  return (
    <div
      id="sideNav"
    >
      <Nav multiple={true}>
        <NavigationRegular className={classes.icon24} />
        <SearchBox placeholder="Search" style="margin:8px" />

        <NavCategory value="MenusAndToolbars">
    <NavCategoryItem> Menus & toolbars</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="XamlUICommandPage" value="XamlUICommand">XamlUICommand</NavSubItem>
        <NavSubItem href="StandardUICommandPage" value="StandardUICommand">StandardUICommand</NavSubItem>
        <NavSubItem href="AppBarButtonPage" value="AppBarButton">AppBarButton</NavSubItem>
        <NavSubItem href="AppBarSeparatorPage" value="AppBarSeparator">AppBarSeparator</NavSubItem>
        <NavSubItem href="AppBarToggleButtonPage" value="AppBarToggleButton">AppBarToggleButton</NavSubItem>
        <NavSubItem href="CommandBarPage" value="CommandBar">CommandBar</NavSubItem>
        <NavSubItem href="MenuBarPage" value="MenuBar">MenuBar</NavSubItem>
        <NavSubItem href="CommandBarFlyoutPage" value="CommandBarFlyout">CommandBarFlyout</NavSubItem>
        <NavSubItem href="MenuFlyoutPage" value="MenuFlyout">MenuFlyout</NavSubItem>
        <NavSubItem href="SwipeControlPage" value="SwipeControl">SwipeControl</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="DateAndTime">
    <NavCategoryItem> Date & time</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="CalendarDatePickerPage" value="CalendarDatePicker">CalendarDatePicker</NavSubItem>
        <NavSubItem href="CalendarViewPage" value="CalendarView">CalendarView</NavSubItem>
        <NavSubItem href="DatePickerPage" value="DatePicker">DatePicker</NavSubItem>
        <NavSubItem href="TimePickerPage" value="TimePicker">TimePicker</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="BasicInput">
    <NavCategoryItem> Basic input</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="InputValidationPage" value="InputValidation">InputValidation</NavSubItem>
        <NavSubItem href="ButtonPage" value="Button">Button</NavSubItem>
        <NavSubItem href="DropDownButtonPage" value="DropDownButton">DropDownButton</NavSubItem>
        <NavSubItem href="HyperlinkButtonPage" value="HyperlinkButton">HyperlinkButton</NavSubItem>
        <NavSubItem href="RepeatButtonPage" value="RepeatButton">RepeatButton</NavSubItem>
        <NavSubItem href="ToggleButtonPage" value="ToggleButton">ToggleButton</NavSubItem>
        <NavSubItem href="SplitButtonPage" value="SplitButton">SplitButton</NavSubItem>
        <NavSubItem href="ToggleSplitButtonPage" value="ToggleSplitButton">ToggleSplitButton</NavSubItem>
        <NavSubItem href="CheckBoxPage" value="CheckBox">CheckBox</NavSubItem>
        <NavSubItem href="ColorPickerPage" value="ColorPicker">ColorPicker</NavSubItem>
        <NavSubItem href="ComboBoxPage" value="ComboBox">ComboBox</NavSubItem>
        <NavSubItem href="RadioButtonPage" value="RadioButton">RadioButton</NavSubItem>
        <NavSubItem href="RatingControlPage" value="RatingControl">RatingControl</NavSubItem>
        <NavSubItem href="SliderPage" value="Slider">Slider</NavSubItem>
        <NavSubItem href="ToggleSwitchPage" value="ToggleSwitch">ToggleSwitch</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="StatusAndInfo">
    <NavCategoryItem> Status & info</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="InfoBadgePage" value="InfoBadge">InfoBadge</NavSubItem>
        <NavSubItem href="InfoBarPage" value="InfoBar">InfoBar</NavSubItem>
        <NavSubItem href="ProgressBarPage" value="ProgressBar">ProgressBar</NavSubItem>
        <NavSubItem href="ProgressRingPage" value="ProgressRing">ProgressRing</NavSubItem>
        <NavSubItem href="ToolTipPage" value="ToolTip">ToolTip</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="DialogsAndFlyouts">
    <NavCategoryItem> Dialogs & flyouts</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="ContentDialogPage" value="ContentDialog">ContentDialog</NavSubItem>
        <NavSubItem href="FlyoutPage" value="Flyout">Flyout</NavSubItem>
        <NavSubItem href="TeachingTipPage" value="TeachingTip">TeachingTip</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="Navigation">
    <NavCategoryItem> Navigation</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="BreadcrumbBarPage" value="BreadcrumbBar">BreadcrumbBar</NavSubItem>
        <NavSubItem href="NavigationViewPage" value="NavigationView">NavigationView</NavSubItem>
        <NavSubItem href="PivotPage" value="Pivot">Pivot</NavSubItem>
        <NavSubItem href="SelectorBarPage" value="SelectorBar">SelectorBar</NavSubItem>
        <NavSubItem href="TabViewPage" value="TabView">TabView</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="Text">
    <NavCategoryItem> Text</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem href="AutoSuggestBoxPage" value="AutoSuggestBox">AutoSuggestBox</NavSubItem>
        <NavSubItem href="NumberBoxPage" value="NumberBox">NumberBox</NavSubItem>
        <NavSubItem href="PasswordBoxPage" value="PasswordBox">PasswordBox</NavSubItem>
        <NavSubItem href="RichEditBoxPage" value="RichEditBox">RichEditBox</NavSubItem>
        <NavSubItem href="RichTextBlockPage" value="RichTextBlock">RichTextBlock</NavSubItem>
        <NavSubItem href="TextBlockPage" value="TextBlock">TextBlock</NavSubItem>
        <NavSubItem href="TextBoxPage" value="TextBox">TextBox</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
      </Nav>
    </div>
  );
}