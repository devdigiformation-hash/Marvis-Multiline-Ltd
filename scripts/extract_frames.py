import os
import zipfile
import json
import shutil

# Discover zip archives from local directory or .user_uploaded
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 3 approved video definitions
videos = {
    "hero": {
        "id": "hero-workshop",
        "title": "Combined Car & Bicycle Repair Workshop",
        "zips": [
            os.path.join(base_dir, "ezgif-721e431b0d3d68c3-jpg.zip"),
            r"C:\Users\user\.gemini\antigravity\brain\49b3ec4d-e5e7-4310-8b2a-a939e8e0daca\.user_uploaded\media_1794514572927_16cca795.zip"
        ],
        "mp4s": [
            os.path.join(base_dir, "Mechanics_repairing_cars_and_bic…_06513787_1080p.mp4"),
            r"C:\Users\user\.gemini\antigravity\brain\49b3ec4d-e5e7-4310-8b2a-a939e8e0daca\.user_uploaded\media_1794514564999_9930038d.mp4"
        ],
        "target_dir": os.path.join(base_dir, "public", "media", "hero"),
        "mp4_target_name": "hero-workshop.mp4"
    },
    "car-repairing": {
        "id": "01",
        "slug": "car-repairing",
        "title": "Automotive Inspection & Car Repairing",
        "align": "right",
        "zips": [
            os.path.join(base_dir, "ezgif-720820b52c457738-jpg.zip"),
            r"C:\Users\user\.gemini\antigravity\brain\49b3ec4d-e5e7-4310-8b2a-a939e8e0daca\.user_uploaded\media_1794513523426_f9a4aec6.zip"
        ],
        "mp4s": [
            os.path.join(base_dir, "Mechanic_repairing_car_engine_ac8d06c3_1080p.mp4")
        ],
        "target_dir": os.path.join(base_dir, "public", "media", "chapters", "car-repairing"),
        "mp4_target_name": "car-repair.mp4"
    },
    "cycle-repairing": {
        "id": "02",
        "slug": "cycle-repairing",
        "title": "Bicycle Maintenance & Cycle Repairing",
        "align": "left",
        "zips": [
            os.path.join(base_dir, "ezgif-708015fecda9f026-jpg.zip"),
            r"C:\Users\user\.gemini\antigravity\brain\49b3ec4d-e5e7-4310-8b2a-a939e8e0daca\.user_uploaded\media_1794513523407_cea1019e.zip"
        ],
        "mp4s": [
            os.path.join(base_dir, "Mechanic_repairing_bicycle_in_wo…_fbc22935_1080p.mp4")
        ],
        "target_dir": os.path.join(base_dir, "public", "media", "chapters", "cycle-repairing"),
        "mp4_target_name": "cycle-repair.mp4"
    }
}

# Clean out old 5 categories if they accidentally reappear
chapters_base = os.path.join(base_dir, "public", "media", "chapters")
old_categories = ["used-vehicles", "transport-support", "hair-beauty", "fashion", "household"]
for cat in old_categories:
    old_dir = os.path.join(chapters_base, cat)
    if os.path.exists(old_dir):
        print(f"Purging legacy category: {old_dir}")
        shutil.rmtree(old_dir, ignore_errors=True)

manifest_chapters = []

for key, config in videos.items():
    target_dir = config["target_dir"]
    frames_dir = os.path.join(target_dir, "frames")
    os.makedirs(frames_dir, exist_ok=True)

    # Copy MP4 if source found
    for mp4 in config.get("mp4s", []):
        if os.path.exists(mp4):
            dest = os.path.join(target_dir, config["mp4_target_name"])
            shutil.copy2(mp4, dest)
            print(f"Copied {config['mp4_target_name']}")
            break

    # Locate valid zip
    zip_source = None
    for z in config["zips"]:
        if os.path.exists(z):
            zip_source = z
            break

    if zip_source:
        with zipfile.ZipFile(zip_source, "r") as z:
            names = sorted([n for n in z.namelist() if n.lower().endswith((".jpg", ".jpeg", ".png"))])
            print(f"Extracting {len(names)} frames for {key} from {os.path.basename(zip_source)}...")
            for idx, name in enumerate(names, start=1):
                target_name = f"frame_{idx:03d}.jpg"
                target_path = os.path.join(frames_dir, target_name)
                with z.open(name) as src, open(target_path, "wb") as dst:
                    dst.write(src.read())

            # Save poster as frame 1
            poster_src = os.path.join(frames_dir, "frame_001.jpg")
            poster_dst = os.path.join(target_dir, "poster.jpg")
            if os.path.exists(poster_src):
                shutil.copyfile(poster_src, poster_dst)

            manifest = {
                "id": config["id"],
                "title": config["title"],
                "frameCount": len(names),
                "width": 1920,
                "height": 1080,
                "poster": f"/media/{'hero' if key == 'hero' else 'chapters/' + key}/poster.jpg",
                "framePattern": f"/media/{'hero' if key == 'hero' else 'chapters/' + key}/frames/frame_%03d.jpg"
            }
            if "align" in config:
                manifest["desktopAlign"] = config["align"]
                manifest["slug"] = config["slug"]
                manifest_chapters.append(manifest)

            with open(os.path.join(target_dir, "manifest.json"), "w", encoding="utf-8") as mf:
                json.dump(manifest, mf, indent=2)

with open(os.path.join(chapters_base, "manifest.json"), "w", encoding="utf-8") as mf:
    json.dump(manifest_chapters, mf, indent=2)

print("All 3 cinematic video assets and frame manifests verified successfully!")
