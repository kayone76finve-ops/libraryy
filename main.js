const BOOK_IMAGES = {
  1: "public/kii.jpeg",
  2: "public/yor.jpg",
  3: "public/kii.jpg",
  4: "public/re.jpg",
  5: "public/qw.jpg",
  6: "public/ra.jpg",
  7: "public/se.jpg",
  8: "public/sarkaz.jpg",
  9: "public/te.jpg",
  10: "public/kii.jpeg",
  11: "public/qer.jpg",
  12: "public/yo.jpg",
};

const DEFAULT_BOOKS = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Fiksi",
    rating: 4.8,
    available: 5,
    isbn: "978-1234567890",
    year: 2005,
    image: BOOK_IMAGES[1],
    description:
      "Novel tentang persahabatan dan perjuangan anak-anak Belitung dalam mengejar pendidikan.",
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Sejarah",
    rating: 4.9,
    available: 3,
    isbn: "978-0987654321",
    year: 1980,
    image: BOOK_IMAGES[2],
    description:
      "Novel sejarah yang mengisahkan perjuangan rakyat Indonesia melawan kolonialisme.",
  },
  {
    id: 3,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    category: "Inspiratif",
    rating: 4.7,
    available: 7,
    isbn: "978-1122334455",
    year: 2009,
    image: BOOK_IMAGES[3],
    description:
      "Kisah inspiratif tentang perjuangan santri dalam mengejar mimpi dan cita-cita.",
  },
  {
    id: 4,
    title: "Perahu Kertas",
    author: "Dee Lestari",
    category: "Romance",
    rating: 4.6,
    available: 4,
    isbn: "978-2233445566",
    year: 2009,
    image: BOOK_IMAGES[4],
    description:
      "Novel romantis tentang perjalanan cinta yang penuh dengan rintangan dan harapan.",
  },
  {
    id: 5,
    title: "Sang Pemimpi",
    author: "Andrea Hirata",
    category: "Fiksi",
    rating: 4.7,
    available: 6,
    isbn: "978-3344556677",
    year: 2006,
    image: BOOK_IMAGES[5],
    description:
      "Kelanjutan dari Laskar Pelangi yang mengisahkan perjalanan mengejar mimpi.",
  },
  {
    id: 6,
    title: "Cantik Itu Luka",
    author: "Eka Kurniawan",
    category: "Fiksi",
    rating: 4.5,
    available: 2,
    isbn: "978-4455667788",
    year: 2002,
    image: BOOK_IMAGES[6],
    description:
      "Novel yang menggabungkan realisme magis dengan sejarah Indonesia.",
  },
  {
    id: 7,
    title: "Ayat-Ayat Cinta",
    author: "Habiburrahman El Shirazy",
    category: "Romance",
    rating: 4.4,
    available: 8,
    isbn: "978-5566778899",
    year: 2004,
    image: BOOK_IMAGES[7],
    description:
      "Novel islami yang mengisahkan perjalanan cinta seorang mahasiswa Indonesia di Mesir.",
  },
  {
    id: 8,
    title: "Ronggeng Dukuh Paruk",
    author: "Ahmad Tohari",
    category: "Sejarah",
    rating: 4.6,
    available: 3,
    isbn: "978-6677889900",
    year: 1982,
    image: BOOK_IMAGES[8],
    description:
      "Trilogi yang mengisahkan kehidupan seorang ronggeng di masa kolonial dan kemerdekaan.",
  },
  {
    id: 9,
    title: "Edensor",
    author: "Andrea Hirata",
    category: "Fiksi",
    rating: 4.5,
    available: 4,
    isbn: "978-7788990011",
    year: 2007,
    image: BOOK_IMAGES[9],
    description:
      "Bagian ketiga dari tetralogi Laskar Pelangi yang mengisahkan petualangan di Eropa.",
  },
  {
    id: 10,
    title: "Supernova",
    author: "Dee Lestari",
    category: "Fiksi",
    rating: 4.3,
    available: 5,
    isbn: "978-8899001122",
    year: 2001,
    image: BOOK_IMAGES[10],
    description:
      "Novel fiksi ilmiah yang mengeksplorasi tema cinta, kehidupan, dan alam semesta.",
  },
  {
    id: 11,
    title: "Pulang",
    author: "Leila S. Chudori",
    category: "Sejarah",
    rating: 4.7,
    available: 2,
    isbn: "978-9900112233",
    year: 2012,
    image: BOOK_IMAGES[11],
    description:
      "Novel yang mengisahkan kehidupan eksil politik Indonesia di Paris.",
  },
  {
    id: 12,
    title: "Maryamah Karpov",
    author: "Andrea Hirata",
    category: "Fiksi",
    rating: 4.4,
    available: 6,
    isbn: "978-0011223344",
    year: 2008,
    image: BOOK_IMAGES[12],
    description:
      "Bagian keempat dari tetralogi Laskar Pelangi tentang cinta dan perjuangan hidup.",
  },
];

