import json
from jinja2 import Environment, FileSystemLoader

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
            html_output.append(f'        <NavSubItem value="{item["UniqueId"]}">{item_title_with_icon}</NavSubItem>')

        html_output.append('    </NavSubItemGroup>')
        html_output.append('</NavCategory>')

    return "\n".join(html_output)

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