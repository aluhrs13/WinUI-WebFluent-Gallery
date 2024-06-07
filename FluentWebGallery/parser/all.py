import json
from jinja2 import Environment, FileSystemLoader

import control_page

items = []

def create_tsx_page(name):
    control_page.main(name+"Page.xaml")

# Function to read JSON data from a file
def read_json_file(filename):
    with open(filename, 'r', encoding="utf-8") as file:
        data = json.load(file)
    return data

# Function to convert JSON to HTML
def json_to_html(data_array):
    html_output = []

    for data in data_array:
        icon_glyph = data.get("IconGlyph", "")
        title_with_icon = f'{icon_glyph} {data["Title"]}' if icon_glyph else data["Title"]
        
        html_output.append(f'<NavCategory value="{data["UniqueId"]}">')
        html_output.append(f'    <NavCategoryItem>{title_with_icon}</NavCategoryItem>')
        html_output.append('    <NavSubItemGroup>')

        for item in data["Items"]:
            item_icon_glyph = item.get("IconGlyph", "")
            item_title_with_icon = f'{item_icon_glyph} {item["Title"]}' if item_icon_glyph else item["Title"]
            html_output.append(f'        <NavSubItem href="{item["UniqueId"]}Page" value="{item["UniqueId"]}">{item_title_with_icon}</NavSubItem>')
            create_tsx_page(item["UniqueId"])
            items.append(item["UniqueId"])

        html_output.append('    </NavSubItemGroup>')
        html_output.append('</NavCategory>')

    return "\n".join(html_output)

# Open the file again in write mode and write the set back to it
with open('output.txt', 'w') as f:
    f.write("")

# Load JSON from file
filename = '..\\..\\WinUIGallery\\DataModel\\ControlInfoData.json'
data_array = read_json_file(filename)["Groups"]

# Generate HTML from JSON
output = json_to_html(data_array)


# Load the template
file_loader = FileSystemLoader('templates')
env = Environment(loader=file_loader)
template = env.get_template('nav.jinja2')

# Data to render the template with
data = {
    'html': output,
}

# Render the template
output = template.render(data)
output_path = "..\\web-app\\src\\components\\GeneratedComponents\\SideNav.tsx"

with open(output_path, 'w', encoding='utf-8') as file:
    file.write(output)


template2 = env.get_template('index.jinja2')

# Data to render the template with
data2 = {
    'pages': items,
}

# Render the template
output2 = template2.render(data2)
output_path2 = "..\\web-app\\src\\index.tsx"

with open(output_path2, 'w', encoding='utf-8') as file:
    file.write(output2)


# Open the file and read the lines into a set
with open('output.txt', 'r') as f:
    lines = set(f.readlines())

# Open the file again in write mode and write the set back to it
with open('output.txt', 'w') as f:
    for line in sorted(list(lines)):
        f.write(line)

