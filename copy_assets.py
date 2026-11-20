import os
import shutil

BASE_DIR = r"C:\Users\USER\Desktop\Movies"
APP_PUBLIC = r"C:\Users\USER\Desktop\Movies\Movie Website\public\assets"

os.makedirs(os.path.join(APP_PUBLIC, "posters"), exist_ok=True)
os.makedirs(os.path.join(APP_PUBLIC, "characters"), exist_ok=True)
os.makedirs(os.path.join(APP_PUBLIC, "videos"), exist_ok=True)
os.makedirs(os.path.join(APP_PUBLIC, "gallery"), exist_ok=True)
os.makedirs(os.path.join(APP_PUBLIC, "season2"), exist_ok=True)
os.makedirs(os.path.join(APP_PUBLIC, "audio"), exist_ok=True)

# Copy posters from brain upload
p1 = r"C:\Users\USER\.gemini\antigravity\brain\d7f22fcb-b9f8-4cd5-b5fd-eef24751f7ed\.user_uploaded\media_1795188143219_36e889c4.jpg"
p2 = r"C:\Users\USER\.gemini\antigravity\brain\d7f22fcb-b9f8-4cd5-b5fd-eef24751f7ed\.user_uploaded\media_1795188150548_861a9ce4.jpg"

if os.path.exists(p1):
    shutil.copy2(p1, os.path.join(APP_PUBLIC, "posters", "poster_s1.jpg"))
    print("Copied poster_s1.jpg")

if os.path.exists(p2):
    shutil.copy2(p2, os.path.join(APP_PUBLIC, "posters", "poster_s2.jpg"))
    print("Copied poster_s2.jpg")

# Copy characters & collages
sm = os.path.join(BASE_DIR, "Moch Wa9to", "Social Media")

char_maps = {
    "Bayrem_ TNPD Detective Collage Poster.png": "characters/bayrem.png",
    "Bouhmid_ The IT Engineer Dossier.png": "characters/bouhmid.png",
    "Don Aurora_ Beauty, Power, Intrigue.png": "characters/don_aurora.png",
    "Freddy & Josef_ Brothers in Arms.png": "characters/freddy_josef.png",
    "Rostom_ The Imposter Collage.png": "characters/rostom.png",
    "TNPD Detective_ Gritty Casefile Collage (1).png": "characters/tnpd_casefile.png",
    "Mouch Waqtou_ Tunisian Sunset Saga.png": "gallery/sunset_saga.png",
    "TNPD Detectives_ Coming Soon.png": "gallery/tnpd_detectives.png",
    "Cinematic Special Thanks Poster.png": "gallery/credits_poster.png",
}

for src_name, dst_rel in char_maps.items():
    src_path = os.path.join(sm, src_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(APP_PUBLIC, dst_rel))
        print(f"Copied {src_name} -> {dst_rel}")

# Copy videos
video_maps = {
    "Beyrem Kriaa.mp4": "videos/bayrem.mp4",
    "Elaa Boughalmi.mp4": "videos/don_aurora.mp4",
    "Feres Fatmi.mp4": "videos/freddy.mp4",
    "Khalil Ghozi.mp4": "videos/bouhmid.mp4",
    "Youssef Miladi.mp4": "videos/josef.mp4",
    "466d788cffb25e2aefca1d1fa01925c3_1.mp4": "videos/rostom.mp4",
    "Teaser 1.mp4": "videos/teaser1.mp4",
    "Teaser 2.mp4": "videos/teaser2.mp4",
}

for src_name, dst_rel in video_maps.items():
    src_path = os.path.join(sm, src_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(APP_PUBLIC, dst_rel))
        print(f"Copied {src_name} -> {dst_rel}")

# Season 2 assets
s2 = os.path.join(BASE_DIR, "Mouch Waqtou 2")
s2_maps = {
    "Freddy_ Mouch Waqtou 2 Poster.png": "season2/freddy_s2.png",
    "Josef_ Mouch Waqtou 2 Poster.png": "season2/josef_s2.png",
    "Mouch Waqtou 2_ Midnight City Thriller.png": "season2/midnight_thriller.png",
    "1118 (1).mp4": "videos/s2_teaser.mp4",
}

for src_name, dst_rel in s2_maps.items():
    src_path = os.path.join(s2, src_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(APP_PUBLIC, dst_rel))
        print(f"Copied {src_name} -> {dst_rel}")

# Music soundtrack
music_path = os.path.join(BASE_DIR, "Music", "moch waqtou V2 generique.mp3")
if not os.path.exists(music_path):
    music_path = os.path.join(BASE_DIR, "Music", "Mouch Waqtou.mp3")
if os.path.exists(music_path):
    shutil.copy2(music_path, os.path.join(APP_PUBLIC, "audio", "soundtrack.mp3"))
    print("Copied soundtrack.mp3")

print("All asset copies completed!")
