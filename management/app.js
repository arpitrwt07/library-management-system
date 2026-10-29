/**
 * ATHENA LMS - Modern College Library Management System
 * Interactive Logic & Data Engine
 * Version: 2.4.0
 */

// ==========================================
// 1. Initial State & In-Memory Data Store
// ==========================================

const LibraryDB = {
  // Books Collection
  books: [
    {
      id: "BK-1001",
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      isbn: "978-0132350884",
      category: "Computer Science",
      publisher: "Prentice Hall (2008)",
      shelf: "Rack CS-01 / Shelf A",
      totalCopies: 6,
      availableCopies: 4,
      language: "English - Paperback",
      description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code.",
      dateAdded: "2026-10-15"
    },
    {
      id: "BK-1002",
      title: "Introduction to Algorithms (CLRS), 4th Edition",
      author: "Thomas H. Cormen, Charles E. Leiserson",
      isbn: "978-0262046305",
      category: "Computer Science",
      publisher: "MIT Press (2022)",
      shelf: "Rack CS-04 / Shelf B",
      totalCopies: 8,
      availableCopies: 6,
      language: "English - Hardcover",
      description: "A comprehensive update of the leading algorithms text, with new chapters on bipartite matching, online algorithms, machine learning, and new working code examples.",
      dateAdded: "2026-10-18"
    },
    {
      id: "BK-1003",
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      isbn: "978-0134610993",
      category: "Computer Science",
      publisher: "Pearson (2020)",
      shelf: "Rack CS-08 / Shelf C",
      totalCopies: 5,
      availableCopies: 2,
      language: "English - Hardcover",
      description: "The authoritative, most widely-used introduction to AI, synthesizing modern deep learning, probabilistic reasoning, robotics, and ethical computing considerations.",
      dateAdded: "2026-10-20"
    },
    {
      id: "BK-1004",
      title: "Microelectronic Circuits (Analysis & Design)",
      author: "Adel S. Sedra, Kenneth C. Smith",
      isbn: "978-0190853464",
      category: "Electrical Engineering",
      publisher: "Oxford University Press",
      shelf: "Rack EE-02 / Shelf B",
      totalCopies: 4,
      availableCopies: 1,
      language: "English - Hardcover",
      description: "The gold standard textbook for electrical and computer engineering students studying analog and digital electronic circuits, semiconductors, and amplifier systems.",
      dateAdded: "2026-10-08"
    },
    {
      id: "BK-1005",
      title: "Introduction to Linear Algebra, 5th Edition",
      author: "Gilbert Strang",
      isbn: "978-0980232776",
      category: "Mathematics",
      publisher: "Wellesley-Cambridge",
      shelf: "Rack MA-01 / Shelf D",
      totalCopies: 7,
      availableCopies: 5,
      language: "English - Hardcover",
      description: "Gilbert Strang's clear and lively explanation of matrix operations, vector spaces, eigenvalues, singular value decomposition, and computational linear algebra.",
      dateAdded: "2026-10-12"
    },
    {
      id: "BK-1006",
      title: "Principles of Corporate Finance, 13th Edition",
      author: "Richard Brealey, Stewart Myers",
      isbn: "978-1260013900",
      category: "Business & Finance",
      publisher: "McGraw-Hill",
      shelf: "Rack BF-03 / Shelf A",
      totalCopies: 4,
      availableCopies: 3,
      language: "English - Paperback",
      description: "Describes the theory and practice of corporate finance, explaining how financial managers choose investment projects and organize funding portfolios.",
      dateAdded: "2026-10-05"
    },
    {
      id: "BK-1007",
      title: "Principles of Neural Science, 6th Edition",
      author: "Eric R. Kandel, James H. Schwartz",
      isbn: "978-1259642234",
      category: "Medical Sciences",
      publisher: "McGraw-Hill Medical",
      shelf: "Rack MS-05 / Shelf C",
      totalCopies: 3,
      availableCopies: 0,
      language: "English - Hardcover",
      description: "An unassailable survey of cellular and molecular neurobiology, cognitive systems, sensory perception, and neurodegenerative disorders.",
      dateAdded: "2026-09-28"
    },
    {
      id: "BK-1008",
      title: "To Kill a Mockingbird (Critical Study Edition)",
      author: "Harper Lee",
      isbn: "978-0060935467",
      category: "Literature",
      publisher: "Harper Perennial",
      shelf: "Rack LT-02 / Shelf E",
      totalCopies: 5,
      availableCopies: 4,
      language: "English - Paperback",
      description: "A Pulitzer Prize-winning masterpiece exploring human nature, empathy, racial injustice, and innocence through the observant eyes of Scout Finch in Alabama.",
      dateAdded: "2026-10-01"
    },
    {
      id: "BK-1009",
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      isbn: "978-0201633610",
      category: "Computer Science",
      publisher: "Addison-Wesley",
      shelf: "Rack CS-02 / Shelf B",
      totalCopies: 5,
      availableCopies: 3,
      language: "English - Hardcover",
      description: "Captures a wealth of experience about the design of object-oriented software, detailing 23 classic design patterns that solve recurring software architectural dilemmas.",
      dateAdded: "2026-10-22"
    }
  ],

  // Registered College Students
  students: [
    {
      id: "APX-2024-104",
      name: "Liam Patel",
      dept: "Computer Science",
      year: "3rd Year (Semester 5)",
      email: "liam.patel@apexinstitute.edu",
      phone: "+1 (555) 321-9842",
      borrowedCount: 1,
      status: "Active"
    },
    {
      id: "APX-2024-082",
      name: "Sophia Chen",
      dept: "Computer Science",
      year: "4th Year (Semester 7)",
      email: "sophia.chen@apexinstitute.edu",
      phone: "+1 (555) 432-8711",
      borrowedCount: 2,
      status: "Overdue"
    },
    {
      id: "APX-2024-145",
      name: "Marcus Brody",
      dept: "Electrical Engineering",
      year: "2nd Year (Semester 3)",
      email: "m.brody@apexinstitute.edu",
      phone: "+1 (555) 789-2231",
      borrowedCount: 1,
      status: "Active"
    },
    {
      id: "APX-2024-210",
      name: "Elena Rostova",
      dept: "Mathematics",
      year: "3rd Year (Semester 6)",
      email: "elena.r@apexinstitute.edu",
      phone: "+1 (555) 654-9988",
      borrowedCount: 1,
      status: "Active"
    },
    {
      id: "APX-2024-318",
      name: "Devon Washington",
      dept: "Business Administration",
      year: "1st Year (Semester 2)",
      email: "devon.w@apexinstitute.edu",
      phone: "+1 (555) 876-1122",
      borrowedCount: 0,
      status: "Active"
    },
    {
      id: "APX-2024-402",
      name: "Aria Montgomery",
      dept: "Medical Sciences",
      year: "4th Year (Semester 8)",
      email: "aria.m@apexinstitute.edu",
      phone: "+1 (555) 901-3344",
      borrowedCount: 1,
      status: "Overdue"
    }
  ],

  // Active Loans & Circulation Transactions
  activeLoans: [
    {
      loanId: "LN-8401",
      bookId: "BK-1007",
      bookTitle: "Principles of Neural Science, 6th Edition",
      studentId: "APX-2024-402",
      studentName: "Aria Montgomery",
      issueDate: "2026-10-05",
      dueDate: "2026-10-19",
      isOverdue: true,
      overdueDays: 10,
      fine: 5.00,
      notes: "Neurology clinical thesis study"
    },
    {
      loanId: "LN-8402",
      bookId: "BK-1003",
      bookTitle: "Artificial Intelligence: A Modern Approach",
      studentId: "APX-2024-082",
      studentName: "Sophia Chen",
      issueDate: "2026-10-10",
      dueDate: "2026-10-24",
      isOverdue: true,
      overdueDays: 5,
      fine: 2.50,
      notes: "Senior AI Capstone project"
    },
    {
      loanId: "LN-8403",
      bookId: "BK-1001",
      bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
      studentId: "APX-2024-104",
      studentName: "Liam Patel",
      issueDate: "2026-10-22",
      dueDate: "2026-11-05",
      isOverdue: false,
      overdueDays: 0,
      fine: 0.00,
      notes: "Software engineering lab assignment"
    },
    {
      loanId: "LN-8404",
      bookId: "BK-1004",
      bookTitle: "Microelectronic Circuits (Analysis & Design)",
      studentId: "APX-2024-145",
      studentName: "Marcus Brody",
      issueDate: "2026-10-24",
      dueDate: "2026-11-07",
      isOverdue: false,
      overdueDays: 0,
      fine: 0.00,
      notes: "VLSI Circuit design module"
    },
    {
      loanId: "LN-8405",
      bookId: "BK-1005",
      bookTitle: "Introduction to Linear Algebra, 5th Edition",
      studentId: "APX-2024-210",
      studentName: "Elena Rostova",
      issueDate: "2026-10-20",
      dueDate: "2026-11-03",
      isOverdue: false,
      overdueDays: 0,
      fine: 0.00,
      notes: "Pure math honors research"
    }
  ],

  // Historical Completed Returns
  returnedHistory: [
    {
      bookTitle: "Computer Networks, 6th Edition",
      studentName: "Alex Rivera (APX-2024-04)",
      returnedOn: "2026-10-29 10:15 AM",
      finePaid: "$0.00",
      condition: "Good"
    },
    {
      bookTitle: "Calculus: Early Transcendentals",
      studentName: "Priya Sharma (APX-2024-91)",
      returnedOn: "2026-10-28 04:30 PM",
      finePaid: "$1.50 (Overdue)",
      condition: "Good"
    },
    {
      bookTitle: "Financial Accounting Theory",
      studentName: "Devon Washington (APX-2024-318)",
      returnedOn: "2026-10-27 11:20 AM",
      finePaid: "$0.00",
      condition: "Good"
    }
  ],

  // Recent Activity Feed
  activities: [
    {
      type: "returned",
      icon: "fa-solid fa-arrow-rotate-left",
      badgeClass: "returned",
      title: "Book Returned: Computer Networks",
      student: "Alex Rivera (APX-2024-04)",
      timeAgo: "45 mins ago",
      timestamp: "Today at 10:15 AM"
    },
    {
      type: "borrowed",
      icon: "fa-solid fa-hand-holding-hand",
      badgeClass: "borrowed",
      title: "Book Checked Out: Microelectronic Circuits",
      student: "Marcus Brody (APX-2024-145)",
      timeAgo: "2 hours ago",
      timestamp: "Today at 08:45 AM"
    },
    {
      type: "added",
      icon: "fa-solid fa-circle-plus",
      badgeClass: "added",
      title: "New Catalog Addition: Design Patterns",
      student: "Cataloged by Prof. Eleanor",
      timeAgo: "Yesterday",
      timestamp: "Oct 28 at 03:15 PM"
    },
    {
      type: "overdue",
      icon: "fa-solid fa-triangle-exclamation",
      badgeClass: "overdue",
      title: "Overdue Penalty Logged: Principles of Neural Science",
      student: "Aria Montgomery (APX-2024-402) - 10 Days",
      timeAgo: "2 days ago",
      timestamp: "Oct 27 at 09:00 AM"
    }
  ],

  // Settings Configuration
  settings: {
    loanDays: 14,
    maxBooks: 3,
    fineRate: 0.50,
    gracePeriod: 1,
    collegeName: "Apex Institute of Technology & Science",
    libraryName: "Athena Central Academic Library"
  }
};


