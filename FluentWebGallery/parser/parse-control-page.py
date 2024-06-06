import xmltodict

def remove_local_prefix(d):
    if isinstance(d, dict):
        return {key[len("local:"):] if key.startswith("local:") else key: remove_local_prefix(value) for key, value in d.items()}
    elif isinstance(d, list):
        return [remove_local_prefix(item) for item in d]
    else:
        return d

def replace_attributes(d, attr_replacements):
    if isinstance(d, dict):
        new_dict = {}
        for key, value in d.items():
            new_key = attr_replacements.get(key, key)
            new_dict[new_key] = replace_attributes(value, attr_replacements)
        return new_dict
    elif isinstance(d, list):
        return [replace_attributes(item, attr_replacements) for item in d]
    else:
        return d

def replace_elements(d, replacements, attr_replacements):
    if isinstance(d, dict):
        new_dict = {}
        for key, value in d.items():
            if key in replacements:
                # Replace element
                replacement_tag, attributes = replacements[key]
                replaced_value = replace_elements(value, replacements, attr_replacements)
                if isinstance(replaced_value, dict):
                    replaced_value = replace_attributes(replaced_value, attr_replacements)
                    new_dict[replacement_tag] = {**attributes, **replaced_value}
                elif isinstance(replaced_value, list):
                    new_dict[replacement_tag] = [{**attributes, **replace_attributes(item, attr_replacements)} if isinstance(item, dict) else item for item in replaced_value]
                else:
                    new_dict[replacement_tag] = {**attributes, replacement_tag: replaced_value}
            else:
                # Replace attributes and recurse
                new_dict[key] = replace_elements(value, replacements, attr_replacements)
                new_dict[key] = replace_attributes(new_dict[key], attr_replacements)
        return new_dict
    elif isinstance(d, list):
        return [replace_elements(item, replacements, attr_replacements) for item in d]
    else:
        return d

# Define element replacements
ELEMENT_REPLACEMENTS = {
    'Page': ('div', {'@class': 'page'}),
    'ControlExample': ('section', {'@class': 'control-example'}),
    'ControlExampleSubstitution': ('div', {'@class': 'control-example-substitution'}),
    # Add more replacements as needed
}

# Define attribute replacements
ATTRIBUTE_REPLACEMENTS = {
    '@Style': '@CustomStyle',
    '@x:Name': '@Name',
    # Add more replacements as needed
}

def print_dict(d, indent=0):
    if isinstance(d, dict):
        for key, value in d.items():
            if key == "@Style":
                key = "@CustomStyle"
            print('  ' * indent + key)
            print_dict(value, indent + 1)
    elif isinstance(d, list):
        for item in d:
            print_dict(item, indent)
    else:
        print('  ' * indent + str(d))

def convert_xaml_to_html(input_filename):
    # Read the XAML file
    with open(input_filename, 'r') as file:
        xaml_content = file.read()

    # Parse the XAML content
    xaml_dict = xmltodict.parse(xaml_content)

    # Remove "local:" prefix from elements
    xaml_dict = remove_local_prefix(xaml_dict)

    # Replace specified elements with their replacements
    xaml_dict = replace_elements(xaml_dict, ELEMENT_REPLACEMENTS, ATTRIBUTE_REPLACEMENTS)

    print_dict(xaml_dict)

    # Convert the modified dictionary back to XAML (HTML in this case)
    modified_html_content = xmltodict.unparse(xaml_dict, pretty=True)

    # Write the modified content to an HTML file
    output_filename = input_filename.rsplit('.', 1)[0] + '.html'
    with open(output_filename, 'w') as file:
        file.write(modified_html_content)

    print(f"Modified HTML content has been saved to {output_filename}")

# Example usage
if __name__ == "__main__":
    input_filename = 'ButtonPage.xaml'
    convert_xaml_to_html(input_filename)
