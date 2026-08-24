import urllib.request
import re
import os
import json

os.makedirs('public/images/hero', exist_ok=True)
os.makedirs('public/images/collections', exist_ok=True)
os.makedirs('public/images/lookbook', exist_ok=True)

# Using wikimedia commons as a reliable source since Unsplash/Pexels block scrapers.
# Let's search wikimedia API for "pakistani fashion" or "saree"
search_url = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=incategory:%22Fashion_of_Pakistan%22%20OR%20incategory:%22Women_wearing_saris%22&utf8=&format=json&srlimit=20"

req_headers = {
    'User-Agent': 'Mozilla/5.0'
}

req = urllib.request.Request(search_url, headers=req_headers)
res = urllib.request.urlopen(req).read().decode('utf-8')
data = json.loads(res)

titles = [item['title'] for item in data['query']['search'] if item['title'].endswith(('.jpg', '.png', '.jpeg', '.JPG'))]

print(f"Found titles: {titles}")

def get_image_url(title):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(api_url, headers=req_headers)
    res = urllib.request.urlopen(req).read().decode('utf-8')
    data = json.loads(res)
    pages = data['query']['pages']
    for page_id in pages:
        return pages[page_id]['imageinfo'][0]['url']
    return None

images_to_download = [
    'public/images/hero/hero-suit.png',
    'public/images/collections/lawn.jpg',
    'public/images/collections/embroidered.jpg',
    'public/images/collections/luxury.jpg',
    'public/images/collections/digital.jpg',
    'public/images/lookbook/look-01.jpg',
    'public/images/lookbook/look-02.jpg',
    'public/images/lookbook/look-03.jpg',
    'public/images/lookbook/look-04.jpg'
]

count = 0
for target_path in images_to_download:
    if count < len(titles):
        url = get_image_url(titles[count])
        if url:
            print(f"Downloading {url} to {target_path}")
            img_req = urllib.request.Request(url, headers=req_headers)
            img_data = urllib.request.urlopen(img_req).read()
            with open(target_path, 'wb') as f:
                f.write(img_data)
        count += 1