// ==========================================
// 2. Navigation & View Routing Engine
// ==========================================

window.switchTab = function(viewName) {
  // Update sidebar active link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.dataset.view === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Switch Active View Section
  const views = document.querySelectorAll('.app-view');
  views.forEach(view => {
    if (view.id === `view-${viewName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  // Update hash
  window.location.hash = viewName;

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hook for view-specific refreshes
  if (viewName === 'all-books') {
    renderBooksCatalog();
  } else if (viewName === 'issue-books') {
    populateIssueDropdowns();
    renderIssuedBooksTable();
  } else if (viewName === 'return-books') {
    populateReturnSelect();
    renderReturnedHistoryTable();
  } else if (viewName === 'students') {
    renderStudentsTable();
  } else if (viewName === 'reports') {
    renderReportsView();
  } else if (viewName === 'dashboard') {
    renderDashboard();
  }
};


// ==========================================
// 3. UI Helper & Notification Toasts
// ==========================================

function showToast(message, type = 'info', title = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconMarkup = '<i class="fa-solid fa-circle-info"></i>';
  if (type === 'success') iconMarkup = '<i class="fa-solid fa-circle-check text-emerald"></i>';
  if (type === 'danger') iconMarkup = '<i class="fa-solid fa-circle-exclamation text-danger"></i>';
  if (type === 'warning') iconMarkup = '<i class="fa-solid fa-triangle-exclamation text-amber"></i>';

  toast.innerHTML = `
    <div style="font-size: 1.15rem;">${iconMarkup}</div>
    <div style="flex: 1;">
      ${title ? `<strong style="display:block; margin-bottom:2px; font-size:0.88rem;">${title}</strong>` : ''}
      <p style="margin: 0; line-height: 1.35; font-size: 0.82rem;">${message}</p>
    </div>
    <button class="btn-icon" style="color: rgba(255,255,255,0.7); width:24px; height:24px;" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}


// ==========================================
// 4. Modal System Controllers
// ==========================================

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
};

// Global click outside modal to close & Escape key
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.modal-backdrop.show');
    openModals.forEach(m => m.classList.remove('show'));
    document.body.style.overflow = '';
  }
});


