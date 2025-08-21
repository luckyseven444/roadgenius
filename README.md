# Link Analyzer

A simple tool to analyze and parse HTML files. You can either drag and drop an `.html` file or paste/type the full HTML code into the provided text area.

---

## 🚀 How to Run

### Option 1: Run via Local Server (Recommended to avoid CORS issues)
1. Copy the project files (including `index.html`) into the `www` directory of your server environment:
   - **Laragon:** `C:\laragon\www\`
   - **XAMPP:** `C:\xampp\htdocs\`
2. Make sure there are no other `index.html` files in the `www` (or `htdocs`) directory that could conflict.
3. Start your local server (Apache in XAMPP, Laragon, etc.).
4. Open your browser and visit:
   - [http://localhost/index.html](http://localhost/index.html)

Now you can drag and drop your `.html` file into the page for parsing.

---

### Option 2: Run from File System
1. Open `index.html` directly in your browser by double-clicking it.  
   ⚠️ **Note:** Due to CORS restrictions, drag-and-drop parsing will not work.  
   Instead, you’ll need to **copy and paste** (or manually type) the entire HTML content into the provided text area.

---

## ✨ If I Had More Time
- Work on resolving **CORS issues** so that the app can fully support drag-and-drop functionality even when opened directly from the file system.
- Add more robust error handling for invalid or incomplete HTML.
- Improve UI/UX for a smoother parsing experience.
- Would convert the vanila js to React js 

---

## 🛠️ Tech Used
- **HTML5**
- **JavaScript**
- **CSS**

