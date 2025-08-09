// Sample product data
const products = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        price: "Rp 5.000",
        description: "Obat penurun demam dan pereda nyeri",
        category: "obat",
        icon: "fas fa-pills"
    },
    {
        id: 2,
        name: "Vitamin C 1000mg",
        price: "Rp 15.000",
        description: "Meningkatkan sistem kekebalan tubuh",
        category: "vitamin",
        icon: "fas fa-tablets"
    },
    {
        id: 3,
        name: "Termometer Digital",
        price: "Rp 75.000",
        description: "Alat ukur suhu tubuh digital",
        category: "alat",
        icon: "fas fa-thermometer-half"
    },
    {
        id: 4,
        name: "Amoxicillin 500mg",
        price: "Rp 20.000",
        description: "Antibiotik untuk infeksi bakteri",
        category: "obat",
        icon: "fas fa-capsules"
    },
    {
        id: 5,
        name: "Multivitamin",
        price: "Rp 30.000",
        description: "Vitamin lengkap untuk kesehatan harian",
        category: "vitamin",
        icon: "fas fa-capsules"
    },
    {
        id: 6,
        name: "Alat Pengukur Tekanan Darah",
        price: "Rp 150.000",
        description: "Alat untuk mengukur tekanan darah secara akurat",
        category: "alat",
        icon: "fas fa-heartbeat"
    },
    // Produk tambahan
    {
        id: 7,
        name: "Ibuprofen 400mg",
        price: "Rp 8.000",
        description: "Obat anti nyeri dan anti inflamasi",
        category: "obat",
        icon: "fas fa-pills"
    },
    {
        id: 8,
        name: "Vitamin D3 1000IU",
        price: "Rp 25.000",
        description: "Membantu kesehatan tulang dan imun",
        category: "vitamin",
        icon: "fas fa-tablets"
    },
    {
        id: 9,
        name: "Masker Medis 3 Ply",
        price: "Rp 2.000",
        description: "Masker pelindung sekali pakai",
        category: "alat",
        icon: "fas fa-head-side-mask"
    },
    {
        id: 10,
        name: "Cetirizine 10mg",
        price: "Rp 7.000",
        description: "Obat alergi dan antihistamin",
        category: "obat",
        icon: "fas fa-capsules"
    },
    {
        id: 11,
        name: "Vitamin B Complex",
        price: "Rp 18.000",
        description: "Vitamin B lengkap untuk metabolisme tubuh",
        category: "vitamin",
        icon: "fas fa-capsules"
    },
    {
        id: 12,
        name: "Hand Sanitizer 100ml",
        price: "Rp 10.000",
        description: "Pembersih tangan tanpa bilas",
        category: "alat",
        icon: "fas fa-pump-medical"
    },
    {
        id: 13,
        name: "Antasida Doen",
        price: "Rp 6.000",
        description: "Obat maag dan asam lambung",
        category: "obat",
        icon: "fas fa-pills"
    },
    {
        id: 14,
        name: "Vitamin E 400 IU",
        price: "Rp 22.000",
        description: "Antioksidan untuk kesehatan kulit",
        category: "vitamin",
        icon: "fas fa-tablets"
    },
    {
        id: 15,
        name: "Tensimeter Digital",
        price: "Rp 200.000",
        description: "Alat ukur tekanan darah otomatis",
        category: "alat",
        icon: "fas fa-heartbeat"
    },
    {
        id: 16,
        name: "Loperamide 2mg",
        price: "Rp 5.000",
        description: "Obat diare",
        category: "obat",
        icon: "fas fa-capsules"
    },
    {
        id: 17,
        name: "Vitamin A 5000 IU",
        price: "Rp 12.000",
        description: "Menjaga kesehatan mata",
        category: "vitamin",
        icon: "fas fa-capsules"
    },
    {
        id: 18,
        name: "Alat Cek Gula Darah",
        price: "Rp 120.000",
        description: "Alat untuk memeriksa kadar gula darah",
        category: "alat",
        icon: "fas fa-tint"
    },
    {
        id: 19,
        name: "Omeprazole 20mg",
        price: "Rp 9.000",
        description: "Obat lambung dan GERD",
        category: "obat",
        icon: "fas fa-pills"
    },
    {
        id: 20,
        name: "Vitamin C Effervescent",
        price: "Rp 20.000",
        description: "Vitamin C larut air, rasa jeruk",
        category: "vitamin",
        icon: "fas fa-tablets"
    }
    // Tambahkan lebih banyak produk sesuai kebutuhan...
];

// Render products to the page
function renderProducts(productList) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    if (productList.length === 0) {
        productGrid.innerHTML = '<p>Tidak ada produk yang ditemukan.</p>';
        return;
    }

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
            <div class="product-image"><i class="${product.icon}"></i></div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// Filter products by category
function filterProducts(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    }
}

// Search products by name or description
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// Scroll to section smoothly
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add to cart placeholder function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Produk "${product.name}" telah ditambahkan ke keranjang.`);
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }

    // Toggle mode terang/gelap
    const toggleMode = document.getElementById('toggleMode');
    const icon = toggleMode.querySelector('i');
    toggleMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Initial render
    renderProducts(products);
    filterProducts('all');
});

// Search on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        searchProducts();
    }
});
