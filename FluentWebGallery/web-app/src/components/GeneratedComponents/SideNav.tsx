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
        <NavSubItem value="XamlUICommand">XamlUICommand</NavSubItem>
        <NavSubItem value="StandardUICommand">StandardUICommand</NavSubItem>
        <NavSubItem value="AppBarButton">AppBarButton</NavSubItem>
        <NavSubItem value="AppBarSeparator">AppBarSeparator</NavSubItem>
        <NavSubItem value="AppBarToggleButton">AppBarToggleButton</NavSubItem>
        <NavSubItem value="CommandBar">CommandBar</NavSubItem>
        <NavSubItem value="MenuBar">MenuBar</NavSubItem>
        <NavSubItem value="CommandBarFlyout">CommandBarFlyout</NavSubItem>
        <NavSubItem value="MenuFlyout">MenuFlyout</NavSubItem>
        <NavSubItem value="SwipeControl">SwipeControl</NavSubItem>
    </NavSubItemGroup>
</NavCategory>
<NavCategory value="DateAndTime">
    <NavCategoryItem> Date & time</NavCategoryItem>
    <NavSubItemGroup>
        <NavSubItem value="CalendarDatePicker">CalendarDatePicker</NavSubItem>
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
      </Nav>
    </div>
  );
}