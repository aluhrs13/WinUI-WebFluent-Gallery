# Define element replacements
ELEMENT_MAPPING = {
    'Page': {'new_tag': 'div', 'attributes': {'class': 'Page'}},

    'Bold': {'new_tag': 'strong', 'attributes': {}},
    'Italic': {'new_tag': 'i', 'attributes': {}},
    'Underline': {'new_tag': 'u', 'attributes': {}},
    'String': {'new_tag': 'pre', 'attributes': {}},

    'CheckBox': {'new_tag': 'ProxyCheckBox', 'attributes': {}},
    'Button': {'new_tag': 'ProxyButton', 'attributes': {}},
    'TextBlock': {'new_tag': 'ProxyText', 'attributes': {}},
    'Image': {'new_tag': 'ProxyImage', 'attributes': {}},
    'ComboBox': {'new_tag': 'ProxyComboBox', 'attributes': {}},
    'Rectangle': {'new_tag': 'ProxyRectangle', 'attributes': {}},
    'CalendarDatePicker': {'new_tag': 'ProxyDatePicker', 'attributes': {}},
    'AppBarButton': {'new_tag': 'ProxyAppBarButton', 'attributes': {}},
    'AppBarButton.Content': {'new_tag': 'div', 'attributes': {'class': 'AppBarButtonContent TODO'}},
    'AppBarButton.Icon': {'new_tag': 'div', 'attributes': {'class': 'AppBarButtonIcon TODO'}},


    'ControlExample': {'new_tag': 'ControlExample', 'attributes': {}},
    'ControlExample.Substitutions': {'new_tag': 'div', 'attributes': {'class': 'Substitutions'}},
    'ControlExample.Output': {'new_tag': 'div', 'attributes': {'class': 'Output'}},
    'ControlExample.Example': {'new_tag': 'div', 'attributes': {'class': 'Example'}},
    'ControlExample.Options': {'new_tag': 'div', 'attributes': {'class': 'Options'}},
    'ControlExample.Xaml': {'new_tag': 'div', 'attributes': {'class': 'XAML'}},
    'ControlExampleSubstitution': {'new_tag': 'div', 'attributes': {'class': 'TODO'}},

    'AcrylicBrush': {'new_tag': 'div', 'attributes': {'class': 'hidden'}},
    'AdaptiveTrigger': {'new_tag': 'div', 'attributes': {'class': 'hidden'}},
    'AppBarButton.KeyboardAccelerators': {'new_tag': 'div', 'attributes': {'class': 'hidden'}},


    'AppBarSeparator': {'new_tag': 'div', 'attributes': {'class': ''}},
    'AppBarToggleButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'AppBarToggleButton.Content': {'new_tag': 'div', 'attributes': {'class': ''}},
    'AppBarToggleButton.Icon': {'new_tag': 'div', 'attributes': {'class': ''}},
    
    'AutoSuggestBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    
    'BitmapIcon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'BitmapIconSource': {'new_tag': 'div', 'attributes': {'class': ''}},

    'BreadcrumbBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'BreadcrumbBar.ItemTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'BreadcrumbBarItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'BreadcrumbBarItem.ContentTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},

    'Border': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Border.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},

    'Button.Content': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Button.Flyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CalendarView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ColorPicker': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ColumnDefinition': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ComboBoxItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CommandBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CommandBar.PrimaryCommands': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CommandBar.SecondaryCommands': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CommandBarFlyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'CommandBarFlyout.SecondaryCommands': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ControlExample.CSharp': {'new_tag': 'div', 'attributes': {'class': ''}},
    'DataTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'DatePicker': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Double': {'new_tag': 'div', 'attributes': {'class': ''}},
    'DropDownButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'DropDownButton.Content': {'new_tag': 'div', 'attributes': {'class': ''}},
    'DropDownButton.Flyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Flyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'FontIcon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'FontIconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Frame': {'new_tag': 'div', 'attributes': {'class': ''}},
    'GradientStop': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Grid': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Grid.ColumnDefinitions': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Grid.RowDefinitions': {'new_tag': 'div', 'attributes': {'class': ''}},
    'GridView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'GridView.Items': {'new_tag': 'div', 'attributes': {'class': ''}},
    'GridView.ItemsPanel': {'new_tag': 'div', 'attributes': {'class': ''}},
    'GridView.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Hyperlink': {'new_tag': 'div', 'attributes': {'class': ''}},
    'HyperlinkButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'InfoBadge': {'new_tag': 'div', 'attributes': {'class': ''}},
    'InfoBadge.IconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'InfoBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ItemContainer': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ItemsPanelTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ItemsView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ItemsView.Layout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ItemsWrapGrid': {'new_tag': 'div', 'attributes': {'class': ''}},
    'KeyboardAccelerator': {'new_tag': 'div', 'attributes': {'class': ''}},
    'LineBreak': {'new_tag': 'div', 'attributes': {'class': ''}},
    'LinearGradientBrush': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ListView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ListView.ItemTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ListView.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuBarItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyoutItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyoutItem.Icon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyoutItem.KeyboardAccelerators': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyoutSeparator': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuFlyoutSubItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuItemTemplateSelector': {'new_tag': 'div', 'attributes': {'class': ''}},
    'MenuItemTemplateSelector.ItemTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.AutoSuggestBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.Content': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.FooterMenuItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.MenuItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.PaneCustomContent': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationView.PaneFooter': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationViewItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationViewItem.Icon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationViewItem.InfoBadge': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationViewItem.MenuItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NavigationViewItemHeader': {'new_tag': 'div', 'attributes': {'class': ''}},
    'NumberBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Page.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Paragraph': {'new_tag': 'div', 'attributes': {'class': ''}},
    'PasswordBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'PathIcon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Pivot': {'new_tag': 'div', 'attributes': {'class': ''}},
    'PivotItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ProgressBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ProgressRing': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ProxyAppBarButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RadioButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RadioButtons': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RadioMenuFlyoutItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RatingControl': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Rectangle.Fill': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RelativePanel': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RelativePanel.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RepeatButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ResourceDictionary': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ResourceDictionary.ThemeDictionaries': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RichEditBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RichTextBlock': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RichTextBlockOverflow': {'new_tag': 'div', 'attributes': {'class': ''}},
    'RowDefinition': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Run': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SamplePage1': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SamplePage2': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SamplePage3': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ScrollViewer': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SelectorBar': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SelectorBarItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Setter': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Slider': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SolidColorBrush': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Span': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SplitButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SplitButton.Flyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'StackPanel.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'StaticResource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Style': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SwipeControl': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SwipeControl.RightItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SwipeItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SwipeItem.IconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SwipeItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SymbolIcon': {'new_tag': 'div', 'attributes': {'class': ''}},
    'SymbolIconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.KeyboardAccelerators': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.TabItemTemplate': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.TabItems': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.TabStripFooter': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabView.TabStripHeader': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabViewItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TabViewItem.IconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TeachingTip': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TeachingTip.Content': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TeachingTip.HeroContent': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TeachingTip.IconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TextBox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'TimePicker': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToggleButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToggleMenuFlyoutItem': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToggleSplitButton': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToggleSplitButton.Flyout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToggleSwitch': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToolTip': {'new_tag': 'div', 'attributes': {'class': ''}},
    'ToolTipService.ToolTip': {'new_tag': 'div', 'attributes': {'class': ''}},
    'UniformGridLayout': {'new_tag': 'div', 'attributes': {'class': ''}},
    'UserControl': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VariableSizedWrapGrid': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VariableSizedWrapGrid.Resources': {'new_tag': 'div', 'attributes': {'class': ''}},
    'Viewbox': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VisualState': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VisualState.Setters': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VisualState.StateTriggers': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VisualStateGroup': {'new_tag': 'div', 'attributes': {'class': ''}},
    'VisualStateManager.VisualStateGroups': {'new_tag': 'div', 'attributes': {'class': ''}},
    'XamlUICommand': {'new_tag': 'div', 'attributes': {'class': ''}},
    'XamlUICommand.IconSource': {'new_tag': 'div', 'attributes': {'class': ''}},
    'XamlUICommand.KeyboardAccelerators': {'new_tag': 'div', 'attributes': {'class': ''}},
}


