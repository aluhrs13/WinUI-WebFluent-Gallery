import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

import { Home } from "./pages/Home/index.jsx";

import { XamlUICommandPage } from "./pages/GeneratedPages/XamlUICommandPage";
import { StandardUICommandPage } from "./pages/GeneratedPages/StandardUICommandPage";
import { AppBarButtonPage } from "./pages/GeneratedPages/AppBarButtonPage";
import { AppBarSeparatorPage } from "./pages/GeneratedPages/AppBarSeparatorPage";
import { AppBarToggleButtonPage } from "./pages/GeneratedPages/AppBarToggleButtonPage";
import { CommandBarPage } from "./pages/GeneratedPages/CommandBarPage";
import { MenuBarPage } from "./pages/GeneratedPages/MenuBarPage";
import { CommandBarFlyoutPage } from "./pages/GeneratedPages/CommandBarFlyoutPage";
import { MenuFlyoutPage } from "./pages/GeneratedPages/MenuFlyoutPage";
import { SwipeControlPage } from "./pages/GeneratedPages/SwipeControlPage";
import { CalendarDatePickerPage } from "./pages/GeneratedPages/CalendarDatePickerPage";
import { CalendarViewPage } from "./pages/GeneratedPages/CalendarViewPage";
import { DatePickerPage } from "./pages/GeneratedPages/DatePickerPage";
import { TimePickerPage } from "./pages/GeneratedPages/TimePickerPage";
import { InputValidationPage } from "./pages/GeneratedPages/InputValidationPage";
import { ButtonPage } from "./pages/GeneratedPages/ButtonPage";
import { DropDownButtonPage } from "./pages/GeneratedPages/DropDownButtonPage";
import { HyperlinkButtonPage } from "./pages/GeneratedPages/HyperlinkButtonPage";
import { RepeatButtonPage } from "./pages/GeneratedPages/RepeatButtonPage";
import { ToggleButtonPage } from "./pages/GeneratedPages/ToggleButtonPage";
import { SplitButtonPage } from "./pages/GeneratedPages/SplitButtonPage";
import { ToggleSplitButtonPage } from "./pages/GeneratedPages/ToggleSplitButtonPage";
import { CheckBoxPage } from "./pages/GeneratedPages/CheckBoxPage";
import { ColorPickerPage } from "./pages/GeneratedPages/ColorPickerPage";
import { ComboBoxPage } from "./pages/GeneratedPages/ComboBoxPage";
import { RadioButtonPage } from "./pages/GeneratedPages/RadioButtonPage";
import { RatingControlPage } from "./pages/GeneratedPages/RatingControlPage";
import { SliderPage } from "./pages/GeneratedPages/SliderPage";
import { ToggleSwitchPage } from "./pages/GeneratedPages/ToggleSwitchPage";
import { InfoBadgePage } from "./pages/GeneratedPages/InfoBadgePage";
import { InfoBarPage } from "./pages/GeneratedPages/InfoBarPage";
import { ProgressBarPage } from "./pages/GeneratedPages/ProgressBarPage";
import { ProgressRingPage } from "./pages/GeneratedPages/ProgressRingPage";
import { ToolTipPage } from "./pages/GeneratedPages/ToolTipPage";
import { ContentDialogPage } from "./pages/GeneratedPages/ContentDialogPage";
import { FlyoutPage } from "./pages/GeneratedPages/FlyoutPage";
import { TeachingTipPage } from "./pages/GeneratedPages/TeachingTipPage";
import { BreadcrumbBarPage } from "./pages/GeneratedPages/BreadcrumbBarPage";
import { NavigationViewPage } from "./pages/GeneratedPages/NavigationViewPage";
import { PivotPage } from "./pages/GeneratedPages/PivotPage";
import { SelectorBarPage } from "./pages/GeneratedPages/SelectorBarPage";
import { TabViewPage } from "./pages/GeneratedPages/TabViewPage";
import { AutoSuggestBoxPage } from "./pages/GeneratedPages/AutoSuggestBoxPage";
import { NumberBoxPage } from "./pages/GeneratedPages/NumberBoxPage";
import { PasswordBoxPage } from "./pages/GeneratedPages/PasswordBoxPage";
import { RichEditBoxPage } from "./pages/GeneratedPages/RichEditBoxPage";
import { RichTextBlockPage } from "./pages/GeneratedPages/RichTextBlockPage";
import { TextBlockPage } from "./pages/GeneratedPages/TextBlockPage";
import { TextBoxPage } from "./pages/GeneratedPages/TextBoxPage";


