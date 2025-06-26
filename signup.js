
        let currentStep = 1;
        const totalSteps = 3;

        // Navigation functions
        function goHome() {
            alert('Navigate to home page');
        }

        function goToLogin() {
            alert('Navigate to login page');
        }

        function showTerms() {
            alert('Terms & Conditions would open here');
        }

        function showPrivacy() {
            alert('Privacy Policy would open here');
        }

        // Password visibility toggle
        function togglePassword(fieldId) {
            const field = document.getElementById(fieldId);
            const button = field.parentElement.querySelector('.toggle-btn');
            
            if (field.type === 'password') {
                field.type = 'text';
                button.textContent = '🙈';
            } else {
                field.type = 'password';
                button.textContent = '👁️';
            }
        }

        // Password strength checker
        document.getElementById('password').addEventListener('input', function() {
            const password = this.value;
            const strengthIndicator = document.getElementById('strength-indicator');
            const strengthText = document.getElementById('password-strength');
            const bars = strengthIndicator.querySelectorAll('.strength-bar');
            
            let strength = 0;
            let message = '';
            
            if (password.length >= 8) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[a-z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            
            // Reset bars
            bars.forEach(bar => {
                bar.className = 'strength-bar';
            });
            
            if (strength >= 1) {
                bars[0].classList.add('weak');
                message = 'Weak';
            }
            if (strength >= 2) {
                bars[1].classList.add('weak');
                message = 'Fair';
            }
            if (strength >= 3) {
                bars[0].classList.remove('weak');
                bars[1].classList.remove('weak');
                bars[0].classList.add('medium');
                bars[1].classList.add('medium');
                bars[2].classList.add('medium');
                message = 'Good';
            }
            if (strength >= 4) {
                bars.forEach((bar, index) => {
                    if (index < 4) {
                        bar.className = 'strength-bar strong';
                    }
                });
                message = 'Strong';
            }
            
            strengthText.textContent = message;
        });

        // Step navigation
        function nextStep() {
            if (validateCurrentStep() && currentStep < totalSteps) {
                document.getElementById(`form-step-${currentStep}`).classList.remove('active');
                document.getElementById(`step-${currentStep}`).classList.remove('active');
                document.getElementById(`step-${currentStep}`).classList.add('completed');
                
                currentStep++;
                
                document.getElementById(`form-step-${currentStep}`).classList.add('active');
                document.getElementById(`step-${currentStep}`).classList.add('active');
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                document.getElementById(`form-step-${currentStep}`).classList.remove('active');
                document.getElementById(`step-${currentStep}`).classList.remove('active');
                
                currentStep--;
                
                document.getElementById(`form-step-${currentStep}`).classList.add('active');
                document.getElementById(`step-${currentStep}`).classList.add('active');
                document.getElementById(`step-${currentStep}`).classList.remove('completed');
            }
        }

        // Validation
        function validateCurrentStep() {
            const currentStepElement = document.getElementById(`form-step-${currentStep}`);
            const requiredFields = currentStepElement.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff4757';
                    isValid = false;
                } else {
                    field.style.borderColor = '#e1e1e1';
                }
            });

            // Password match validation for step 1
            if (currentStep === 1) {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    document.getElementById('confirmPassword').style.borderColor = '#ff4757';
                    showError('Passwords do not match');
                    isValid = false;
                }

                // Email validation
                const email = document.getElementById('email').value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email && !emailRegex.test(email)) {
                    document.getElementById('email').style.borderColor = '#ff4757';
                    showError('Please enter a valid email address');
                    isValid = false;
                }
            }

            if (!isValid && currentStep !== 1) {
                showError('Please fill in all required fields');
            }

            return isValid;
        }

        // Error handling
        function showError(message) {
            const errorDiv = document.getElementById('error-message');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            document.getElementById('success-message').style.display = 'none';
            setTimeout(() => {
                errorDiv.style.display = 'none';
            }, 5000);
        }

        function showSuccess(message) {
            const successDiv = document.getElementById('success-message');
            successDiv.textContent = message;
            successDiv.style.display = 'block';
            document.getElementById('error-message').style.display = 'none';
        }

        // Form submission
        document.getElementById('signup-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (validateCurrentStep()) {
                // Show loading
                document.getElementById('loading').style.display = 'block';
                document.querySelector('.signup-btn').disabled = true;
                
                try {
                    // Get interests
                    const interestsSelect = document.getElementById('interests');
                    const interests = Array.from(interestsSelect.selectedOptions).map(option => option.value);
                    
                    // Prepare user data
                    const userData = {
                        first_name: document.getElementById('firstName').value,
                        last_name: document.getElementById('lastName').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        dob: document.getElementById('dateOfBirth').value,
                        gender: document.getElementById('gender').value,
                        address: document.getElementById('address').value,
                        city: document.getElementById('city').value,
                        pincode: document.getElementById('pincode').value,
                        interests: interests,
                        newsletter: document.getElementById('newsletter').checked,
                        promotions: document.getElementById('promotions').checked,
                    };

                    console.log('User data:', userData);
                    
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Hide loading
                    document.getElementById('loading').style.display = 'none';
                    document.querySelector('.signup-btn').disabled = false;
                    
                    // Success
                    showSuccess('Account created successfully! Welcome to boAt!');
                    
                    // Reset form after successful submission
                    setTimeout(() => {
                        this.reset();
                        currentStep = 1;
                        document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
                        document.querySelectorAll('.step').forEach(step => {
                            step.classList.remove('active', 'completed');
                        });
                        document.getElementById('form-step-1').classList.add('active');
                        document.getElementById('step-1').classList.add('active');
                        document.getElementById('password-strength').textContent = '';
                        document.querySelectorAll('.strength-bar').forEach(bar => {
                            bar.className = 'strength-bar';
                        });
                    }, 2000);
                    
                } catch (error) {
                    // Hide loading
                    document.getElementById('loading').style.display = 'none';
                    document.querySelector('.signup-btn').disabled = false;
                    
                    // Show error
                    showError('An error occurred while creating your account. Please try again.');
                    console.error('Signup error:', error);
                }
            }
        });

        // Social signup
        function socialSignup(provider) {
            showError(`${provider} signup is not available in demo mode`);
        }

        // Form validation on input
        document.querySelectorAll('input, select').forEach(field => {
            field.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#ff4757';
                } else {
                    this.style.borderColor = '#e1e1e1';
                }
            });

            // Clear error styling on focus
            field.addEventListener('focus', function() {
                this.style.borderColor = '#ff6b35';
            });
        });

        // Phone validation
        document.getElementById('phone').addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            this.value = value;
        });

        // Pincode validation
        document.getElementById('pincode').addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 6) {
                value = value.slice(0, 6);
            }
            this.value = value;
        });

        // Confirm password validation
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            
            if (confirmPassword && password !== confirmPassword) {
                this.style.borderColor = '#ff4757';
            } else {
                this.style.borderColor = '#e1e1e1';
            }
        });
    