// ==========================================
// 5. Dashboard Renderer
// ==========================================

function renderDashboard() {
  // 1. Compute stats
  const totalBooks = LibraryDB.books.reduce((acc, b) => acc + b.totalCopies, 0);
  const availableBooks = LibraryDB.books.reduce((acc, b) => acc + b.availableCopies, 0);
  const issuedBooks = totalBooks - availableBooks;
  const overdueCount = LibraryDB.activeLoans.filter(l => l.isOverdue).length;
  const totalStudents = LibraryDB.students.length + 834; // base enrolled simulation

  // Update DOM metrics
  const statTotal = document.getElementById('statTotalBooks');
  const statAvail = document.getElementById('statAvailableBooks');
  const statIssued = document.getElementById('statIssuedBooks');
  const statStudents = document.getElementById('statTotalStudents');
  const navTotalBooksBadge = document.getElementById('navTotalBooksBadge');
  const bannerOverdue = document.getElementById('bannerOverdueCount');

  if (statTotal) statTotal.textContent = totalBooks.toLocaleString();
  if (statAvail) statAvail.textContent = availableBooks.toLocaleString();
  if (statIssued) statIssued.textContent = issuedBooks.toLocaleString();
  if (statStudents) statStudents.textContent = totalStudents.toLocaleString();
  if (navTotalBooksBadge) navTotalBooksBadge.textContent = LibraryDB.books.length.toLocaleString();
  if (bannerOverdue) bannerOverdue.textContent = `${overdueCount} overdue returns`;

  // Mini progress bar in stats
  const availPercent = Math.round((availableBooks / totalBooks) * 100);
  const issuedPercent = 100 - availPercent;
  const statAvailProg = document.getElementById('statAvailableProgress');
  const statAvailLbl = document.getElementById('statAvailablePercent');
  const statIssuedProg = document.getElementById('statIssuedProgress');
  const statOverdueSmall = document.getElementById('statOverdueSmall');

  if (statAvailProg) statAvailProg.style.width = `${availPercent}%`;
  if (statAvailLbl) statAvailLbl.textContent = `${availPercent}% of total stock`;
  if (statIssuedProg) statIssuedProg.style.width = `${issuedPercent}%`;
  if (statOverdueSmall) statOverdueSmall.textContent = overdueCount;

  // 2. Render Recently Added Books
  const recentContainer = document.getElementById('recentBooksContainer');
  if (recentContainer) {
    const recentList = [...LibraryDB.books].slice(0, 4);
    recentContainer.innerHTML = recentList.map(book => {
      const isAvailable = book.availableCopies > 0;
      return `
        <div class="recent-book-row">
          <div class="book-brief">
            <div class="book-thumb">
              <i class="fa-solid fa-book"></i>
            </div>
            <div class="book-info-text">
              <h4>${escapeHtml(book.title)}</h4>
              <p>${escapeHtml(book.author)} &bull; ${escapeHtml(book.category)}</p>
              <div class="book-meta-chips">
                <span><i class="fa-solid fa-barcode"></i> ${escapeHtml(book.isbn)}</span>
                <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(book.shelf)}</span>
              </div>
            </div>
          </div>
          <div class="book-row-actions">
            <span class="badge ${isAvailable ? 'badge-success' : 'badge-danger'}">
              ${isAvailable ? `${book.availableCopies} in stock` : 'Out of stock'}
            </span>
            <button class="btn btn-outline btn-sm" onclick="viewBookDetails('${book.id}')">
              Details
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Circulation Activity
  const activityContainer = document.getElementById('recentActivitiesContainer');
  if (activityContainer) {
    activityContainer.innerHTML = LibraryDB.activities.map(act => `
      <li class="activity-item">
        <div class="activity-icon-badge ${act.badgeClass}">
          <i class="${act.icon}"></i>
        </div>
        <div class="activity-details">
          <p><strong>${escapeHtml(act.title)}</strong></p>
          <p style="font-size: 0.78rem; color: var(--navy-600);">${escapeHtml(act.student)}</p>
          <div class="activity-meta">
            <span><i class="fa-regular fa-clock"></i> ${act.timeAgo}</span>
            <span>&bull;</span>
            <span>${act.timestamp}</span>
          </div>
        </div>
      </li>
    `).join('');
  }
}


// ==========================================
// 6. Books Catalog Engine (Grid & Table)
// ==========================================

let currentViewMode = 'grid'; // 'grid' | 'table'

function renderBooksCatalog() {
  const gridContainer = document.getElementById('booksGridContainer');
  const tableContainer = document.getElementById('booksTableContainer');
  const tableBody = document.getElementById('booksTableBody');
  const emptyState = document.getElementById('booksEmptyState');
  const countBadge = document.getElementById('displayedBooksCount');

  const searchTerm = (document.getElementById('bookSearchInput')?.value || '').toLowerCase().trim();
  const categoryFilter = document.getElementById('bookCategoryFilter')?.value || 'all';
  const statusFilter = document.getElementById('bookStatusFilter')?.value || 'all';

  // Filter books
  const filtered = LibraryDB.books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.isbn.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm);

    const matchesCategory = categoryFilter === 'all' || book.category === categoryFilter;

    let matchesStatus = true;
    if (statusFilter === 'Available') {
      matchesStatus = book.availableCopies > 0;
    } else if (statusFilter === 'Issued') {
      matchesStatus = book.availableCopies === 0;
    } else if (statusFilter === 'Low Stock') {
      matchesStatus = book.availableCopies > 0 && book.availableCopies <= 2;
    }

    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (countBadge) countBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    if (gridContainer) gridContainer.style.display = 'none';
    if (tableContainer) tableContainer.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  if (currentViewMode === 'grid') {
    if (gridContainer) gridContainer.style.display = 'grid';
    if (tableContainer) tableContainer.style.display = 'none';

    gridContainer.innerHTML = filtered.map(book => {
      const isAvailable = book.availableCopies > 0;
      const isLow = book.availableCopies <= 2 && book.availableCopies > 0;
      let statusBadge = `<span class="badge badge-success book-status-tag"><i class="fa-solid fa-circle-check"></i> Available</span>`;
      if (!isAvailable) {
        statusBadge = `<span class="badge badge-danger book-status-tag"><i class="fa-solid fa-circle-xmark"></i> Checked Out</span>`;
      } else if (isLow) {
        statusBadge = `<span class="badge badge-warning book-status-tag"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock</span>`;
      }

      return `
        <div class="book-card" data-id="${book.id}">
          <div class="book-card-top">
            ${statusBadge}
            <div class="book-spine-mockup">
              <div class="mockup-header-icon"><i class="fa-solid fa-graduation-cap"></i></div>
              <div class="mockup-book-spine-title">${escapeHtml(book.title)}</div>
              <div class="mockup-footer-dept">${escapeHtml(book.category)}</div>
            </div>
          </div>
          <div class="book-card-body">
            <span class="book-category-pill">${escapeHtml(book.category)}</span>
            <h3 class="book-title" title="${escapeHtml(book.title)}">${escapeHtml(book.title)}</h3>
            <p class="book-author"><i class="fa-regular fa-user"></i> ${escapeHtml(book.author)}</p>
            
            <div class="book-metadata-grid">
              <div class="meta-spec">
                <span>ISBN-13</span>
                <strong>${escapeHtml(book.isbn)}</strong>
              </div>
              <div class="meta-spec">
                <span>Location</span>
                <strong>${escapeHtml(book.shelf)}</strong>
              </div>
              <div class="meta-spec">
                <span>Available</span>
                <strong>${book.availableCopies} of ${book.totalCopies}</strong>
              </div>
              <div class="meta-spec">
                <span>Format</span>
                <strong>${escapeHtml(book.language.split(' - ')[1] || 'Hardcover')}</strong>
              </div>
            </div>
          </div>
          <div class="book-card-footer">
            <button class="btn btn-outline btn-sm" onclick="viewBookDetails('${book.id}')">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-primary btn-sm" onclick="quickIssueFromCatalog('${book.id}')" ${!isAvailable ? 'disabled' : ''}>
                <i class="fa-solid fa-hand-holding-hand"></i> Issue
              </button>
              <button class="btn-icon btn-danger-soft" title="Remove Book" onclick="deleteBook('${book.id}')">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    // Table Mode
    if (gridContainer) gridContainer.style.display = 'none';
    if (tableContainer) tableContainer.style.display = 'block';

    tableBody.innerHTML = filtered.map(book => {
      const isAvailable = book.availableCopies > 0;
      let statusTag = `<span class="badge badge-success">Available</span>`;
      if (!isAvailable) statusTag = `<span class="badge badge-danger">Out of Stock</span>`;
      else if (book.availableCopies <= 2) statusTag = `<span class="badge badge-warning">Low Stock</span>`;

      return `
        <tr>
          <td>
            <div style="font-weight: 700; color: var(--navy-900); font-size: 0.92rem;">${escapeHtml(book.title)}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(book.author)} &bull; ${escapeHtml(book.publisher || '')}</div>
          </td>
          <td><code style="font-size: 0.8rem; background:#F1F5F9; padding: 2px 6px; border-radius:4px;">${escapeHtml(book.isbn)}</code></td>
          <td><span class="badge badge-subtle">${escapeHtml(book.category)}</span></td>
          <td>${escapeHtml(book.shelf)}</td>
          <td><strong>${book.availableCopies}</strong> / ${book.totalCopies}</td>
          <td>${statusTag}</td>
          <td class="text-right">
            <button class="btn btn-outline btn-sm" onclick="viewBookDetails('${book.id}')" style="margin-right: 6px;">
              View
            </button>
            <button class="btn btn-primary btn-sm" onclick="quickIssueFromCatalog('${book.id}')" ${!isAvailable ? 'disabled' : ''}>
              Issue
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
}

// Book Details Modal Action
window.viewBookDetails = function(bookId) {
  const book = LibraryDB.books.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById('modalBookTitle').textContent = book.title;
  document.getElementById('modalBookAuthor').textContent = `by ${book.author}`;
  document.getElementById('modalBookCategory').textContent = book.category;
  document.getElementById('modalBookIsbn').textContent = book.isbn;
  document.getElementById('modalBookShelf').textContent = book.shelf;
  document.getElementById('modalBookStock').textContent = `${book.availableCopies} of ${book.totalCopies} copies in stock`;
  document.getElementById('modalBookPublisher').textContent = book.publisher || 'Apex University Press';
  document.getElementById('modalBookDesc').textContent = book.description || 'No synopsis provided for this textbook catalog record.';

  const issueBtn = document.getElementById('modalQuickIssueBtn');
  if (issueBtn) {
    issueBtn.disabled = book.availableCopies === 0;
    issueBtn.onclick = () => {
      closeModal('bookDetailsModal');
      quickIssueFromCatalog(book.id);
    };
  }

  openModal('bookDetailsModal');
};

// Delete Book action
window.deleteBook = function(bookId) {
  const bookIndex = LibraryDB.books.findIndex(b => b.id === bookId);
  if (bookIndex === -1) return;

  const bookTitle = LibraryDB.books[bookIndex].title;
  if (confirm(`Are you sure you want to remove "${bookTitle}" from the library catalog?`)) {
    LibraryDB.books.splice(bookIndex, 1);
    showToast(`"${bookTitle}" was removed from the catalog.`, 'warning', 'Book Removed');
    renderBooksCatalog();
    renderDashboard();
  }
};

window.quickIssueFromCatalog = function(bookId) {
  window.switchTab('issue-books');
  const select = document.getElementById('issueBookSelect');
  if (select) {
    select.value = bookId;
    select.dispatchEvent(new Event('change'));
  }
};


// ==========================================
// 7. Add New Book Form & Live Preview
// ==========================================

function setupAddBookForm() {
  const form = document.getElementById('addBookForm');
  if (!form) return;

  const titleInput = document.getElementById('newBookTitle');
  const authorInput = document.getElementById('newBookAuthor');
  const isbnInput = document.getElementById('newBookIsbn');
  const catInput = document.getElementById('newBookCategory');
  const shelfInput = document.getElementById('newBookShelf');
  const copiesInput = document.getElementById('newBookCopies');

  // Live preview bindings
  titleInput?.addEventListener('input', (e) => {
    document.getElementById('previewTitle').textContent = e.target.value.trim() || 'Book Title Preview';
  });

  authorInput?.addEventListener('input', (e) => {
    document.getElementById('previewAuthor').textContent = `By ${e.target.value.trim() || 'Author Name'}`;
  });

  isbnInput?.addEventListener('input', (e) => {
    document.getElementById('previewIsbn').textContent = `ISBN: ${e.target.value.trim() || '---'}`;
  });

  catInput?.addEventListener('change', (e) => {
    document.getElementById('previewCatBadge').textContent = e.target.value || 'General';
  });

  shelfInput?.addEventListener('input', (e) => {
    document.getElementById('previewShelf').textContent = e.target.value.trim() || 'Shelf Location';
  });

  copiesInput?.addEventListener('input', (e) => {
    document.getElementById('previewStock').textContent = `${e.target.value || 1} Copies Available`;
  });

  // Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
    const category = catInput.value;
    const shelf = shelfInput.value.trim();
    const copies = parseInt(copiesInput.value, 10) || 1;
    const publisher = document.getElementById('newBookPublisher')?.value.trim() || 'Apex Academic Press';
    const language = document.getElementById('newBookLanguage')?.value || 'English - Hardcover';
    const description = document.getElementById('newBookDescription')?.value.trim() || 'Textbook added to university curriculum collection.';

    if (!title || !author || !isbn || !category || !shelf) {
      showToast('Please fill in all mandatory required fields (*).', 'danger', 'Validation Error');
      return;
    }

    const newBook = {
      id: `BK-${1000 + LibraryDB.books.length + 1}`,
      title,
      author,
      isbn,
      category,
      publisher,
      shelf,
      totalCopies: copies,
      availableCopies: copies,
      language,
      description,
      dateAdded: new Date().toISOString().split('T')[0]
    };

    // Push into catalog
    LibraryDB.books.unshift(newBook);

    // Add activity
    LibraryDB.activities.unshift({
      type: "added",
      icon: "fa-solid fa-circle-plus",
      badgeClass: "added",
      title: `New Catalog Addition: ${title}`,
      student: `Cataloged by Prof. Eleanor`,
      timeAgo: "Just now",
      timestamp: "Today"
    });

    showToast(`"${title}" successfully cataloged and allocated to ${shelf}!`, 'success', 'Book Added');
    
    // Reset form
    form.reset();
    document.getElementById('previewTitle').textContent = 'Book Title Preview';
    document.getElementById('previewAuthor').textContent = 'By Author Name';
    document.getElementById('previewIsbn').textContent = 'ISBN: ---';

    // Refresh views
    renderDashboard();

    // Prompt user to view catalog
    setTimeout(() => {
      window.switchTab('all-books');
    }, 600);
  });
}


// ==========================================
// 8. Issue Book Engine & Active Loans
// ==========================================

function populateIssueDropdowns() {
  const studentSelect = document.getElementById('issueStudentSelect');
  const bookSelect = document.getElementById('issueBookSelect');

  if (studentSelect) {
    const studentOptions = LibraryDB.students.map(s => `
      <option value="${s.id}">${s.name} (${s.id}) - ${s.dept}</option>
    `).join('');
    studentSelect.innerHTML = `<option value="">-- Choose Registered Student --</option>` + studentOptions;
  }

  if (bookSelect) {
    const availableBooks = LibraryDB.books.filter(b => b.availableCopies > 0);
    const bookOptions = availableBooks.map(b => `
      <option value="${b.id}">${b.title} [${b.availableCopies} available] - ${b.shelf}</option>
    `).join('');
    bookSelect.innerHTML = `<option value="">-- Choose Available Book --</option>` + bookOptions;
  }

  // Pre-fill default dates
  const today = new Date();
  const issueDateStr = today.toISOString().split('T')[0];
  const due = new Date();
  due.setDate(today.getDate() + 14);
  const dueDateStr = due.toISOString().split('T')[0];

  const issueDateInput = document.getElementById('issueDateInput');
  const returnDueInput = document.getElementById('returnDueDateInput');

  if (issueDateInput) issueDateInput.value = issueDateStr;
  if (returnDueInput) returnDueInput.value = dueDateStr;
}

function setupIssueLogic() {
  const studentSelect = document.getElementById('issueStudentSelect');
  const bookSelect = document.getElementById('issueBookSelect');
  const studentChip = document.getElementById('studentInfoChip');
  const bookChip = document.getElementById('bookInfoChip');

  // Student select change
  studentSelect?.addEventListener('change', (e) => {
    const student = LibraryDB.students.find(s => s.id === e.target.value);
    if (student && studentChip) {
      document.getElementById('chipStudentName').textContent = student.name;
      document.getElementById('chipStudentDetails').textContent = `${student.dept} | ID: ${student.id} | ${student.borrowedCount} Active Loans`;
      studentChip.style.display = 'flex';
    } else if (studentChip) {
      studentChip.style.display = 'none';
    }
  });

  // Book select change
  bookSelect?.addEventListener('change', (e) => {
    const book = LibraryDB.books.find(b => b.id === e.target.value);
    if (book && bookChip) {
      document.getElementById('chipBookTitle').textContent = book.title;
      document.getElementById('chipBookDetails').textContent = `${book.author} | ${book.shelf} | ${book.availableCopies} Copies Available`;
      bookChip.style.display = 'flex';
    } else if (bookChip) {
      bookChip.style.display = 'none';
    }
  });

  // Preset loan duration chips
  const chips = document.querySelectorAll('.loan-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const days = parseInt(chip.dataset.days, 10) || 14;
      const today = new Date();
      const due = new Date();
      due.setDate(today.getDate() + days);
      const returnDueInput = document.getElementById('returnDueDateInput');
      if (returnDueInput) returnDueInput.value = due.toISOString().split('T')[0];
    });
  });

  // Form submit
  const form = document.getElementById('issueBookForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentId = studentSelect.value;
    const bookId = bookSelect.value;
    const issueDate = document.getElementById('issueDateInput').value;
    const dueDate = document.getElementById('returnDueDateInput').value;
    const notes = document.getElementById('issueNotes')?.value.trim() || 'Regular student checkout';

    if (!studentId || !bookId) {
      showToast('Please select both a student and an available book.', 'warning', 'Missing Selection');
      return;
    }

    const student = LibraryDB.students.find(s => s.id === studentId);
    const book = LibraryDB.books.find(b => b.id === bookId);

    if (!book || book.availableCopies <= 0) {
      showToast('This book has no remaining available copies to issue.', 'danger', 'Out of Stock');
      return;
    }

    // Check student borrow cap
    if (student.borrowedCount >= LibraryDB.settings.maxBooks) {
      showToast(`${student.name} has reached the maximum borrowing limit of ${LibraryDB.settings.maxBooks} books!`, 'warning', 'Quota Exceeded');
      return;
    }

    // Process issue
    book.availableCopies -= 1;
    student.borrowedCount += 1;

    const newLoan = {
      loanId: `LN-${Math.floor(8000 + Math.random() * 1000)}`,
      bookId: book.id,
      bookTitle: book.title,
      studentId: student.id,
      studentName: student.name,
      issueDate,
      dueDate,
      isOverdue: false,
      overdueDays: 0,
      fine: 0.00,
      notes
    };

    LibraryDB.activeLoans.unshift(newLoan);

    // Add activity
    LibraryDB.activities.unshift({
      type: "borrowed",
      icon: "fa-solid fa-hand-holding-hand",
      badgeClass: "borrowed",
      title: `Book Checked Out: ${book.title}`,
      student: `${student.name} (${student.id})`,
      timeAgo: "Just now",
      timestamp: "Today"
    });

    showToast(`"${book.title}" successfully issued to ${student.name}. Due on ${dueDate}.`, 'success', 'Book Issued');

    form.reset();
    studentChip.style.display = 'none';
    bookChip.style.display = 'none';

    populateIssueDropdowns();
    renderIssuedBooksTable();
    renderDashboard();
  });
}

function renderIssuedBooksTable() {
  const tableBody = document.getElementById('issuedBooksTableBody');
  const countBadge = document.getElementById('activeLoansCountBadge');

  if (countBadge) countBadge.textContent = `${LibraryDB.activeLoans.length} active`;

  if (!tableBody) return;

  if (LibraryDB.activeLoans.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center" style="padding: 30px; color: var(--text-muted);">
          No books currently checked out.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = LibraryDB.activeLoans.map(loan => {
    const isOverdue = loan.isOverdue;
    return `
      <tr>
        <td>
          <div style="font-weight: 700; color: var(--navy-900); font-size: 0.88rem;">${escapeHtml(loan.bookTitle)}</div>
          <div style="font-size: 0.76rem; color: var(--text-muted);"><i class="fa-solid fa-user-graduate"></i> ${escapeHtml(loan.studentName)} (${loan.studentId})</div>
        </td>
        <td>${loan.issueDate}</td>
        <td><strong>${loan.dueDate}</strong></td>
        <td>
          ${isOverdue 
            ? `<span class="badge badge-danger"><i class="fa-solid fa-triangle-exclamation"></i> Overdue (${loan.overdueDays}d)</span>` 
            : `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> On Loan</span>`
          }
        </td>
        <td class="text-right">
          <button class="btn btn-outline btn-sm" onclick="quickReturnLoan('${loan.loanId}')">
            <i class="fa-solid fa-inbox"></i> Return
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

window.quickReturnLoan = function(loanId) {
  window.switchTab('return-books');
  const select = document.getElementById('returnTransactionSelect');
  if (select) {
    select.value = loanId;
    select.dispatchEvent(new Event('change'));
  }
};


// ==========================================
// 9. Return Book Desk & Fine Calculator
// ==========================================

function populateReturnSelect() {
  const select = document.getElementById('returnTransactionSelect');
  if (!select) return;

  const options = LibraryDB.activeLoans.map(l => `
    <option value="${l.loanId}">${l.bookTitle} &mdash; ${l.studentName} [Due: ${l.dueDate}]</option>
  `).join('');

  select.innerHTML = `<option value="">-- Choose Book Loan to Process Return --</option>` + options;
}

function setupReturnLogic() {
  const select = document.getElementById('returnTransactionSelect');
  const calcCard = document.getElementById('returnCalcContainer');
  const promptBox = document.getElementById('returnPromptBox');
  const confirmBtn = document.getElementById('processReturnConfirmBtn');

  select?.addEventListener('change', (e) => {
    const loanId = e.target.value;
    const loan = LibraryDB.activeLoans.find(l => l.loanId === loanId);

    if (!loan) {
      if (calcCard) calcCard.style.display = 'none';
      if (promptBox) promptBox.style.display = 'block';
      return;
    }

    if (calcCard) calcCard.style.display = 'block';
    if (promptBox) promptBox.style.display = 'none';

    document.getElementById('calcBookTitle').textContent = loan.bookTitle;
    document.getElementById('calcStudentName').textContent = `Borrower: ${loan.studentName} (${loan.studentId})`;
    document.getElementById('calcIssueDate').textContent = loan.issueDate;
    document.getElementById('calcDueDate').textContent = loan.dueDate;

    // Calculate fine dynamically
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = today - dueDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let overdueDays = 0;
    let fineAmount = 0.00;

    if (diffDays > 0) {
      overdueDays = diffDays;
      fineAmount = overdueDays * LibraryDB.settings.fineRate;
    }

    document.getElementById('calcOverdueDays').textContent = overdueDays > 0 ? `${overdueDays} Days` : 'On Time';
    document.getElementById('calcOverdueDays').className = overdueDays > 0 ? 'text-danger' : 'text-success';
    document.getElementById('calcFineAmount').textContent = `$${fineAmount.toFixed(2)}`;
    document.getElementById('totalDueDisplay').textContent = `$${fineAmount.toFixed(2)}`;
  });

  confirmBtn?.addEventListener('click', () => {
    const loanId = select.value;
    const loanIndex = LibraryDB.activeLoans.findIndex(l => l.loanId === loanId);
    if (loanIndex === -1) return;

    const loan = LibraryDB.activeLoans[loanIndex];
    const condition = document.querySelector('input[name="bookCondition"]:checked')?.value || 'Good';
    const fineText = document.getElementById('totalDueDisplay').textContent;

    // Restore book available count
    const book = LibraryDB.books.find(b => b.id === loan.bookId);
    if (book) book.availableCopies += 1;

    // Decrement student active loans
    const student = LibraryDB.students.find(s => s.id === loan.studentId);
    if (student && student.borrowedCount > 0) student.borrowedCount -= 1;

    // Push into returned history
    LibraryDB.returnedHistory.unshift({
      bookTitle: loan.bookTitle,
      studentName: `${loan.studentName} (${loan.studentId})`,
      returnedOn: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + formatCurrentTime(),
      finePaid: fineText,
      condition
    });

    // Activity feed
    LibraryDB.activities.unshift({
      type: "returned",
      icon: "fa-solid fa-arrow-rotate-left",
      badgeClass: "returned",
      title: `Book Returned: ${loan.bookTitle}`,
      student: `${loan.studentName} (${condition})`,
      timeAgo: "Just now",
      timestamp: "Today"
    });

    // Remove from active loans
    LibraryDB.activeLoans.splice(loanIndex, 1);

    // Show clearance receipt
    showReceiptModal(loan, fineText);

    // Refresh views
    populateReturnSelect();
    renderReturnedHistoryTable();
    renderDashboard();

    if (calcCard) calcCard.style.display = 'none';
    if (promptBox) promptBox.style.display = 'block';

    showToast(`"${loan.bookTitle}" checked in successfully. Restocked to shelf.`, 'success', 'Return Completed');
  });
}

function showReceiptModal(loan, finePaid) {
  document.getElementById('receiptDate').textContent = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('receiptBook').textContent = loan.bookTitle;
  document.getElementById('receiptStudent').textContent = `${loan.studentName} (${loan.studentId})`;
  document.getElementById('receiptFine').textContent = finePaid;

  openModal('receiptModal');
}

function renderReturnedHistoryTable() {
  const tableBody = document.getElementById('returnedHistoryTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = LibraryDB.returnedHistory.map(item => `
    <tr>
      <td><strong style="color: var(--navy-900); font-size: 0.88rem;">${escapeHtml(item.bookTitle)}</strong></td>
      <td>${escapeHtml(item.studentName)}</td>
      <td>${item.returnedOn}</td>
      <td><span class="badge ${item.finePaid.includes('$0.00') ? 'badge-success' : 'badge-warning'}">${item.finePaid}</span></td>
      <td><span class="badge badge-subtle"><i class="fa-solid fa-check text-emerald"></i> ${item.condition}</span></td>
    </tr>
  `).join('');
}


// ==========================================
// 10. Students Management & Registration
// ==========================================

function renderStudentsTable() {
  const tableBody = document.getElementById('studentsTableBody');
  if (!tableBody) return;

  const searchTerm = (document.getElementById('studentSearchInput')?.value || '').toLowerCase().trim();
  const deptFilter = document.getElementById('studentDeptFilter')?.value || 'all';

  const filtered = LibraryDB.students.filter(s => {
    const matchesSearch = 
      s.name.toLowerCase().includes(searchTerm) ||
      s.id.toLowerCase().includes(searchTerm) ||
      s.email.toLowerCase().includes(searchTerm);

    const matchesDept = deptFilter === 'all' || s.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center" style="padding: 30px; color: var(--text-muted);">
          No student records found matching the query.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(student => {
    const isOverdue = student.status === 'Overdue';
    return `
      <tr>
        <td>
          <div style="font-weight: 700; color: var(--navy-900);">${escapeHtml(student.name)}</div>
          <code style="font-size: 0.78rem; color: var(--blue-accent);">${student.id}</code>
        </td>
        <td>
          <div>${escapeHtml(student.dept)}</div>
          <div style="font-size: 0.74rem; color: var(--text-muted);">${student.year}</div>
        </td>
        <td><a href="mailto:${student.email}" style="font-size: 0.82rem;">${escapeHtml(student.email)}</a></td>
        <td>
          <strong style="font-size: 0.95rem; color: var(--navy-900);">${student.borrowedCount}</strong> / ${LibraryDB.settings.maxBooks}
        </td>
        <td>
          ${isOverdue 
            ? `<span class="badge badge-danger"><i class="fa-solid fa-triangle-exclamation"></i> Overdue Loans</span>` 
            : `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Good Standing</span>`
          }
        </td>
        <td class="text-right">
          <button class="btn btn-outline btn-sm" onclick="showToast('Student card validated. Email: ${student.email}', 'info', '${student.name}')">
            Card Info
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function setupStudentRegistration() {
  const openBtn = document.getElementById('openAddStudentModalBtn');
  const form = document.getElementById('addStudentForm');

  openBtn?.addEventListener('click', () => {
    openModal('addStudentModal');
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('newStudentName').value.trim();
    const id = document.getElementById('newStudentId').value.trim();
    const dept = document.getElementById('newStudentDept').value;
    const email = document.getElementById('newStudentEmail').value.trim();
    const phone = document.getElementById('newStudentPhone')?.value.trim() || '+1 (555) 000-0000';

    if (!name || !id || !email) {
      showToast('Please fill out student name, roll ID, and official email.', 'danger', 'Error');
      return;
    }

    const newStudent = {
      id,
      name,
      dept,
      year: "1st Year (Semester 1)",
      email,
      phone,
      borrowedCount: 0,
      status: "Active"
    };

    LibraryDB.students.unshift(newStudent);
    showToast(`Student ${name} (${id}) registered with full library card borrowing rights!`, 'success', 'Student Enrolled');

    closeModal('addStudentModal');
    form.reset();

    renderStudentsTable();
    populateIssueDropdowns();
    renderDashboard();
  });

  // Search & filter live listener
  document.getElementById('studentSearchInput')?.addEventListener('input', renderStudentsTable);
  document.getElementById('studentDeptFilter')?.addEventListener('change', renderStudentsTable);
}


// ==========================================
// 11. Reports & Overdue Defaulters
// ==========================================

function renderReportsView() {
  const overdueTableBody = document.getElementById('overdueReportTableBody');
  const defaulterBadge = document.getElementById('reportOverdueDefaulters');

  const overdues = LibraryDB.activeLoans.filter(l => l.isOverdue);
  if (defaulterBadge) defaulterBadge.textContent = overdues.length;

  if (!overdueTableBody) return;

  if (overdues.length === 0) {
    overdueTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center" style="padding: 24px; color: var(--emerald-500); font-weight:600;">
          <i class="fa-solid fa-circle-check"></i> Excellent! There are no overdue loan defaulters at this time.
        </td>
      </tr>
    `;
    return;
  }

  overdueTableBody.innerHTML = overdues.map(loan => `
    <tr>
      <td>
        <div style="font-weight: 700; color: var(--navy-900);">${escapeHtml(loan.studentName)}</div>
        <div style="font-size: 0.74rem; color: var(--text-muted);">${loan.studentId}</div>
      </td>
      <td><strong>${escapeHtml(loan.bookTitle)}</strong></td>
      <td><span class="text-danger">${loan.dueDate}</span></td>
      <td><span class="badge badge-danger">${loan.overdueDays} Days Overdue</span></td>
      <td><strong class="text-danger">$${loan.fine.toFixed(2)}</strong></td>
      <td class="text-right">
        <button class="btn btn-outline btn-sm" onclick="sendReminderEmail('${loan.studentName}')">
          <i class="fa-regular fa-envelope"></i> Send Notice
        </button>
      </td>
    </tr>
  `).join('');
}

window.sendReminderEmail = function(studentName) {
  showToast(`Automated reminder & overdue penalty notice dispatched to ${studentName}.`, 'success', 'Notice Sent');
};

window.printReport = function() {
  window.print();
};

window.exportFullReport = function() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Book Title,Author,ISBN,Category,Location,Total Copies,Available\n";

  LibraryDB.books.forEach(b => {
    csvContent += `"${b.title}","${b.author}","${b.isbn}","${b.category}","${b.shelf}",${b.totalCopies},${b.availableCopies}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Athena_LMS_Catalog_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('University library catalog report exported as CSV.', 'success', 'Export Complete');
};


// ==========================================
// 12. Settings & System Preferences
// ==========================================

function setupSettings() {
  const saveBtn = document.getElementById('saveSettingsBtn');
  if (!saveBtn) return;

  saveBtn.addEventListener('click', () => {
    const loanDays = parseInt(document.getElementById('settingLoanPeriod')?.value, 10) || 14;
    const maxBooks = parseInt(document.getElementById('settingMaxBooks')?.value, 10) || 3;
    const fineRate = parseFloat(document.getElementById('settingFineRate')?.value) || 0.50;
    const collegeName = document.getElementById('settingCollegeName')?.value.trim() || 'Apex Institute';

    LibraryDB.settings.loanDays = loanDays;
    LibraryDB.settings.maxBooks = maxBooks;
    LibraryDB.settings.fineRate = fineRate;
    LibraryDB.settings.collegeName = collegeName;

    showToast('Library circulation rules and college settings have been saved.', 'success', 'Settings Updated');
  });
}


// ==========================================
// 13. UI Interactions (Search, Clock, Mobile)
// ==========================================

function formatCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 hour = 12
  return `${hours}:${minutes} ${ampm}`;
}

function updateLiveClock() {
  const timeElem = document.getElementById('liveTime');
  const dateElem = document.getElementById('liveDate');
  
  if (timeElem) timeElem.textContent = formatCurrentTime();
  if (dateElem) {
    const now = new Date();
    dateElem.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }
}

function setupGlobalSearchAndHotkeys() {
  const globalInput = document.getElementById('globalSearchInput');
  const catalogInput = document.getElementById('bookSearchInput');

  // '/' key shortcut to focus search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      globalInput?.focus();
    }
  });

  globalInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = globalInput.value.trim();
      if (query) {
        window.switchTab('all-books');
        if (catalogInput) {
          catalogInput.value = query;
          catalogInput.dispatchEvent(new Event('input'));
        }
      }
    }
  });

  // Notifications Bell dropdown toggle
  const notifBtn = document.getElementById('notifBellBtn');
  const notifDropdown = document.getElementById('notifDropdown');

  notifBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown?.classList.toggle('show');
  });

  window.addEventListener('click', (e) => {
    if (!notifDropdown?.contains(e.target) && !notifBtn?.contains(e.target)) {
      notifDropdown?.classList.remove('show');
    }
  });

  // Header quick issue button
  document.getElementById('headerQuickIssueBtn')?.addEventListener('click', () => {
    window.switchTab('issue-books');
  });

  // Mobile sidebar drawer
  const toggleBtn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const closeBtn = document.getElementById('mobileSidebarClose');

  toggleBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    backdrop?.classList.toggle('active');
  });

  backdrop?.addEventListener('click', closeMobileSidebar);
  closeBtn?.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebarBackdrop')?.classList.remove('active');
}