# Define attribute replacements
ATTRIBUTE_MAPPING = {
    'Style': 'CustomStyle',
    'AutomationProperties.Name': 'aria-label',
    'Name': 'aria-label',
    'AutomationProperties.AutomationId': 'id',
    'RelativePanel.Below': 'RelativePanelBelow',
    'space': 'class',
}

DROP_ATTRIBUTES = [
    'Ignorable',
    'Class'
]

HANDLED_ATTRIBUTES = [
    "ControlExample",
    "ControlExample.HeaderText",
    "ControlExample.aria-label",
    "ProxyButton",
    "ProxyButton.Content",
    "ProxyButton.aria-label",
    "ProxyCheckBox",
    "ProxyCheckBox.Content",
    "ProxyCheckBox.aria-label",
    "ProxyDatePicker",
    "ProxyDatePicker.Header",
    "ProxyDatePicker.PlaceholderText",
    "ProxyImage",
    "ProxyImage.Source",
    "ProxyImage.aria-label",
    "ProxyText",
    "ProxyText.Margin",
    "ProxyText.Text",
    "ProxyText.aria-label",
    "ProxyText.id",
    "StackPanel",
    "StackPanel.Orientation",
    "div",
    "pre",
    "pre.class",
    "div.class",
]    


IGNORED_ATTRIBUTES = [
    "ProxyButton.Click",
    "ProxyButton.CustomStyle",
    "ProxyButton.Height",
    "ProxyButton.HorizontalAlignment",
    "ProxyButton.IsEnabled",
    "ProxyButton.Margin",
    "ProxyButton.MaxWidth",
    "ProxyButton.Width",
    "ProxyText.FontFamily",
    "ProxyText.TextWrapping",
    "StackPanel.HorizontalAlignment",
    "div.IsEnabled",
    "div.Key",
    "div.Value",
    "ControlExample.RelativePanelBelow",
    "ProxyCheckBox.Checked",
    "ProxyCheckBox.Indeterminate",
    "ProxyCheckBox.IsChecked",
    "ProxyCheckBox.IsThreeState",
    "ProxyCheckBox.Margin",
    "ProxyCheckBox.Unchecked",
    "ControlExample.MinimumUniversalAPIContract",
    "ProxyComboBox",
    "ProxyComboBox.DisplayMemberPath",
    "ProxyComboBox.Header",
    "ProxyComboBox.IsEditable",
    "ProxyComboBox.ItemsSource",
    "ProxyComboBox.Loaded",
    "ProxyComboBox.MinWidth",
    "ProxyComboBox.PlaceholderText",
    "ProxyComboBox.SelectedValuePath",
    "ProxyComboBox.SelectionChanged",
    "ProxyComboBox.Width",
    "ProxyComboBox.aria-label",
    "ProxyRectangle",
    "ProxyRectangle.Height",
    "ProxyRectangle.Margin",
    "ProxyRectangle.Width",
    "ProxyRectangle.aria-label",
    "ProxyText.CustomStyle",
    "ProxyText.FontSize",
]