// Initialize Data
function initializeData() {
  if (!localStorage.getItem("libraryBooks")) {
    localStorage.setItem("libraryBooks", JSON.stringify(DEFAULT_BOOKS));
  }
  if (!localStorage.getItem("borrowHistory")) {
    localStorage.setItem(
      "borrowHistory",
      JSON.stringify([
        {
          id: 1,
          book: "Laskar Pelangi",
          borrowDate: "2024-01-15",
          returnDate: "2024-01-22",
          status: "borrowed",
        },
        {
          id: 2,
          book: "Bumi Manusia",
          borrowDate: "2024-01-10",
          returnDate: "2024-01-17",
          status: "returned",
        },
        {
          id: 3,
          book: "Negeri 5 Menara",
          borrowDate: "2024-01-05",
          returnDate: "2024-01-12",
          status: "overdue",
        },
        {
          id: 4,
          book: "Perahu Kertas",
          borrowDate: "2024-01-01",
          returnDate: "2024-01-08",
          status: "returned",
        },
      ])
    );
  }
  if (!localStorage.getItem("borrowedCount"))
    localStorage.setItem("borrowedCount", "0");
}

// Auth Functions
function checkAuth() {
  const user = localStorage.getItem("libraryUser");
  if (
    !user &&
    !window.location.pathname.includes("index.html") &&
    window.location.pathname !== "/"
  ) {
    window.location.href = "index.html";
    return false;
  }
  if (user) updateSidebar();
  return true;
}

function updateSidebar() {
  const user = JSON.parse(localStorage.getItem("libraryUser"));
  if (user) {
    const els = {
      name: document.getElementById("sidebarName"),
      email: document.getElementById("sidebarEmail"),
      avatar: document.getElementById("sidebarAvatar"),
    };
    if (els.name) els.name.textContent = user.name;
    if (els.email) els.email.textContent = user.email;
    if (els.avatar) els.avatar.src = user.avatar;
  }
}

function logout() {
  localStorage.removeItem("libraryUser");
  window.location.href = "index.html";
}

// Alert Functions
function showAlert(msg, type = "success") {
  const alert = document.getElementById("alertMessage");
  const text = document.getElementById("alertText");
  if (alert && text) {
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    text.textContent = msg;
    alert.style.display = "block";
    setTimeout(() => (alert.style.display = "none"), 5000);
  }
}

// Login/Register
document.addEventListener("DOMContentLoaded", function () {
  initializeData();

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const user = {
        name: "Sakura Haruno",
        email: document.getElementById("loginEmail").value,
        phone: "+62 812-3456-7890",
        address: "Jl. Sakura No. 123, Tokyo",
        memberSince: "15 Januari 2023",
        avatar: "kii.jpeg",
      };
      localStorage.setItem("libraryUser", JSON.stringify(user));
      showAlert(
        "Login berhasil! Selamat datang di Kiano Library 🌸",
        "success"
      );
      setTimeout(() => (window.location.href = "dashboard.html"), 1500);
    });
  }

  const regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const pwd = document.getElementById("registerPassword").value;
      const cpwd = document.getElementById("confirmPassword").value;
      if (pwd !== cpwd) {
        showAlert("Password dan konfirmasi password tidak sama!", "danger");
        return;
      }
      const user = {
        name: document.getElementById("registerName").value,
        email: document.getElementById("registerEmail").value,
        phone: "+62 812-3456-7890",
        address: "Jl. Sakura No. 123, Tokyo",
        memberSince: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        avatar: "kii.jpeg",
      };
      localStorage.setItem("libraryUser", JSON.stringify(user));
      showAlert(
        "Registrasi berhasil! Selamat datang di Kiano Library 🌸",
        "success"
      );
      setTimeout(() => (window.location.href = "dashboard.html"), 1500);
    });
  }
});

