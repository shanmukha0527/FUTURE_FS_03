// Expanded product data with more products
        const products = [
            // Headphones
            { 
                id: 1, 
                name: "boAt Rockerz 450", 
                category: "headphones", 
                price: "₹1,999", 
                originalPrice: "₹2,999",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "25% OFF"
            },
            { 
                id: 6, 
                name: "boAt Rockerz 255 Pro+", 
                category: "headphones", 
                price: "₹2,499", 
                originalPrice: "₹3,499",
                image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "29% OFF"
            },
            { 
                id: 9, 
                name: "boAt Rockerz 370", 
                category: "headphones", 
                price: "₹1,699", 
                originalPrice: "₹2,499",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "32% OFF"
            },
            { 
                id: 10, 
                name: "boAt Rockerz 510", 
                category: "headphones", 
                price: "₹2,199", 
                originalPrice: "₹3,199",
                image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "31% OFF"
            },
            { 
                id: 11, 
                name: "boAt Rockerz 550", 
                category: "headphones", 
                price: "₹2,799", 
                originalPrice: "₹3,999",
                image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "30% OFF"
            },
            { 
                id: 12, 
                name: "boAt Rockerz 600", 
                category: "headphones", 
                price: "₹3,299", 
                originalPrice: "₹4,799",
                image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "31% OFF"
            },

            // Earphones
            { 
                id: 2, 
                name: "boAt Airdopes 131", 
                category: "earphones", 
                price: "₹1,299", 
                originalPrice: "₹1,999",
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "35% OFF"
            },
            { 
                id: 5, 
                name: "boAt Bassheads 100", 
                category: "earphones", 
                price: "₹399", 
                originalPrice: "₹699",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "43% OFF"
            },
            { 
                id: 13, 
                name: "boAt Airdopes 441", 
                category: "earphones", 
                price: "₹2,499", 
                originalPrice: "₹3,499",
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "29% OFF"
            },
            { 
                id: 14, 
                name: "boAt Airdopes 621", 
                category: "earphones", 
                price: "₹1,999", 
                originalPrice: "₹2,999",
                image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "33% OFF"
            },
            { 
                id: 15, 
                name: "boAt Bassheads 900", 
                category: "earphones", 
                price: "₹799", 
                originalPrice: "₹1,299",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "38% OFF"
            },
            { 
                id: 16, 
                name: "boAt Airdopes 711", 
                category: "earphones", 
                price: "₹2,799", 
                originalPrice: "₹3,999",
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "30% OFF"
            },

            // Speakers
            { 
                id: 3, 
                name: "boAt Stone 350", 
                category: "speakers", 
                price: "₹1,799", 
                originalPrice: "₹2,499",
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "28% OFF"
            },
            { 
                id: 7, 
                name: "boAt Stone 1000", 
                category: "speakers", 
                price: "₹3,999", 
                originalPrice: "₹5,499",
                image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "27% OFF"
            },
            { 
                id: 17, 
                name: "boAt Stone 200", 
                category: "speakers", 
                price: "₹1,299", 
                originalPrice: "₹1,899",
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "32% OFF"
            },
            { 
                id: 18, 
                name: "boAt Stone 650", 
                category: "speakers", 
                price: "₹2,499", 
                originalPrice: "₹3,499",
                image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "29% OFF"
            },
            { 
                id: 19, 
                name: "boAt Stone 1400", 
                category: "speakers", 
                price: "₹5,999", 
                originalPrice: "₹8,499",
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "29% OFF"
            },
            { 
                id: 20, 
                name: "boAt PartyPal 20", 
                category: "speakers", 
                price: "₹7,999", 
                originalPrice: "₹11,999",
                image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "33% OFF"
            },

            // Smart Watches
            { 
                id: 4, 
                name: "boAt Watch Delta", 
                category: "smartwatch", 
                price: "₹3,999", 
                originalPrice: "₹5,999",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "33% OFF"
            },
            { 
                id: 8, 
                name: "boAt Storm Call", 
                category: "smartwatch", 
                price: "₹2,799", 
                originalPrice: "₹3,999",
                image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "30% OFF"
            },
            { 
                id: 21, 
                name: "boAt Xtend", 
                category: "smartwatch", 
                price: "₹4,999", 
                originalPrice: "₹7,499",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "33% OFF"
            },
            { 
                id: 22, 
                name: "boAt Wave Neo", 
                category: "smartwatch", 
                price: "₹2,299", 
                originalPrice: "₹3,299",
                image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "30% OFF"
            },
            { 
                id: 23, 
                name: "boAt Wave Pro", 
                category: "smartwatch", 
                price: "₹3,799", 
                originalPrice: "₹5,499",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "31% OFF"
            },
            { 
                id: 24, 
                name: "boAt Flash Edition", 
                category: "smartwatch", 
                price: "₹5,999", 
                originalPrice: "₹8,999",
                image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                badge: "33% OFF"
            }
        ];

        // DOM Elements
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const productGrid = document.getElementById('product-grid');
        const loading = document.getElementById('loading');
        const cartNotification = document.getElementById('cart-notification');

        // Current filter state
        let currentFilter = 'all';

        // Mobile Navigation
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('active');
            }
        });

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Load products function
        function loadProducts(productsToShow = products) {
            loading.style.display = 'block';
            productGrid.innerHTML = '';

            setTimeout(() => {
                loading.style.display = 'none';
                productsToShow.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = `
                        <div class="product-image" style="background-image: url('${product.image}')">
                            <div class="product-badge">${product.badge}</div>
                        </div>
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <div class="product-price">
                                ${product.price} 
                                <span style="text-decoration: line-through; color: #999; font-size: 0.9rem; margin-left: 10px;">${product.originalPrice}</span>
                            </div>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    `;
                    productGrid.appendChild(productCard);
                });
            }, 800);
        }

        // Filter products by category
        function filterProducts(category) {
            currentFilter = category;
            
            // Update active filter button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Filter and load products
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            
            loadProducts(filteredProducts);
            scrollToSection('all-products');
        }

        // Add to cart function
        function addToCart(productId) {
            // Show notification
            cartNotification.classList.add('show');
            
            // Send to backend (API call simulation)
            console.log(`Adding product ${productId} to cart`);
            
            // In a real application, you would make an API call here
            // fetch('/api/cart/add', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ productId: productId })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Product added to cart:', data);
            // })
            // .catch(error => {
            //     console.error('Error adding to cart:', error);
            // });

            // Hide notification after 3 seconds
            setTimeout(() => {
                cartNotification.classList.remove('show');
            }, 3000);
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#000';
                header.style.backdropFilter = 'none';
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            loadProducts();
        });