# Define element replacements
ELEMENT_MAPPING = {
    'CheckBox': {'new_tag': 'ProxyCheckBox', 'attributes': {}},
    'String': {'new_tag': 'pre', 'attributes': {}},
    'Button': {'new_tag': 'ProxyButton', 'attributes': {}},
    'TextBlock': {'new_tag': 'ProxyText', 'attributes': {}},
    'Image': {'new_tag': 'ProxyImage', 'attributes': {}},
    'ComboBox': {'new_tag': 'ProxyComboBox', 'attributes': {}},
    'Rectangle': {'new_tag': 'ProxyRectangle', 'attributes': {}},

    'ControlExample': {'new_tag': 'ControlExample', 'attributes': {}},

    'Page': {'new_tag': 'div', 'attributes': {'class': 'Page'}},
    'ControlExample.Substitutions': {'new_tag': 'div', 'attributes': {'class': 'Substitutions'}},
    'ControlExample.Output': {'new_tag': 'div', 'attributes': {'class': 'Output'}},
    'ControlExample.Example': {'new_tag': 'div', 'attributes': {'class': 'Example'}},
    'ControlExample.Options': {'new_tag': 'div', 'attributes': {'class': 'Options'}},
    'ControlExample.Xaml': {'new_tag': 'div', 'attributes': {'class': 'XAML'}},
    'ControlExampleSubstitution': {'new_tag': 'div', 'attributes': {'class': 'TODO'}},
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

import os
from lxml import etree

def read_xaml_file(file_path):
    """Read the content of a XAML file."""
    with open(file_path, 'r', encoding="utf-8") as file:
        return file.read()

def parse_xaml_content(xaml_content):
    """Parse the XAML content into a data structure."""
    print(xaml_content)

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

def convert_to_xaml(root):
    """Convert the modified data structure back into XAML."""
    return etree.tostring(root, pretty_print=True, xml_declaration=True, encoding='UTF-8').decode()


def write_output_file(output_path, content):
    """Write the modified content to a new HTML file."""
    lines = content.splitlines()
    if len(lines) > 1:
        # Drop the first line and replace the second with "<Page>"
        lines = lines[1:]
        lines[0] = "<div class='page'>"
    modified_content = '\n'.join(lines)
    
    with open(output_path, 'w') as file:
        file.write(modified_content)

def print_tag_and_attribute_combos(root):
    """Print all unique tag and attribute combinations in the XAML file."""
    tag_attr_combos = set()
    for element in root.iter():
        tag_name = etree.QName(element).localname
        if tag_name not in HANDLED_ATTRIBUTES and tag_name not in IGNORED_ATTRIBUTES:
            tag_attr_combos.add(tag_name)
        for attr in element.attrib:
            attr_str = f"{tag_name}.{attr}"
            if attr_str not in HANDLED_ATTRIBUTES and attr_str not in IGNORED_ATTRIBUTES:
                tag_attr_combos.add(attr_str)
    sorted_combos = sorted(list(tag_attr_combos))

    for combo in sorted_combos:
        print("\""+combo+"\",")

def main(input_file):
    """Main function to process the XAML file."""
    if not input_file.lower().endswith('.xaml'):
        raise ValueError("Input file must be a XAML file.")
    
    # Step 1: Read Input XAML File
    xaml_content = read_xaml_file(input_file)
    
    # Step 2: Parse XAML Content
    root = parse_xaml_content(xaml_content)
    
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
    output_file = os.path.splitext(input_file)[0] + '.html'
    
    # Step 7: Write Output HTML File
    write_output_file(output_file, modified_content)
    
    print(f"Modified content has been written to {output_file}")

if __name__ == "__main__":
    #input_file = "ButtonPage.xaml"
    input_file = input("Enter the path of the XAML file: ")
    main(input_file)
