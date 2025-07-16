
import json
import requests

# URLs to fetch plugins from
urls = [
    "https://gitee.com/maotoumao/MusicFreePlugins/raw/master/plugins.json",
    "https://fastly.jsdelivr.net/gh/Huibq/keep-alive/Music_Free/myPlugins.json"
]

all_plugins = []

# Fetch and parse plugins from each URL
for url in urls:
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes
        data = response.json()
        # Assuming the plugins are in a 'plugins' key or the root is a list
        plugins = data.get("plugins") if isinstance(data, dict) else data
        if isinstance(plugins, list):
            all_plugins.extend(plugins)
        else:
            print(f"Warning: No 'plugins' list found in the response from {url}")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from {url}: {e}")
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON from {url}: {e}")

# Deduplicate plugins based on the 'url' field
unique_plugins_map = {plugin['url']: plugin for plugin in all_plugins}
unique_plugins = list(unique_plugins_map.values())

# Create the final JSON structure
output_data = {
    "plugins": unique_plugins
}

# Write the result to index.json
try:
    with open("out.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)
    print("Successfully created out.json")
except IOError as e:
    print(f"Error writing to out.json: {e}")

