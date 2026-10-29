Label X Designs - Website Prototype
===================================

Kaise chalayein:
  index.html par double-click karein (browser mein khul jayega).

Folder:
  index.html      - page ka structure (HTML)
  css/style.css   - design, colours, responsive aur animations
  js/main.js      - products list, filter, search, cart, opening animation
  images/logo.png - Label X logo

Products / prices badalne ke liye:
  js/main.js mein "const P=[" dhoondhein. Har product ka name, set, price yahan hai.

Asli photo lagane ke liye:
  Photo images/ folder mein rakhein aur us product mein
  art:()=>... ki jagah  svg:'<img src="images/photo.jpg" alt="">'  likhein
  (aur "P.forEach(p=>p.svg=p.art())" line ko  "P.forEach(p=>{if(!p.svg)p.svg=p.art()})" kar dein).

Colours badalne ke liye:
  css/style.css ke upar :root mein --navy, --red, --maroon, --blush, --beige.

Note: prices, phone number aur email abhi placeholder hain.
Fonts Google Fonts se aate hain, isliye internet zaroori hai.