// Dashboard
function loadDashboard() {
  const books = JSON.parse(localStorage.getItem("libraryBooks") || "[]");
  const count = parseInt(localStorage.getItem("borrowedCount") || "0");

  const els = {
    total: document.getElementById("totalBooksCount"),
    borrowed: document.getElementById("borrowedBooksCount"),
    monthly: document.getElementById("monthlyBorrowCount"),
  };
  if (els.total) els.total.textContent = books.length;
  if (els.borrowed) els.borrowed.textContent = 89 + count;
  if (els.monthly) els.monthly.textContent = 234 + count;

  loadPopularBooks();
  loadRecentActivities();
  updateDashboardModals();
}

function loadPopularBooks() {
  const books = [
    {
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      borrowCount: 45,
      info: "Novel terpopuler tentang persahabatan anak-anak Belitung",
    },
    {
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      borrowCount: 38,
      info: "Karya masterpiece sastra Indonesia yang mendunia",
    },
    {
      title: "Negeri 5 Menara",
      author: "Ahmad Fuadi",
      borrowCount: 32,
      info: "Inspirasi dari kehidupan santri yang penuh makna",
    },
  ];

  const container = document.getElementById("popularBooksContainer");
  if (container) {
    container.innerHTML = books
      .map(
        (b, i) => `
      <div class="clickable-item p-3 mb-2 rounded" data-bs-toggle="modal" data-bs-target="#popularBookModal${i}">
        <div class="d-flex align-items-center">
          <i class="bi bi-book-fill fs-2 me-3" style="color: var(--primary);"></i>
          <div class="flex-grow-1">
            <div class="fw-semibold">${b.title}</div>
            <div class="text-muted small">${b.author}</div>
          </div>
          <span class="badge text-white" style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);">
            ${b.borrowCount} <i class="bi bi-graph-up"></i>
          </span>
        </div>
      </div>
    `
      )
      .join("");
    createPopularBookModals(books);
  }
}

