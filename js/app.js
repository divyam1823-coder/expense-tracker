// Expense Tracker - Shared Data & Logic
const STORAGE_KEY = 'simple_expense_tracker_data';

// Default initial demo data
const DEFAULT_TRANSACTIONS = [
  {
    id: 'tx-1',
    title: 'Monthly Salary',
    amount: 3200,
    type: 'income',
    category: 'Salary',
    date: '2026-09-01',
    notes: 'Direct deposit from employer'
  },
  {
    id: 'tx-2',
    title: 'Apartment Rent',
    amount: 1100,
    type: 'expense',
    category: 'Housing',
    date: '2026-09-02',
    notes: 'September rent'
  },
  {
    id: 'tx-3',
    title: 'Grocery Store Run',
    amount: 145.50,
    type: 'expense',
    category: 'Food',
    date: '2026-09-03',
    notes: 'Vegetables, milk, fruits'
  },
  {
    id: 'tx-4',
    title: 'Freelance Design Gig',
    amount: 450,
    type: 'income',
    category: 'Freelance',
    date: '2026-09-04',
    notes: 'Logo design project'
  },
  {
    id: 'tx-5',
    title: 'Electricity & Internet',
    amount: 92.20,
    type: 'expense',
    category: 'Utilities',
    date: '2026-09-05',
    notes: 'Monthly utility bills'
  },
  {
    id: 'tx-6',
    title: 'Coffee & Snacks',
    amount: 18.75,
    type: 'expense',
    category: 'Food',
    date: '2026-09-06',
    notes: 'Cafe with colleague'
  }
];

// Category Icons Mapping
const CATEGORY_ICONS = {
  'Salary': '💰',
  'Freelance': '💻',
  'Investments': '📈',
  'Other Income': '💵',
  'Food': '🍔',
  'Housing': '🏠',
  'Transportation': '🚗',
  'Utilities': '💡',
  'Entertainment': '🎬',
  'Shopping': '🛍️',
  'Health': '💊',
  'Other Expense': '📦'
};

// Retrieve all transactions
function getTransactions() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TRANSACTIONS));
    return DEFAULT_TRANSACTIONS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Error parsing stored transactions:', e);
    return [];
  }
}

// Save a new transaction
function addTransaction(tx) {
  const transactions = getTransactions();
  tx.id = 'tx-' + Date.now();
  transactions.unshift(tx);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  return tx;
}

// Delete a transaction by ID
function deleteTransaction(id) {
  let transactions = getTransactions();
  transactions = transactions.filter(t => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

// Format numbers as currency ($1,234.56)
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Format date for readable display (e.g. Sep 05, 2026)
function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  return dateStr;
}

// Calculate summary totals
function calculateSummary(transactions = getTransactions()) {
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach(t => {
    const amt = parseFloat(t.amount) || 0;
    if (t.type === 'income') {
      totalIncome += amt;
    } else {
      totalExpense += amt;
    }
  });

  const balance = totalIncome - totalExpense;
  return { balance, totalIncome, totalExpense, count: transactions.length };
}

// Show a transient toast message
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Mobile Nav Toggle setup
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Highlight active page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
});
