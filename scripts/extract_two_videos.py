import os
import zipfile
import json
import shutil

zips = {
    "car-repairing": {
        "id": "01",
        "slug": "car-repairing",
        "title": "Automotive Inspection & Car Repairing",
        "zip": r"C:/Users/user/.gemini/antigravity/brain/49b3ec4d-e5e7-4310-8b2a-a939e8e0daca/.user_uploaded/media_1794513523426_f9a4aec6.zip",
        "align": "right"
    },
    "cycle-repairing": {
        "id": "02",
        "slug": "cycle-repairing",
        "title": "Bicycle Maintenance & Cycle Repairing",
        "zip": r"C:/Users/user/.gemini/antigravity/brain/49b3ec4d-e5e7-4310-8b2a-a939e8e0daca/.user_uploaded/media_1794513523407_cea1019e.zip",
        "align": "left"
    }
}

base_dir = os.path.join("public", "media", "chapters")

# Remove old 5 chapter folders if they exist
old_categories = ["used-vehicles", "transport-support", "hair-beauty", "fashion", "household"]
for cat in old_categories:
    old_cat_dir = os.path.join(base_dir, cat)
    if os.path.exists(old_cat_dir):
        print(f"Removing old category folder: {old_cat_dir}")
        shutil.rmtree(old_cat_dir, ignore_errors=True)

os.makedirs(base_dir, exist_ok=True)
manifest_all = []

for slug, info in zips.items():
    ch_dir = os.path.join(base_dir, slug)
    frames_dir = os.path.join(ch_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    with zipfile.ZipFile(info["zip"], "r") as z:
        names = sorted([n for n in z.namelist() if n.lower().endswith((".jpg", ".jpeg", ".png"))])
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
            "chapter": info["id"],
            "slug": slug,
            "title": info["title"],
            "desktopAlign": info["align"],
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

print("Extraction complete! Only Car Repairing and Cycle Repairing remain in public/media/chapters.")