function createPopularBookModals(books) {
  const container = document.getElementById("dynamicModals");
  if (container) {
    container.innerHTML = books
      .map(
        (b, i) => `
      <div class="modal fade" id="popularBookModal${i}" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-primary"><i class="bi bi-star"></i> ${b.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p><strong>Penulis:</strong> ${b.author}</p>
              <p><strong>Jumlah Peminjaman:</strong> ${b.borrowCount} kali</p>
              <p><strong>Info:</strong> ${b.info}</p>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function loadRecentActivities() {
  const activities = [
    {
      type: "Peminjaman buku",
      user: "Ahmad 👨",
      time: "5 menit lalu",
      detail: 'Meminjam buku "Ayat-Ayat Cinta" untuk dibaca selama 1 minggu',
    },
    {
      type: "Pengembalian buku",
      user: "Siti 👩",
      time: "15 menit lalu",
      detail: 'Mengembalikan buku "Supernova" tepat waktu',
    },
    {
      type: "Pendaftaran anggota",
      user: "Budi 🧑",
      time: "1 jam lalu",
      detail: "Mendaftar sebagai anggota baru perpustakaan",
    },
  ];

  const container = document.getElementById("recentActivitiesContainer");
  if (container) {
    container.innerHTML = activities
      .map(
        (a, i) => `
      <div class="clickable-item p-3 mb-2 rounded" data-bs-toggle="modal" data-bs-target="#activityModal${i}">
        <div class="fw-semibold">${a.type}</div>
        <div class="text-muted small">${a.user} - ${a.time}</div>
      </div>
    `
      )
      .join("");
    createActivityModals(activities);
  }
}

function createActivityModals(activities) {
  const container = document.getElementById("dynamicModals");
  activities.forEach((a, i) => {
    container.innerHTML += `
      <div class="modal fade" id="activityModal${i}" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-primary"><i class="bi bi-lightning"></i> ${a.type}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p><strong>User:</strong> ${a.user}</p>
              <p><strong>Waktu:</strong> ${a.time}</p>
              <p><strong>Detail:</strong> ${a.detail}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function updateDashboardModals() {
  const books = JSON.parse(localStorage.getItem("libraryBooks") || "[]");
  const modal = document.getElementById("modalTotalBooks");
  const stats = document.getElementById("bookCategoriesStats");

  if (modal) modal.textContent = `${books.length} buku`;
  if (stats) {
    const cats = {};
    books.forEach((b) => (cats[b.category] = (cats[b.category] || 0) + 1));
    stats.innerHTML = Object.entries(cats)
      .map(([c, n]) => `<li>${c}: ${n} buku</li>`)
      .join("");
  }
}

// Books
function loadBooks(query = "") {
  const books = JSON.parse(localStorage.getItem("libraryBooks") || "[]");
  const filtered = query
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(query.toLowerCase()) ||
          b.author.toLowerCase().includes(query.toLowerCase()) ||
          b.category.toLowerCase().includes(query.toLowerCase())
      )
    : books;

  const container = document.getElementById("booksContainer");
  if (container) {
    if (filtered.length === 0) {
      container.innerHTML =
        '<div class="col-12 text-center"><p class="text-muted">Tidak ada buku yang ditemukan.</p></div>';
      return;
    }

    container.innerHTML = filtered
      .map(
        (b) => `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 fade-in">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <div class="flex-grow-1">
                <h5 class="card-title">${b.title}</h5>
                <p class="text-muted small">oleh ${b.author}</p>
                <span class="badge badge-${b.category.toLowerCase()} text-white">${
          b.category
        }</span>
              </div>
              <img class="book-image ms-3" src="${b.image}" alt="${
          b.title
        }" onerror="this.src='https://via.placeholder.com/80x100/ff69b4/ffffff?text=📚'">
            </div>
            <div class="d-flex align-items-center mb-3">
              ${generateStars(b.rating)}
              <span class="ms-2 fw-semibold">${b.rating}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="text-muted small">
                Tersedia: <span class="fw-semibold" style="color: var(--primary);">${
                  b.available
                }</span>
              </div>
              <button class="btn btn-primary btn-sm" onclick="viewBookDetail(${
                b.id
              })">
                <i class="bi bi-eye"></i> Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function generateStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(rating)
      ? '<i class="bi bi-star-fill text-warning"></i>'
      : '<i class="bi bi-star text-warning"></i>'
  ).join("");
}

function searchBooks() {
  const input = document.getElementById("searchInput");
  loadBooks(input ? input.value : "");
}

function viewBookDetail(id) {
  window.location.href = `book-detail.html?id=${id}`;
}

// Book Detail
function loadBookDetail() {
  const id = parseInt(new URLSearchParams(window.location.search).get("id"));
  if (!id) {
    window.location.href = "books.html";
    return;
  }

  const books = JSON.parse(localStorage.getItem("libraryBooks") || "[]");
  const book = books.find((b) => b.id === id);
  if (!book) {
    window.location.href = "books.html";
    return;
  }

  const container = document.getElementById("bookDetailCard");
  if (container) {
    container.innerHTML = `
      <div class="card-body">
        <div class="row g-4">
          <div class="col-md-3">
            <img src="${book.image}" alt="${
      book.title
    }" class="book-detail-image" onerror="this.src='https://via.placeholder.com/300x400/ff69b4/ffffff?text=📚'">
          </div>
          <div class="col-md-9">
            <h2 class="display-5 mb-3">${book.title}</h2>
            <p class="lead text-muted mb-3">oleh ${book.author}</p>
            <span class="badge badge-${book.category.toLowerCase()} text-white mb-4">${
      book.category
    }</span>
            <div class="d-flex align-items-center mb-4">
              ${generateStars(book.rating)}
              <span class="ms-2 fs-5 fw-semibold">${book.rating}</span>
            </div>
            <div class="row g-3 mb-4">
              <div class="col-md-6"><div class="p-3 rounded" style="background: var(--light-pink);"><div class="text-muted small">ISBN</div><div class="fw-semibold">${
                book.isbn
              }</div></div></div>
              <div class="col-md-6"><div class="p-3 rounded" style="background: var(--light-pink);"><div class="text-muted small">Tahun Terbit</div><div class="fw-semibold">${
                book.year
              }</div></div></div>
              <div class="col-md-6"><div class="p-3 rounded" style="background: var(--light-pink);"><div class="text-muted small">Tersedia</div><div class="fw-semibold" style="color: var(--primary);">${
                book.available
              } eksemplar</div></div></div>
              <div class="col-md-6"><div class="p-3 rounded" style="background: var(--light-pink);"><div class="text-muted small">Status</div><div class="fw-semibold ${
                book.available > 0 ? "text-success" : "text-danger"
              }">${
      book.available > 0 ? "Tersedia" : "Tidak Tersedia"
    }</div></div></div>
            </div>
            <div class="mb-4"><h5>Deskripsi</h5><p class="text-muted">${
              book.description
            }</p></div>
            <div class="d-flex gap-3">
              ${
                book.available > 0
                  ? `<button class="btn btn-primary" onclick="borrowBook(${book.id}, '${book.title}')"><i class="bi bi-book"></i> Pinjam Buku</button>`
                  : '<button class="btn btn-secondary" disabled><i class="bi bi-x-circle"></i> Tidak Tersedia</button>'
              }
              <button class="btn btn-outline-primary" onclick="window.location.href='books.html'"><i class="bi bi-arrow-left"></i> Kembali ke Daftar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function borrowBook(id, title) {
  const books = JSON.parse(localStorage.getItem("libraryBooks") || "[]");
  const history = JSON.parse(localStorage.getItem("borrowHistory") || "[]");
  const idx = books.findIndex((b) => b.id === id);

  if (idx !== -1 && books[idx].available > 0) {
    books[idx].available--;
    localStorage.setItem("libraryBooks", JSON.stringify(books));

    const maxId =
      history.length > 0 ? Math.max(...history.map((b) => b.id)) : 0;
    history.push({
      id: maxId + 1,
      book: title,
      borrowDate: new Date().toISOString().split("T")[0],
      returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "borrowed",
    });
    localStorage.setItem("borrowHistory", JSON.stringify(history));

    const count = parseInt(localStorage.getItem("borrowedCount") || "0");
    localStorage.setItem("borrowedCount", (count + 1).toString());

    showAlert(
      "Buku berhasil dipinjam! Silakan cek profil Anda untuk melihat riwayat peminjaman.",
      "success"
    );
    setTimeout(() => window.location.reload(), 2000);
  }
}

// Profile
function loadProfile() {
  const user = JSON.parse(localStorage.getItem("libraryUser"));
  const history = JSON.parse(localStorage.getItem("borrowHistory") || "[]");
  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const name = document.getElementById("profileName");
  const avatar = document.getElementById("profileAvatar");
  if (name) name.textContent = user.name;
  if (avatar) avatar.src = user.avatar;

  loadProfileInfo(user);
  loadProfileStats(history);
  loadBorrowHistory(history);
  setupEditProfileForm(user);
}

function loadProfileInfo(user) {
  const container = document.getElementById("profileInfoContainer");
  if (container) {
    container.innerHTML = `
      <div class="col-md-6"><div class="d-flex align-items-center p-3 rounded" style="background: var(--light-pink);"><i class="bi bi-envelope fs-4 me-3" style="color: var(--primary);"></i><div><div class="text-muted small">Email</div><div class="fw-semibold">${user.email}</div></div></div></div>
      <div class="col-md-6"><div class="d-flex align-items-center p-3 rounded" style="background: var(--light-pink);"><i class="bi bi-telephone fs-4 me-3" style="color: var(--primary);"></i><div><div class="text-muted small">Telepon</div><div class="fw-semibold">${user.phone}</div></div></div></div>
      <div class="col-md-6"><div class="d-flex align-items-center p-3 rounded" style="background: var(--light-pink);"><i class="bi bi-geo-alt fs-4 me-3" style="color: var(--primary);"></i><div><div class="text-muted small">Alamat</div><div class="fw-semibold">${user.address}</div></div></div></div>
      <div class="col-md-6"><div class="d-flex align-items-center p-3 rounded" style="background: var(--light-pink);"><i class="bi bi-calendar fs-4 me-3" style="color: var(--primary);"></i><div><div class="text-muted small">Member Sejak</div><div class="fw-semibold">${user.memberSince}</div></div></div></div>
    `;
  }
}

function loadProfileStats(history) {
  const current = history.filter((b) => b.status === "borrowed").length;
  const points = 850 + history.length * 10;

  const els = {
    total: document.getElementById("totalBorrowCount"),
    current: document.getElementById("currentBorrowCount"),
    points: document.getElementById("memberPoints"),
  };
  if (els.total) els.total.textContent = history.length;
  if (els.current) els.current.textContent = current;
  if (els.points) els.points.textContent = points;

  updateProfileModals(history);
}

function updateProfileModals(history) {
  const returned = history.filter((b) => b.status === "returned").length;
  const borrowed = history.filter((b) => b.status === "borrowed").length;
  const overdue = history.filter((b) => b.status === "overdue").length;
  const points = 850 + history.length * 10;

  const totalBody = document.getElementById("totalBorrowModalBody");
  if (totalBody) {
    totalBody.innerHTML = `<p>Anda telah melakukan <strong>${history.length} peminjaman</strong> sejak menjadi member.</p><ul><li>Sedang dipinjam: ${borrowed} buku</li><li>Sudah dikembalikan: ${returned} buku</li><li>Terlambat: ${overdue} buku</li></ul>`;
  }

  const currentBody = document.getElementById("currentBorrowModalBody");
  if (currentBody) {
    const items = history.filter((b) => b.status === "borrowed");
    currentBody.innerHTML =
      items.length > 0
        ? `<p>Buku yang sedang Anda pinjam:</p><ul>${items
            .map(
              (i) =>
                `<li><strong>${i.book}</strong> - Kembali: ${formatDate(
                  i.returnDate
                )}</li>`
            )
            .join("")}</ul>`
        : "<p>Anda tidak memiliki buku yang sedang dipinjam saat ini.</p>";
  }

  const pointsBody = document.getElementById("memberPointsModalBody");
  if (pointsBody) {
    pointsBody.innerHTML = `<p>Total poin Anda: <strong>${points} poin</strong></p><p>Poin diperoleh dari:</p><ul><li>Poin dasar member: 850 poin</li><li>Peminjaman buku: ${
      history.length
    } × 10 = ${
      history.length * 10
    } poin</li></ul><p class="text-muted small">Kumpulkan poin untuk mendapatkan berbagai keuntungan dan hadiah menarik!</p>`;
  }
}

function loadBorrowHistory(history) {
  const table = document.getElementById("borrowHistoryTable");
  if (table) {
    if (history.length === 0) {
      table.innerHTML =
        '<tr><td colspan="5" class="text-center text-muted">Belum ada riwayat peminjaman</td></tr>';
      return;
    }
    table.innerHTML = history
      .map(
        (i) => `
      <tr>
        <td>${i.book}</td>
        <td>${formatDate(i.borrowDate)}</td>
        <td>${formatDate(i.returnDate)}</td>
        <td><span class="badge badge-${i.status} text-white">${getStatusText(
          i.status
        )}</span></td>
        <td><button class="btn btn-primary btn-sm" onclick="editBorrow(${
          i.id
        })"><i class="bi bi-pencil"></i> Edit</button></td>
      </tr>
    `
      )
      .join("");
    createBorrowEditModals(history);
  }
}

function formatDate(str) {
  return new Date(str).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getStatusText(status) {
  const map = {
    borrowed: "Dipinjam",
    returned: "Dikembalikan",
    overdue: "Terlambat",
  };
  return map[status] || status;
}

function createBorrowEditModals(history) {
  const container = document.getElementById("dynamicBorrowModals");
  if (container) {
    container.innerHTML = history
      .map(
        (i) => `
      <div class="modal fade" id="editBorrowModal${i.id}" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-primary"><i class="bi bi-pencil"></i> Edit Peminjaman</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form id="editBorrowForm${i.id}">
              <div class="modal-body">
                <div class="mb-3"><label class="form-label">Buku</label><input type="text" class="form-control" value="${
                  i.book
                }" readonly></div>
                <div class="mb-3"><label class="form-label">Tanggal Pinjam</label><input type="date" id="borrowDate${
                  i.id
                }" class="form-control" value="${i.borrowDate}" required></div>
                <div class="mb-3"><label class="form-label">Tanggal Kembali</label><input type="date" id="returnDate${
                  i.id
                }" class="form-control" value="${i.returnDate}" required></div>
                <div class="mb-3"><label class="form-label">Status</label><select id="status${
                  i.id
                }" class="form-select" required>
                  <option value="borrowed" ${
                    i.status === "borrowed" ? "selected" : ""
                  }>Dipinjam</option>
                  <option value="returned" ${
                    i.status === "returned" ? "selected" : ""
                  }>Dikembalikan</option>
                  <option value="overdue" ${
                    i.status === "overdue" ? "selected" : ""
                  }>Terlambat</option>
                </select></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    history.forEach((i) => {
      document
        .getElementById(`editBorrowForm${i.id}`)
        .addEventListener("submit", function (e) {
          e.preventDefault();
          saveBorrowEdit(i.id);
        });
    });
  }
}

function editBorrow(id) {
  new bootstrap.Modal(document.getElementById(`editBorrowModal${id}`)).show();
}

function saveBorrowEdit(id) {
  const history = JSON.parse(localStorage.getItem("borrowHistory") || "[]");
  const idx = history.findIndex((b) => b.id === id);
  if (idx !== -1) {
    history[idx].borrowDate = document.getElementById(`borrowDate${id}`).value;
    history[idx].returnDate = document.getElementById(`returnDate${id}`).value;
    history[idx].status = document.getElementById(`status${id}`).value;
    localStorage.setItem("borrowHistory", JSON.stringify(history));
    bootstrap.Modal.getInstance(
      document.getElementById(`editBorrowModal${id}`)
    ).hide();
    showAlert("Riwayat peminjaman berhasil diperbarui!", "success");
    setTimeout(() => loadProfile(), 1000);
  }
}

function setupEditProfileForm(user) {
  const form = document.getElementById("editProfileForm");
  if (form) {
    document.getElementById("editName").value = user.name;
    document.getElementById("editPhone").value = user.phone;
    document.getElementById("editAddress").value = user.address;

    const input = document.getElementById("editAvatarFile");
    const preview = document.getElementById("avatarPreview");
    if (input) {
      input.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file && preview) {
          const reader = new FileReader();
          reader.onload = (ev) => (preview.src = ev.target.result);
          reader.readAsDataURL(file);
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const updated = {
        ...user,
        name: document.getElementById("editName").value,
        phone: document.getElementById("editPhone").value,
        address: document.getElementById("editAddress").value,
      };
      if (input && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          updated.avatar = ev.target.result;
          saveUserProfile(updated);
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        saveUserProfile(updated);
      }
    });
  }
}

function saveUserProfile(user) {
  localStorage.setItem("libraryUser", JSON.stringify(user));
  bootstrap.Modal.getInstance(
    document.getElementById("editProfileModal")
  ).hide();
  showAlert("Profil berhasil diperbarui!", "success");
  setTimeout(() => {
    loadProfile();
    updateSidebar();
  }, 1000);
}
