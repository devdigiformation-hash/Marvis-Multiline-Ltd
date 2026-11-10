import os
import zipfile
import json
import shutil

chapters = [
    {
        "id": "01",
        "slug": "used-vehicles",
        "title": "Used Vehicles Sales",
        "zip": "ezgif-8ab6edb8a36499d5-jpg.zip",
        "align": "right"
    },
    {
        "id": "02",
        "slug": "transport-support",
        "title": "Transport Support",
        "zip": "ezgif-82b6f331d5153042-jpg.zip",
        "align": "left"
    },
    {
        "id": "03",
        "slug": "hair-beauty",
        "title": "Hair & Beauty Retail",
        "zip": "ezgif-8a7e25fbeda17b88-jpg.zip",
        "align": "right"
    },
    {
        "id": "04",
        "slug": "fashion",
        "title": "Fashion Retail",
        "zip": "ezgif-82b04c5770f31acd-jpg.zip",
        "align": "left"
    },
    {
        "id": "05",
        "slug": "household",
        "title": "Household Products Retail",
        "zip": "ezgif-86de80b972a3f051-jpg.zip",
        "align": "right"
    }
]

base_dir = os.path.join("public", "media", "chapters")
os.makedirs(base_dir, exist_ok=True)

manifest_all = []

for ch in chapters:
    slug = ch["slug"]
    ch_dir = os.path.join(base_dir, slug)
    frames_dir = os.path.join(ch_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)
    
    with zipfile.ZipFile(ch["zip"], "r") as z:
        names = sorted([n for n in z.namelist() if n.lower().endswith(".jpg")])
        print(f"Extracting {len(names)} frames for {slug}...")
        for idx, name in enumerate(names, start=1):
            target_name = f"frame_{idx:03d}.jpg"
            target_path = os.path.join(frames_dir, target_name)
            with z.open(name) as src, open(target_path, "wb") as dst:
                dst.write(src.read())
        
        # Save poster as frame 1
        poster_src = os.path.join(frames_dir, "frame_001.jpg")
        poster_dst = os.path.join(ch_dir, "poster.jpg")
        shutil.copyfile(poster_src, poster_dst)
        
        manifest = {
            "chapter": ch["id"],
            "slug": slug,
            "title": ch["title"],
            "desktopAlign": ch["align"],
            "frameCount": len(names),
            "width": 1920,
            "height": 1080,
            "poster": f"/media/chapters/{slug}/poster.jpg",
            "framePattern": f"/media/chapters/{slug}/frames/frame_%03d.jpg"
        }
        with open(os.path.join(ch_dir, "manifest.json"), "w", encoding="utf-8") as mf:
            json.dump(manifest, mf, indent=2)
        manifest_all.append(manifest)

with open(os.path.join(base_dir, "manifest.json"), "w", encoding="utf-8") as mf:
    json.dump(manifest_all, mf, indent=2)

print("All 5 chapters extracted and manifests created successfully!")
