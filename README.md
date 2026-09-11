# 💳 TrackWise - Simple Multi-Page Expense Tracker

A clean, responsive, multi-page Expense Tracker web application built with vanilla HTML5, CSS3, and JavaScript. All data is persisted in the browser's `localStorage`, allowing you to record, view, filter, and analyze expenses seamlessly across all pages.

---


## 📄 Pages Included

1. **Dashboard (`index.html`)**
   - Summary metric cards: Total Balance, Total Income, and Total Expense.
   - Quick action banner to log new transactions quickly.
   - Recent 5 transactions preview with instant status and category badges.

2. **All Expenses & Transactions (`expenses.html`)**
   - Full list of all stored transactions.
   - Real-time search bar (by name or note).
   - Filter by transaction type (**All**, **Expenses Only**, **Income Only**).
   - Filter by specific Category.
   - Delete transactions with instant update.

3. **Add Transaction (`add-expense.html`)**
   - Toggle between **Expense** (with expense categories) and **Income** (with income categories).
   - Form inputs for Title, Amount, Category, Date (defaults to today), and optional Notes.
   - Form validation and instant notification toast.

4. **Reports & Breakdown (`reports.html`)**
   - Net savings & calculated savings rate percentage.
   - Visual percentage bar breakdown of spending across expense categories.
   - Visual percentage bar breakdown of income sources.
   - One-click "Reset Demo Data" button.

---

## 🎨 Design Highlights
- Modern indigo/slate color scheme with emerald (income) and coral (expense) accents.
- Responsive layout supporting desktop, tablet, and mobile screens.
- Zero external dependencies or CDNs required.
