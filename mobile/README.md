# Tugma Face Compare (mobile web app)

Mobile app for comparing two faces. Two modes:

- **Sa phone mismo** – runs fully in the browser with face-api.js (`face-api.js` + `model/`). No server; photos never leave the device. This is a lighter model than CompreFace's.
- **CompreFace server** – sends both photos to `POST /api/v1/verification/verify` on your CompreFace server using a Verification service API key.

## Hosting

Serve this folder from any static HTTPS host (GitHub Pages, Netlify, or your CompreFace nginx). Then open it on the phone and choose "Add to Home screen" to install it.

For server mode the CompreFace address must be HTTPS when the app itself is served over HTTPS (browsers block HTTP calls from HTTPS pages).

`app.html` is the page body; `index.html` is the same content wrapped in a full HTML document. Edit `app.html` and regenerate `index.html` if you change it.
