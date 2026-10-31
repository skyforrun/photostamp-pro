# PhotoStamp — batch watermark a folder of photos in Photoshop

A Photoshop **JSX script** that stamps a logo or date across an entire folder — one run, no actions, no plugins, no uploads.

- **[Get the free Lite script](#install)** — stamps the open document, MIT licensed
- **[Get PhotoStamp Pro — $29](https://skyforer.gumroad.com/l/photostamp-pro)** — folder batch, presets, tiling, date from EXIF, non-destructive copies

Works on **Photoshop CC 2018+** for Windows and macOS. 100% local: no account, no telemetry, no phone-home.

---

## The problem this solves

If you shoot or retouch for clients, you already know the loop:

1. Open photo
2. Place logo
3. Resize, position, set opacity
4. Flatten, Save As, close
5. Repeat 499 times

A 500-photo delivery is an afternoon of unpaid mechanical work. And the photos you forget to stamp are the ones that get lifted, reposted, and resold.

Photoshop's built-in **File → Automate → Batch** can run an action over a folder, but actions don't ask you for a logo path, a date, an opacity, or a corner — you re-record them every time the stamp changes. PhotoStamp is a small panel instead: pick the folder, pick the look, press go.

## Install

1. Download `lite/PhotoStamp-Lite.jsx` from this repo (or `PhotoStamp-Pro.jsx` if you bought Pro).
2. Put it somewhere permanent, e.g. `~/Documents/PhotoStamp/`.
3. In Photoshop: **File → Scripts → Browse…** → pick the .jsx.
4. The panel opens. No restart, no plugin folder, no installer.

To make it appear in the **Scripts** menu, copy the file into `Presets/Scripts` inside your Photoshop install folder.

## Lite vs Pro

| | Lite (free) | Pro ($29) |
|---|---|---|
| Watermark the open document | ✅ | ✅ |
| Text watermark, corner + opacity | ✅ | ✅ |
| **Batch an entire folder** | — | ✅ |
| **Logo image watermark** | — | ✅ |
| **Automatic date (today or EXIF)** | — | ✅ |
| **Tiling across the whole frame** | — | ✅ |
| **Saved presets** | — | ✅ |
| **Non-destructive output to a separate folder** | — | ✅ |
| **One-page install guide + troubleshooting** | — | ✅ |
| License | MIT | Commercial |

**[Get PhotoStamp Pro — $29, instant download](https://skyforer.gumroad.com/l/photostamp-pro)**

## How the Pro batch works

1. **Source folder** — JPEG, PNG, TIFF, PSD.
2. **Output folder** — stamped copies land here; **originals are never modified**.
3. **Stamp** — logo image, automatic date (today or the photo's EXIF capture date), or both.
4. **Look** — opacity, size, margin, rotation, and optional diagonal tiling.
5. **Run** — the script walks the folder, writes `<name>-stamped.jpg`, and drops a log file with any failures.

## Compatibility

- Photoshop CC 2018 or newer (Windows, macOS)
- ExtendScript (the same automation engine behind `File → Automate → Batch`)
- No external dependencies, no network calls

## FAQ

**Do my photos leave my computer?**
No. Everything runs inside your own Photoshop.

**Is Pro a subscription?**
No. One payment, permanent copy, lifetime updates for v1.x.

**Can I watermark without Photoshop?**
This is a Photoshop script. For a browser-based alternative see the landing page below.

**Why is Lite limited?**
Lite exists so you can verify the approach and the code quality for free. The folder batch, presets, and tiling are what Pro sells.

## Landing page

- Product & pricing: <https://skyforer.gumroad.com/l/photostamp-pro>
- Landing page: <https://skyforrun.github.io/photostamp-pro/>

## License

`lite/PhotoStamp-Lite.jsx` is MIT licensed — see [LICENSE](LICENSE).
`PhotoStamp-Pro.jsx` is commercial software, sold through Gumroad. Please don't redistribute it.
