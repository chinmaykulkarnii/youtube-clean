# YouTube Clean — Safari Extension

A lightweight Safari extension that removes distracting elements from YouTube, so you can stay focused and watch only what you came for.

## What it blocks
- 🏠 Homepage recommendation feed
- 📺 Sidebar recommendations (while watching)
- 🔚 End screen suggestions
- 🩳 Shorts shelf
- 💬 Comments section

## Installation

### Prerequisites
- macOS with Safari
- Xcode installed (free from App Store)
- Any Apple ID (no paid developer account needed)

### Steps

1. Clone the repo
   ```bash
   git clone https://github.com/YOUR_USERNAME/youtube_clean.git
   ```

2. Run the Safari extension converter
   ```bash
   xcrun safari-web-extension-converter /path/to/youtube_clean \
     --project-location /path/to/output \
     --app-name "YouTube Clean" \
     --bundle-identifier com.yourname.youtubeclean \
     --no-prompt
   ```

3. Open the generated `.xcodeproj` file in Xcode

4. In Xcode, set your Apple ID under **Signing & Capabilities → Team** for all 4 targets

5. Press **Cmd+R** to build and run

6. In Safari, go to **Settings → Extensions** and enable **YouTube Clean**

### Note
Free Apple ID certificates expire every **7 days**. Just press **Cmd+R** in Xcode to renew — takes 10 seconds.

## Tech
- JavaScript (content script)
- CSS (element hiding)
- Safari Web Extension API (Manifest V3)

## Motivation
Built this because [Unhook](https://chromewebstore.google.com/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid) — a popular Chrome extension for removing YouTube recommendations — isn't available for Safari. This is a minimal personal alternative.