proxies = set()

import os
from lxml import etree
from jinja2 import Environment, FileSystemLoader
import re

def read_xaml_file(file_path):
    """Read the content of a XAML file."""
    with open(file_path, 'r', encoding="utf-8") as file:
        return file.read()

def parse_xaml_content(xaml_content):
    """Parse the XAML content into a data structure."""
    xaml_content = xaml_content.encode('utf-8')

    return etree.fromstring(xaml_content)

def remove_comments(element):
    """Remove all comments from the element."""
    comments = element.xpath('//comment()')
    for comment in comments:
        parent = comment.getparent()
        if parent is not None:
            parent.remove(comment)

def strip_namespace(element):
    """Remove namespaces from the element and its attributes."""
    if element.tag.startswith("{"):
        element.tag = etree.QName(element).localname

    # Remove namespaces from attributes
    for attr in list(element.attrib):
        if attr.startswith("{"):
            new_attr = etree.QName(attr).localname
            element.attrib[new_attr] = element.attrib.pop(attr)

    # Recursively remove namespaces from child elements
    for child in element:
        strip_namespace(child)

def replace_elements_and_attributes(root):
    """Replace specific elements and attributes based on predefined mappings."""
    for element in root.iter():
        # Replace element tags
        tag_name = etree.QName(element).localname
        if tag_name in ELEMENT_MAPPING:
            mapping = ELEMENT_MAPPING[tag_name]
            new_tag = mapping['new_tag']
            element.tag = new_tag

            # Add additional attributes if specified
            for attr_name, attr_value in mapping['attributes'].items():
                element.attrib[attr_name] = attr_value

        # Replace attributes
        for old_attr, new_attr in ATTRIBUTE_MAPPING.items():
            if old_attr in element.attrib:
                element.attrib[new_attr] = element.attrib.pop(old_attr)

        # Drop specified attributes
        for attr in DROP_ATTRIBUTES:
            if attr in element.attrib:
                del element.attrib[attr]

        # TODO: This messes up closing braces, but I hate regex, so I'll fix it later
        if element.text:
            element.text = re.sub(r'([{}])', r"{'\1'}", element.text)

