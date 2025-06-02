import os
import json

# مسیر پوشه فایل‌های GeoJSON
GEOJSON_FOLDER_PATH = "C:\\Users\\mr.computer\\Desktop\\New folder (6)"
OUTPUT_HTML_PATH = "geojson_map.html"

# لیست لایه‌ها (اسم فایل‌ها بدون پسوند .geojson)
layers = [
    "Adarehpost", "amozeshparvaresh", "Asnaf", "Atashneshani", "Bank", "Khadamatdarmani",  # اصلاح‌شده
    "dadgah", "darokhaneh", "Farmandari", "Masged", "Mokhaberat", "Nezampezechki",
    "Park", "Polis", "Pompbenzin", "Shorayshar", "Sinama", "Zendan"
]

# رنگ برای هر لایه
colors = [
    "red", "blue", "green", "orange", "purple", "brown", "cyan", "magenta", "lime",
    "teal", "navy", "olive", "maroon", "gray", "pink", "gold", "black", "darkgreen"
]

geojson_files_data = []

for i, layer in enumerate(layers):
    filename = f"{layer}.geojson"
    filepath = os.path.join(GEOJSON_FOLDER_PATH, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            geojson_files_data.append((layer, data, colors[i]))
    else:
        print(f"فایل پیدا نشد: {filename}")

# تولید فایل HTML
layer_entries = []
legend_entries = []
geojson_vars = []
style_funcs = []

for i, (layer_name, data, color) in enumerate(geojson_files_data):
    var_name = f"geojsonData{i}"
    geojson_str = json.dumps(data)

    geojson_vars.append(f"var {var_name} = {geojson_str};")
    
    style_funcs.append(f"""
function style{i}(feature) {{
    return {{
        color: "{color}",
        weight: 2,
        fillOpacity: 0.5
    }};
}}
""")

    layer_entries.append(f"""
var layer{i} = L.geoJSON({var_name}, {{
    pointToLayer: function (feature, latlng) {{
        return L.circleMarker(latlng, {{
            radius: 8,
            fillColor: "{color}",
            color: "{color}",
            weight: 1,
            fillOpacity: 0.7
        }});
    }},
    style: style{i},
    onEachFeature: function (feature, layer) {{
        var popupContent = "";
        if (feature.properties) {{
            for (var key in feature.properties) {{
                popupContent += "<b>" + key + ":</b> " + feature.properties[key] + "<br/>";
            }}
        }} else {{
            popupContent = "بدون اطلاعات";
        }}
        layer.bindPopup(popupContent);
    }}
}}).addTo(map);
overlayMaps["{layer_name}"] = layer{i};
""")

    legend_entries.append(
        f'<div><input type="checkbox" id="legend{i}" onchange="toggleLayer(layer{i})" checked>'
        f'<label for="legend{i}" style="color:{color};"> {layer_name}</label></div>'
    )

html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>نقشه خدمات شهری</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        #map {{ height: 600px; }}
        .legend {{
            padding: 10px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 5px;
            max-height: 300px;
            overflow-y: auto;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1000;
        }}
        .legend div {{ margin-bottom: 5px; }}
    </style>
</head>
<body>
    <h2 style="text-align:center;">نقشه خدمات شهری لنگرود</h2>
    <div id="map"></div>
    <div class="legend">
        <h4>لایه‌ها</h4>
        {''.join(legend_entries)}
    </div>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script>
        var map = L.map('map').setView([37.195, 50.154], 13);

        L.tileLayer('https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
            attribution: '© OpenStreetMap contributors'
        }}).addTo(map);

        var overlayMaps = {{}};

        {"".join(geojson_vars)}
        {"".join(style_funcs)}
        {"".join(layer_entries)}

        L.control.layers(null, overlayMaps).addTo(map);

        function toggleLayer(layer) {{
            if (map.hasLayer(layer)) {{
                map.removeLayer(layer);
            }} else {{
                map.addLayer(layer);
            }}
        }}

        var allLayers = [];
        for (var key in overlayMaps) {{
            allLayers.push(overlayMaps[key]);
        }}
        var group = L.featureGroup(allLayers);
        map.fitBounds(group.getBounds());
    </script>
</body>
</html>
"""

# ذخیره فایل نهایی
with open(OUTPUT_HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"فایل HTML ساخته شد: {OUTPUT_HTML_PATH}")