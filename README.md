# Metaform Website - Setup & Deployment Guide

Welcome! You now have a fully functional, professionally designed website ready to deploy.

## What You Have

### Files:
1. **index.html** — Main website file (standalone, ready to deploy)
2. **metaform-website.jsx** — React component version (for developers/advanced users)
3. **README.md** — This file

---

## Quick Start: Deploy Now

### Option A: Simple Upload (Recommended)

1. **Download `index.html`** to your computer
2. **Open your hosting control panel** (via your hosting provider's website)
3. **Find "File Manager"** or **FTP**
4. **Upload `index.html`** to the root directory (`/public_html` or `/www`)
5. **Visit your domain** — site is now live

### Option B: Using FTP

1. Download an FTP client (e.g., FileZilla, WinSCP)
2. Enter your hosting credentials (you have these from when you set up hosting)
3. Connect to your server
4. Upload `index.html` to the root directory
5. Site goes live immediately

---

## How to Update Content

### Editing the Website

The `index.html` file is plain HTML — you can edit it in any text editor:

**To change text:**
- Open `index.html` in a text editor (Notepad, VS Code, Sublime Text, etc.)
- Find the text you want to change
- Edit it, save, upload the updated file

**Common edits:**

**Change hero headline:**
Search for `"Creating exceptional <span class="font-semibold">real estate</span>"` and replace

**Change about section:**
Search for `"About MetaForm"` and edit the paragraphs below it

**Change contact email:**
Search for `info@metaform.co.uk` and replace with your email

**Change phone:**
Search for `+44 (0)203 002 0218` and replace

---

## Adding Project Images

Right now, projects use emoji placeholders (🏛️, 🏗️, etc.).

### To add real project images:

1. **Find the project section** in `index.html` (search for "Kinnerton St Houses")

2. **Replace the emoji** with an image:
   
   **Current:**
   ```html
   <div class="bg-gray-100 aspect-video flex items-center justify-center text-6xl group-hover:bg-gray-200 transition">
       🏛️
   </div>
   ```

   **New:**
   ```html
   <div class="bg-gray-100 aspect-video overflow-hidden group-hover:opacity-90 transition">
       <img src="kinnerton-image.jpg" alt="Kinnerton St Houses" class="w-full h-full object-cover">
   </div>
   ```

3. **Upload your image** to your hosting (same folder as `index.html`)

4. **Update the src path** to match your image filename

---

## Adding More Projects

The projects section shows 4 featured projects. To add more:

1. Find the "Featured Projects" section in `index.html`
2. Copy one entire project block (from `<div class="group border...">` to `</div>`)
3. Paste it below the last project
4. Update the project name, location, description, and figures
5. Save and upload

---

## Customizing the Design

### Colors
The site uses black and white. To change:
- `bg-black` = black background → change to `bg-blue-900` (or any Tailwind color)
- `text-white` = white text → change to `text-blue-50`

### Fonts
Currently uses system fonts. To add custom fonts:
1. Add this to the `<head>` section before `</head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YOUR-FONT-NAME&display=swap" rel="stylesheet">
   ```
2. Update the `<style>` section

### Spacing
Adjust padding/margins by changing numbers like `py-20` (padding), `px-6` (horizontal padding)

---

## Contact Form

The contact form currently logs messages to browser console. To make it functional:

**Option A: Use Formspree (Free, Easy)**
1. Go to https://formspree.io
2. Create an account
3. Find your Formspree form ID
4. In `index.html`, find `<form id="contactForm">`
5. Change to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

**Option B: Use your hosting's email script**
Contact your hosting provider for setup instructions

---

## Mobile Responsiveness

The site is fully responsive (works on phone, tablet, desktop). Test by:
1. Opening the site on your phone
2. Resizing your browser window

All text scales automatically — no changes needed.

---

## SEO & Performance

The site already includes:
- ✓ Meta descriptions
- ✓ Open Graph tags (for social media preview)
- ✓ Mobile optimization
- ✓ Fast loading (no images = quick load)

To improve further:
- Replace emoji with real project images (they'll be indexed by Google)
- Add structured data if needed
- Monitor with Google Search Console (free)

---

## Common Issues & Fixes

### Site shows blank page
- Refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check file is named `index.html` (not `Index.html`)
- Verify file is in the root directory

### Styling looks broken
- Clear browser cache (Ctrl+Shift+Delete)
- Verify all files are uploaded
- Check internet connection (Tailwind CDN needs to load)

### Images not showing
- Verify image files are uploaded to same folder as `index.html`
- Check image filename is spelled correctly in the HTML
- Ensure image filename has correct extension (.jpg, .png, etc.)

---

## Next Steps

1. **Download `index.html`**
2. **Upload to your hosting**
3. **Test the site** — visit your domain
4. **Add project images** as you have them ready
5. **Update contact details** with your email/phone
6. **Share with clients/investors**

---

## Support

If you need to make more complex changes:
- The site uses **Tailwind CSS** (for styling) — see tailwindcss.com
- The site uses **HTML** and **JavaScript** (standard web technologies)
- Consider hiring a developer for major customizations

---

## Questions?

- **Deploying?** Contact your hosting provider's support
- **Editing HTML?** Use a text editor like VS Code (free)
- **Design changes?** Reference tailwindcss.com for class names
- **Building on this?** The React version (`metaform-website.jsx`) is available for developers

---

**Good luck with Metaform! 🏗️**