def convert_to_xaml(root):
    """Convert the modified data structure back into XAML."""
    return etree.tostring(root, pretty_print=True, xml_declaration=True, encoding='UTF-8').decode()

def write_combos_file(combos):
    sorted_combos = sorted(list(combos))

    with open('output.txt', 'a') as f:
        for combo in sorted_combos:
            f.write("'"+combo+"': {'new_tag': 'div', 'attributes': {'class': ''}},\n")


def write_output_file(output_path, content):
    """Write the modified content to a new HTML file."""
    lines = content.splitlines()
    if len(lines) > 1:
        # Drop the first line and replace the second with "<Page>"
        lines = lines[1:]
        lines[0] = "<div class='page'>"
    modified_content = '\n'.join(lines)

    # Load the template
    file_loader = FileSystemLoader('templates')
    env = Environment(loader=file_loader)
    template = env.get_template('page.jinja2')

    # Data to render the template with
    data = {
        'pageName': output_path,
        'html': modified_content,
        'proxies': proxies
    }

    # Render the template
    output = template.render(data)
    output_path = "..\\web-app\\src\\pages\\GeneratedPages\\"+output_path+".tsx"

    with open(output_path, 'w', encoding="utf-8") as file:
        file.write(output)

def print_tag_and_attribute_combos(root):
    """Print all unique tag and attribute combinations in the XAML file."""
    for element in root.iter():
        tag_name = etree.QName(element).localname

        if "Proxy" in tag_name:
            proxies.add(tag_name)

        tag_attr_combos = set()

        if tag_name not in HANDLED_ATTRIBUTES and tag_name not in IGNORED_ATTRIBUTES:
            tag_attr_combos.add(tag_name)
        for attr in element.attrib:
            attr_str = f"{tag_name}.{attr}"
            if attr_str not in HANDLED_ATTRIBUTES and attr_str not in IGNORED_ATTRIBUTES:
                pass
                #tag_attr_combos.add(attr_str)

        write_combos_file(tag_attr_combos)


def main(input_file):
    """Main function to process the XAML file."""
    input_file = os.path.join("..\\..\\WinUIGallery\\ControlPages\\", input_file)

    if not os.path.isfile(input_file):
        print(input_file +" not found")
        return
    
    if not input_file.lower().endswith('.xaml'):
        raise ValueError("Input file must be a XAML file.")
    
    
    # Step 1: Read Input XAML File
    xaml_content = read_xaml_file(input_file)
    
    # Step 2: Parse XAML Content
    root = parse_xaml_content(xaml_content)

    if root == False:
        print(input_file + " Parse error!")
        return
    
    # Step 3: Remove comments
    remove_comments(root)
    
    # Step 4: Strip namespaces from elements and attributes
    strip_namespace(root)

    # Step 5: Replace Elements and Attributes
    replace_elements_and_attributes(root)
    
    # Step 6: Convert Back to XAML/HTML
    modified_content = convert_to_xaml(root)

    print_tag_and_attribute_combos(root)
    
    # Determine output file path
    output_file = input_file.split("\\")[-1]
    output_file = os.path.splitext(output_file)[0]
    
    # Step 7: Write Output HTML File
    write_output_file(output_file, modified_content)
    
    print(f"Modified content has been written to {output_file}")

if __name__ == "__main__":
    input_file = "ButtonPage.xaml"
    #input_file = input("Enter the path of the XAML file: ")
    main(input_file)
