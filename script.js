// ==========================================
// KETHMI KAVINDYA - PORTFOLIO JAVASCRIPT
// Features: Mobile Navigation Toggle, Smooth Scrolling, 
// Scrollspy Active Navigation, Custom Cursor (GPU Scale), Scroll Reveal, Toast Feedback,
// Hero Role Typewriter, and Auto-Writing Code Terminal Engine
// Performance: 60FPS Silky Smooth (Zero-Reflow Cursor, GPU CSS Matrix Animation)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle (Hamburger & Glass Menu)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('nav-active');

            const isNowActive = navLinks.classList.contains('nav-active');
            document.body.style.overflow = isNowActive ? 'hidden' : '';

            // Toggle hamburger icon between bars and xmark
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (isNowActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile menu when clicking any nav link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Header Scrolled State Effect
    const header = document.getElementById('header');
    if (header) {
        let isScrolled = false;
        window.addEventListener('scroll', () => {
            const shouldBeScrolled = window.scrollY > 40;
            if (shouldBeScrolled !== isScrolled) {
                isScrolled = shouldBeScrolled;
                if (isScrolled) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        }, { passive: true });
    }

    // 3. Scrollspy Navigation (Active Nav Link Highlighting)
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-links a.nav-link');

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinksList.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active-link');
                    } else {
                        link.classList.remove('active-link');
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => scrollspyObserver.observe(section));

    // 4. Custom Cursor with Hardware Accelerated Linear Interpolation (Desktop Only)
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (cursor && follower && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        }, { passive: true });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.18;
            followerY += (mouseY - followerY) * 0.18;

            follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Interactive hover grow effect on links & buttons (Class toggle to prevent Layout Reflows)
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-category, .education-card, .hero-terminal');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            }, { passive: true });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            }, { passive: true });
        });
    }

    // 5. Scroll Reveal Intersection Observer for Sections
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    sections.forEach(section => {
        if (section.id !== 'hero') {
            revealObserver.observe(section);
        }
    });

    // 6. Glass Toast Notification Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message) {
        if (toast && toastMessage) {
            toastMessage.textContent = message;
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Send Message';
            const nameInput = document.getElementById('name');
            const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'there';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showToast(`Thank you, ${userName}! Your message has been sent successfully.`);
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => null);
                    if (data && data.errors) {
                        const errMsg = data.errors.map(err => err.message).join(', ');
                        showToast(`Error: ${errMsg}`);
                    } else {
                        showToast('Oops! There was a problem sending your message.');
                    }
                }
            } catch (err) {
                showToast('Network error! Please check your connection and try again.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                }
            }
        });
    }

    // 7. Hero Subtitle Typewriter Effect with Blinking Cursor
    const typewriterTarget = document.getElementById('typewriter-text');
    if (typewriterTarget) {
        const roles = [
            "Software Engineering Student",
            "Full-Stack Web Developer",
            "PHP & React Specialist",
            "UI/UX & Database Designer"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeRoles() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typewriterTarget.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterTarget.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 85;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 400;
            }

            setTimeout(typeRoles, typeSpeed);
        }
        typeRoles();
    }

    // 8. Auto-Writing Terminal Code Widget Effect
    const codeTarget = document.getElementById('code-typewriter');
    if (codeTarget) {
        const codeScript = [
            '<span class="token-keyword">const</span> <span class="token-variable">developer</span> = {',
            '    <span class="token-property">name</span>: <span class="token-string">"Kethmi Kavindya"</span>,',
            '    <span class="token-property">role</span>: <span class="token-string">"Software Engineer"</span>,',
            '    <span class="token-property">focus</span>: <span class="token-string">"Full-Stack Web Apps"</span>,',
            '    <span class="token-property">stack</span>: [<span class="token-string">"React"</span>, <span class="token-string">"PHP"</span>, <span class="token-string">"MySQL"</span>],',
            '    <span class="token-property">status</span>: <span class="token-string">"Building Great Software"</span>',
            '};',
            '',
            '<span class="token-function">console</span>.<span class="token-method">log</span>(<span class="token-string">"Welcome to my portfolio!"</span>);'
        ];

        let currentLine = 0;

        function typeCode() {
            if (currentLine < codeScript.length) {
                const displayedLines = codeScript.slice(0, currentLine + 1).join('\n');
                codeTarget.innerHTML = displayedLines;
                currentLine++;
                setTimeout(typeCode, 320);
            } else {
                setTimeout(() => {
                    currentLine = 0;
                    codeTarget.innerHTML = "";
                    typeCode();
                }, 7000);
            }
        }
        typeCode();
    }

    // 9. Auto-Generating ASCII Art Name Animation (Blackbox.ai Style)
    const asciiCanvas = document.getElementById('ascii-canvas');
    if (asciiCanvas) {
        const ctx = asciiCanvas.getContext('2d', { willReadFrequently: true });
        let particles = [];

        function initASCII() {
            const parent = asciiCanvas.parentElement;
            asciiCanvas.width = parent.clientWidth;
            asciiCanvas.height = parent.clientHeight;

            // Create an offscreen canvas to measure and draw the text
            const offscreen = document.createElement('canvas');
            const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
            offscreen.width = asciiCanvas.width;
            offscreen.height = asciiCanvas.height;

            // Adjust font size based on screen width for responsiveness without clipping
            const isMobile = window.innerWidth < 768;
            const isSmallMobile = window.innerWidth < 420;
            const fontSize = isSmallMobile ? 40 : (isMobile ? 50 : (window.innerWidth < 1024 ? 90 : 130));

            // Draw the text internally using your WSO2 Space Mono font
            offCtx.font = `bold ${fontSize}px "Space Mono", monospace`;
            offCtx.fillStyle = 'white';
            offCtx.textAlign = 'center';
            offCtx.textBaseline = 'middle';

            // Stack words on mobile, side-by-side on desktop
            if (isMobile) {
                offCtx.fillText('KETHMI', offscreen.width / 2, offscreen.height / 2 - 25);
                offCtx.fillText('KAVINDYA', offscreen.width / 2, offscreen.height / 2 + 35);
            } else {
                offCtx.fillText('KETHMI KAVINDYA', offscreen.width / 2, offscreen.height / 2);
            }

            // Scan the offscreen canvas for non-transparent pixels
            const imgData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height).data;
            particles = [];

            // Spacing between ASCII characters (larger on mobile for 60fps GPU performance)
            const gridSize = isMobile ? 8 : 6;
            const chars = ['0', '1', '{', '}', '<', '>'];

            for (let y = 0; y < offscreen.height; y += gridSize) {
                for (let x = 0; x < offscreen.width; x += gridSize) {
                    const index = (y * offscreen.width + x) * 4;
                    const alpha = imgData[index + 3];

                    // If pixel is visible, add a particle data point
                    if (alpha > 128) {
                        particles.push({
                            x: x,
                            y: y,
                            char: chars[Math.floor(Math.random() * chars.length)],
                            // 3% chance for the particle to inherit your theme's Neon Orange
                            color: Math.random() > 0.97 ? '#FF5C00' : '#71717A'
                        });
                    }
                }
            }
        }

        function animateASCII() {
            ctx.clearRect(0, 0, asciiCanvas.width, asciiCanvas.height);

            // Render the particles using your JetBrains Code font
            ctx.font = 'bold 7px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const time = Date.now() / 1000;

            particles.forEach(p => {
                // Create a smooth left-to-right scanning wave effect based on time and X-axis
                const wave = Math.sin(p.x * 0.01 + time * 2) * 0.5 + 0.5;
                ctx.globalAlpha = 0.2 + wave * 0.8;
                ctx.fillStyle = p.color;

                // Randomly change 4% of the characters every frame for a matrix/glitch effect
                if (Math.random() < 0.04) {
                    const chars = ['0', '1', '{', '}', '<', '>'];
                    p.char = chars[Math.floor(Math.random() * chars.length)];
                }

                ctx.fillText(p.char, p.x, p.y);
            });

            requestAnimationFrame(animateASCII);
        }

        // Wait for custom fonts to load before drawing to ensure accurate dimensions
        document.fonts.ready.then(() => {
            initASCII();
            animateASCII();
        });

        // Re-calculate the grid smoothly when the browser is resized
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initASCII, 200);
        });
    }

});