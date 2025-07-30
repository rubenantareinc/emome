# Emome Marketing Website

Welcome to the source code for **Emome**’s marketing site.  This static website introduces Emome’s emotional‑logging platform, explains its core features, tells the story of its creation, lets visitors experiment with a scoring demo, and provides ways to get in touch or join the early access waitlist.  Everything lives in a single set of HTML, CSS and JavaScript files, so there is no backend or build step required.

## 🌐 Live preview locally

1. **Unzip the download** and open the `emome_site` folder.
2. Double‑click `index.html` or open it in your preferred browser.  All navigation links are relative, so you can explore the entire site offline.  For the best experience you may also run a tiny local server (e.g. run `python -m http.server` in the folder) and visit `http://localhost:8000` in your browser.
3. The site is fully responsive – try resizing your browser window or viewing it on your phone.

> **Note:** the contact and waitlist forms use `mailto:` links to open your default email client.  Some browsers (including the one used to generate this demo) may block these links; on your personal machine they should open your mail client as expected.  A thank‑you message will appear on the page even if the mail client fails to open.

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).  Do **not** initialise it with a README – you will add one later.
2. Copy all files and folders inside the `emome_site` directory into the root of your repository.  Preserve the folder structure (`assets/`, `js/` etc.).  Do **not** place the files in a subfolder; GitHub Pages expects your `index.html` at the project root.
3. Commit and push the files to the `main` (or `master`) branch of your repository.
4. In your repository settings, scroll to the **Pages** section.  Select the branch you just pushed (e.g. `main`) and choose “/** (root)” for the folder.  Save the settings.
5. GitHub will build your site and provide a URL (typically `https://your-username.github.io/your‑repo`).  Within a few minutes your Emome marketing site will be live!

## 🧩 Project structure

```
emome_site/
├── index.html          # Home page with hero section and overview
├── features.html       # Product/Features page detailing six key features
├── demo.html           # Interactive tracker demo that calculates scores
├── founder.html        # Founder story page with starry background
├── contact.html        # Contact form and social links
├── waitlist.html       # Join‑our‑waitlist sign‑up page
├── assets/
│   ├── style.css       # Custom CSS variables, buttons, cards, stars and modal styles
│   └── images/         # Provided images (logos and founder photo) optimised for the web
└── js/
    └── script.js       # JavaScript for navigation toggling, form handling and the demo logic
```

### Customising content and style

* **Text** – all page copy is in the HTML files.  Open the relevant file and edit the headings or paragraphs to suit your messaging.  Be careful to maintain the semantic structure (e.g. keep `h1`, `h2` elements for headings).
* **Images** – the Emome logo, Antare Inc. logo and founder photo live in `assets/images/`.  Replace these files with your own images while keeping the same filenames to avoid editing the HTML.  For additional icons, consider using [Font Awesome Free](https://fontawesome.com/) – the site already includes it via CDN.
* **Colours** – the accent colour sampled from the Emome logo is defined as a CSS variable (`--color-accent`) in `assets/style.css`.  Adjust this value to change the primary hue across buttons, links and borders.  The lighter shade used for backgrounds (`--color-accent-light`) can also be tweaked.
* **Animations** – subtle micro‑animations (such as the twinkling stars on the Founder page and the sliding radar dot on the Demo page) are defined in `assets/style.css` and `js/script.js`.  Feel free to adjust durations or easing curves to your preference.

### Integrating a real form service

Currently the contact and waitlist forms trigger your email client via a `mailto:` link.  To collect submissions automatically you can swap this out for a free service like [Formspree](https://formspree.io/) or [Getform](https://getform.io/):

1. Sign up for the service and create a new form endpoint.
2. In the HTML file (`contact.html` or `waitlist.html`), change the `<form>` tag’s `action` attribute to the endpoint URL and remove the `onsubmit` handler that calls `mailto:`.
3. Adjust the thank‑you message logic in `js/script.js` or the HTML as needed (Formspree/Getform can redirect to a thank‑you page for you).

## 📖 Inspiration and credits

This site’s layout, tone and page content follow the specifications from the provided research brief: minimal, modern and warm design inspired by the likes of Apple and Notion, with a focus on readability and emotional resonance【459090789490506†L632-L704】.  The features page outlines six core capabilities—emotional logging, weighted scoring, relationship radar, timeline view, AI summaries & alerts, and privacy assurance—distilled from the brief’s descriptions【459090789490506†L818-L923】.  The founder page uses a starry background and narrative extracted from the founder’s story in the brief【459090789490506†L947-L1055】.  The demo implements a simplified scoring algorithm based on intensity and duration as described in the specification【459090789490506†L1090-L1190】.  Forms and waitlist instructions also adhere closely to the brief’s guidance【459090789490506†L1330-L1439】.

If you have any questions or feedback, please contact us at **contactemome@gmail.com**.  Enjoy exploring Emome!