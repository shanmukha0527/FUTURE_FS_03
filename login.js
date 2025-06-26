
        // DOM Elements
        const loginForm = document.getElementById('login-form');
        const loginBtn = document.getElementById('login-btn');
        const errorMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success-message');
        const loading = document.getElementById('loading');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const toggleBtn = document.getElementById('toggle-btn');
        const forgotPasswordLink = document.getElementById('forgot-password-link');
        const googleLoginBtn = document.getElementById('google-login');
        const facebookLoginBtn = document.getElementById('facebook-login');

        // Demo users for testing
        const demoUsers = [
            { email: 'gondralashanmukha27@gmail.com', password: 'Akhilesh@27' },
            { email: 'akhileshgondrala27@gmail.com', password: 'Shannu@27' },
            { email: 'test@boat.com', password: 'test123' }
        ];

        // Utility Functions
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
        }

        function showSuccess(message) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        }

        function hideMessages() {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function setLoading(isLoading) {
            if (isLoading) {
                loading.style.display = 'block';
                loginBtn.disabled = true;
                loginBtn.textContent = 'Signing In...';
            } else {
                loading.style.display = 'none';
                loginBtn.disabled = false;
                loginBtn.textContent = 'Sign In';
            }
        }

        function clearInputErrors() {
            emailInput.classList.remove('error');
            passwordInput.classList.remove('error');
        }

        function setInputError(input) {
            input.classList.add('error');
        }

        // Password toggle functionality
        toggleBtn.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                toggleBtn.textContent = 'Show';
            }
        });

        // Input validation on blur
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                setInputError(this);
                showError('Please enter a valid email address');
            } else {
                this.classList.remove('error');
            }
        });

        // Clear errors on input
        emailInput.addEventListener('input', clearInputErrors);
        passwordInput.addEventListener('input', clearInputErrors);

        // Form submission
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            hideMessages();
            clearInputErrors();
            
            // Validation
            if (!email) {
                setInputError(emailInput);
                showError('Email is required');
                return;
            }
            
            if (!password) {
                setInputError(passwordInput);
                showError('Password is required');
                return;
            }
            
            if (!isValidEmail(email)) {
                setInputError(emailInput);
                showError('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                setInputError(passwordInput);
                showError('Password must be at least 6 characters long');
                return;
            }
            
            setLoading(true);
            
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Check demo users
                const user = demoUsers.find(u => u.email === email && u.password === password);
                
                if (user) {
                    // Store user session in memory (since localStorage is not available)
                    window.currentUser = user;
                    
                    showSuccess('Login successful! Redirecting...');
                    setTimeout(() => {
                        // Redirect to main page or dashboard
                        window.location.href = 'main.html';
                    }, 1500);
                } else {
                    showError('Invalid email or password. Try: admin@boat.com / admin123');
                }
                
            } catch (error) {
                console.error('Login error:', error);
                showError('An error occurred during login. Please try again.');
            } finally {
                setLoading(false);
            }
        });

        // Social login handlers
        googleLoginBtn.addEventListener('click', function() {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                showError('Google login is not available in demo mode');
            }, 1000);
        });

        facebookLoginBtn.addEventListener('click', function() {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                showError('Facebook login is not available in demo mode');
            }, 1000);
        });

        // Forgot password handler
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('Enter your email address to reset password:');
            if (email && isValidEmail(email)) {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    showSuccess('Password reset link sent to your email! (Demo mode - no actual email sent)');
                }, 1500);
            } else if (email) {
                showError('Please enter a valid email address');
            }
        });

        // Auto-fill demo credentials on page load
        window.addEventListener('load', function() {
            // Show demo credentials hint
            setTimeout(() => {
                if (!emailInput.value && !passwordInput.value) {
                    const showDemo = confirm('Would you like to use demo credentials?\n\nEmail: admin@boat.com\nPassword: admin123');
                    if (showDemo) {
                        emailInput.value = 'admin@boat.com';
                        passwordInput.value = 'admin123';
                    }
                }
            }, 1000);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Alt + D for demo credentials
            if (e.altKey && e.key === 'd') {
                e.preventDefault();
                emailInput.value = 'admin@boat.com';
                passwordInput.value = 'admin123';
                showSuccess('Demo credentials loaded!');
            }
        });

        // Handle form submission on Enter key
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !loginBtn.disabled) {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });
    