function setupCatalogViewSwitchers() {
  const btnGrid = document.getElementById('btnViewGrid');
  const btnTable = document.getElementById('btnViewTable');
  const searchInput = document.getElementById('bookSearchInput');
  const catFilter = document.getElementById('bookCategoryFilter');
  const statusFilter = document.getElementById('bookStatusFilter');
  const resetBtn = document.getElementById('resetBooksFilterBtn');
  const exportBtn = document.getElementById('exportBooksBtn');

  btnGrid?.addEventListener('click', () => {
    currentViewMode = 'grid';
    btnGrid.classList.add('active');
    btnTable?.classList.remove('active');
    renderBooksCatalog();
  });

  btnTable?.addEventListener('click', () => {
    currentViewMode = 'table';
    btnTable.classList.add('active');
    btnGrid?.classList.remove('active');
    renderBooksCatalog();
  });

  searchInput?.addEventListener('input', renderBooksCatalog);
  catFilter?.addEventListener('change', renderBooksCatalog);
  statusFilter?.addEventListener('change', renderBooksCatalog);

  resetBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (catFilter) catFilter.value = 'all';
    if (statusFilter) statusFilter.value = 'all';
    renderBooksCatalog();
  });

  exportBtn?.addEventListener('click', window.exportFullReport);
}

// Utility: HTML escape
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


// ==========================================
// 14. Initialization on DOM Ready
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation menu links
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view) window.switchTab(view);
    });
  });

  // 2. Setup Components
  setupGlobalSearchAndHotkeys();
  setupCatalogViewSwitchers();
  setupAddBookForm();
  setupIssueLogic();
  setupReturnLogic();
  setupStudentRegistration();
  setupSettings();

  // 3. Setup Clock & Interval
  updateLiveClock();
  setInterval(updateLiveClock, 30000);

  // 4. Initial Render based on URL hash
  const initialHash = window.location.hash.replace('#', '') || 'dashboard';
  window.switchTab(initialHash);

  // Welcome Toast
  setTimeout(() => {
    showToast('Welcome to Athena LMS. System synced with college database.', 'info', 'Connected');
  }, 500);
});