import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <FluentProvider theme={webDarkTheme}>
        <main>
          <Router>
            <Route Default path="/" component={Home} />
            <Route Default path="/XamlUICommandPage" component={ XamlUICommandPage } />
            <Route Default path="/StandardUICommandPage" component={ StandardUICommandPage } />
            <Route Default path="/AppBarButtonPage" component={ AppBarButtonPage } />
            <Route Default path="/AppBarSeparatorPage" component={ AppBarSeparatorPage } />
            <Route Default path="/AppBarToggleButtonPage" component={ AppBarToggleButtonPage } />
            <Route Default path="/CommandBarPage" component={ CommandBarPage } />
            <Route Default path="/MenuBarPage" component={ MenuBarPage } />
            <Route Default path="/CommandBarFlyoutPage" component={ CommandBarFlyoutPage } />
            <Route Default path="/MenuFlyoutPage" component={ MenuFlyoutPage } />
            <Route Default path="/SwipeControlPage" component={ SwipeControlPage } />
            <Route Default path="/CalendarDatePickerPage" component={ CalendarDatePickerPage } />
            <Route Default path="/CalendarViewPage" component={ CalendarViewPage } />
            <Route Default path="/DatePickerPage" component={ DatePickerPage } />
            <Route Default path="/TimePickerPage" component={ TimePickerPage } />
            <Route Default path="/InputValidationPage" component={ InputValidationPage } />
            <Route Default path="/ButtonPage" component={ ButtonPage } />
            <Route Default path="/DropDownButtonPage" component={ DropDownButtonPage } />
            <Route Default path="/HyperlinkButtonPage" component={ HyperlinkButtonPage } />
            <Route Default path="/RepeatButtonPage" component={ RepeatButtonPage } />
            <Route Default path="/ToggleButtonPage" component={ ToggleButtonPage } />
            <Route Default path="/SplitButtonPage" component={ SplitButtonPage } />
            <Route Default path="/ToggleSplitButtonPage" component={ ToggleSplitButtonPage } />
            <Route Default path="/CheckBoxPage" component={ CheckBoxPage } />
            <Route Default path="/ColorPickerPage" component={ ColorPickerPage } />
            <Route Default path="/ComboBoxPage" component={ ComboBoxPage } />
            <Route Default path="/RadioButtonPage" component={ RadioButtonPage } />
            <Route Default path="/RatingControlPage" component={ RatingControlPage } />
            <Route Default path="/SliderPage" component={ SliderPage } />
            <Route Default path="/ToggleSwitchPage" component={ ToggleSwitchPage } />
            <Route Default path="/InfoBadgePage" component={ InfoBadgePage } />
            <Route Default path="/InfoBarPage" component={ InfoBarPage } />
            <Route Default path="/ProgressBarPage" component={ ProgressBarPage } />
            <Route Default path="/ProgressRingPage" component={ ProgressRingPage } />
            <Route Default path="/ToolTipPage" component={ ToolTipPage } />
            <Route Default path="/ContentDialogPage" component={ ContentDialogPage } />
            <Route Default path="/FlyoutPage" component={ FlyoutPage } />
            <Route Default path="/TeachingTipPage" component={ TeachingTipPage } />
            <Route Default path="/BreadcrumbBarPage" component={ BreadcrumbBarPage } />
            <Route Default path="/NavigationViewPage" component={ NavigationViewPage } />
            <Route Default path="/PivotPage" component={ PivotPage } />
            <Route Default path="/SelectorBarPage" component={ SelectorBarPage } />
            <Route Default path="/TabViewPage" component={ TabViewPage } />
            <Route Default path="/AutoSuggestBoxPage" component={ AutoSuggestBoxPage } />
            <Route Default path="/NumberBoxPage" component={ NumberBoxPage } />
            <Route Default path="/PasswordBoxPage" component={ PasswordBoxPage } />
            <Route Default path="/RichEditBoxPage" component={ RichEditBoxPage } />
            <Route Default path="/RichTextBlockPage" component={ RichTextBlockPage } />
            <Route Default path="/TextBlockPage" component={ TextBlockPage } />
            <Route Default path="/TextBoxPage" component={ TextBoxPage } />
            
          </Router>
        </main>
      </FluentProvider>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}