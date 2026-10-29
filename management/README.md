# 📚 Athena LMS - College Library Management System

A modern, responsive, and intuitive **Library Management System** built using **HTML5, CSS3, and JavaScript**. Designed with a premium, minimal light aesthetic inspired by academic libraries—featuring white, navy blue, and soft blue accents.

---

## 🌟 Key Highlights & Features

### 1. 🎨 Premium Minimalist Design & Theme
- **Color Palette**:
  - **Navy Blue**: `#0F172A`, `#1E293B`, `#1E40AF`
  - **Soft Blue**: `#0284C7`, `#38BDF8`, `#EFF6FF`, `#BAE6FD`
  - **Clean White**: `#FFFFFF`, `#F8FAFC`
- **Typography**: Clean hierarchy with **Plus Jakarta Sans** and modern system fonts.
- **Micro-interactions**: Subtle drop shadows, 3D book spine perspective cards, hover lifts, pulse indicators, and smooth tab transitions.
- **100% Responsive**: Tailored for Desktop (>1200px), Tablets (768px - 1024px), and Mobile (<768px) with an off-canvas drawer navigation.

---

### 2. 🗂️ Website Sections & Architecture

| Section | Description |
| :--- | :--- |
| **📊 Dashboard** | Real-time statistics (Total Books, Available Stock, Issued Books, Registered Students), recently added books, live circulation activity timeline, and departmental catalog breakdown. |
| **📚 All Books** | Comprehensive book repository with instant search by title, author, category, or ISBN. Features a **Grid View** & **Table View** switcher, live stock indicators, and details modal. |
| **➕ Add New Book** | Structured cataloging form with mandatory field validation, category selection, shelf location tagging, and a **live real-time book card preview**. |
| **🔄 Issue Books** | Circulation terminal to check out books to registered students with auto-calculated return due dates (14, 21, or 30 days) and student quota enforcement. |
| **📥 Return Books** | Check-in desk with automated overdue fine calculation ($0.50/day), book condition assessment (Good, Minor Wear, Damaged), and an official **Return Clearance Receipt**. |
| **🎓 Students** | Student directory with department breakdown, semester info, active borrowing count, and a **Register Student** modal. |
| **📈 Reports** | Circulation analytics, weekly borrowing CSS bar charts, top 5 most read titles, and overdue borrowers defaulter list with simulated email reminders. |
| **⚙️ Settings** | Configurable library rules (loan duration, fine rates, max quota) and college profile metadata. |

---

## 🚀 How to Run the Project

No build step or dependencies required!

1. Open the project folder:
   ```
   c:\Users\animation_lab\Desktop\management
   ```
2. Double-click **`index.html`** or right-click and choose **"Open with Google Chrome"** (or Edge/Firefox/Safari).
3. Alternatively, if you have VS Code installed, use the **Live Server** extension.

---

## ⌨️ Keyboard Shortcuts & Quick Actions
- Press **`/`** from anywhere on the page to instantly focus the global search bar.
- Press **`Esc`** to quickly close any open modal window.
- Click the **Quick Issue** button in the top bar to jump straight to book checkout.
- Click the **Bell Icon** to inspect real-time library alerts and overdue notices.

---

## 📁 File Structure
```text
management/
│
├── index.html        # Clean, accessible semantic HTML5 structure
├── style.css         # Modern CSS3 with CSS variables, Flexbox & Grid
├── app.js            # In-memory reactive database, event handlers, modals
└── README.md         # Project documentation & presentation guide
```

