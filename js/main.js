// ===================================
// INITIALISATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // AOS Init
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ===================================
    // NAVIGATION
    // ===================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===================================
    // SCROLL TO TOP
    // ===================================
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===================================
    // MODALS
    // ===================================
    const modalSkyRotor = document.getElementById('modal-sky-rotor');
    const modalHunters = document.getElementById('modal-hunters');

    // Ouvrir Sky Rotor
    document.querySelectorAll('.btn-details-sky-rotor').forEach(btn => {
        btn.addEventListener('click', () => {
            if (modalSkyRotor) {
                modalSkyRotor.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Ouvrir Hunters
    document.querySelectorAll('.btn-details-hunters').forEach(btn => {
        btn.addEventListener('click', () => {
            if (modalHunters) {
                modalHunters.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fermer modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                // Pauser toutes les vidéos du modal
                modal.querySelectorAll('video').forEach(v => {
                    v.pause();
                });
                // Reset lecteurs
                modal.querySelectorAll('[id^="play-pause-"]').forEach(b => {
                    b.innerHTML = '<i class="fas fa-play"></i> <span>Lecture</span>';
                });
            }
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            const modal = overlay.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                modal.querySelectorAll('video').forEach(v => v.pause());
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                modal.querySelectorAll('video').forEach(v => v.pause());
            });
            // Fermer aussi la lightbox image
            const imgLb = document.getElementById('imageLightbox');
            if (imgLb) imgLb.classList.remove('active');
        }
    });

    // ===================================
    // ONGLETS MODALS (SKY ROTOR + HUNTERS)
    // ===================================
    document.querySelectorAll('.modal-tabs').forEach(tabsContainer => {
        const parentModal = tabsContainer.closest('.modal');
        const tabBtns = tabsContainer.querySelectorAll('.modal-tab');

        tabBtns.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');

                // Désactiver tous les onglets de CE modal
                tabBtns.forEach(t => t.classList.remove('active'));

                // Masquer tous les contenus de CE modal
                parentModal.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('active');
                });

                // Activer l'onglet cliqué
                tab.classList.add('active');

                // Afficher le contenu correspondant
                const targetContent = document.getElementById('tab-' + tabName);
                if (targetContent) {
                    targetContent.style.display = 'block';
                    targetContent.classList.add('active');
                }

                // Remonter en haut du modal-container
                const modalContainer = parentModal.querySelector('.modal-container');
                if (modalContainer) {
                    modalContainer.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });

    // ===================================
    // IMAGE LIGHTBOX
    // ===================================
    const imageLightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const imageLightboxClose = document.getElementById('imageLightboxClose');

    // Ajouter le clic sur toutes les images dans les modals
    function bindLightboxToImages() {
        document.querySelectorAll('.modal-body img, .project-image img').forEach(img => {
            if (!img.dataset.lightboxBound) {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', function() {
                    if (imageLightbox && lightboxImg) {
                        lightboxImg.src = this.src;
                        lightboxImg.alt = this.alt;
                        imageLightbox.classList.add('active');
                    }
                });
                img.dataset.lightboxBound = 'true';
            }
        });
    }

    // Bind au chargement initial
    bindLightboxToImages();

    // Re-bind quand un modal s'ouvre
    document.querySelectorAll('.btn-details-sky-rotor, .btn-details-hunters').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(bindLightboxToImages, 100);
        });
    });

    if (imageLightboxClose) {
        imageLightboxClose.addEventListener('click', () => {
            if (imageLightbox) imageLightbox.classList.remove('active');
        });
    }

    if (imageLightbox) {
        imageLightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }

    // ===================================
    // LECTEUR VIDÉO GÉNÉRIQUE
    // ===================================
    function initVideoPlayer(videoId, btnId, progressBarId, progressFillId, timeDisplayId) {
        const video = document.getElementById(videoId);
        const btn = document.getElementById(btnId);
        const progressBar = document.getElementById(progressBarId);
        const progressFill = document.getElementById(progressFillId);
        const timeDisplay = document.getElementById(timeDisplayId);

        if (!video || !btn) return;

        // Forcer le son coupé
        video.muted = true;
        video.volume = 0;
        video.addEventListener('volumechange', () => {
            if (!video.muted) { video.muted = true; }
            if (video.volume !== 0) { video.volume = 0; }
        });

        // Play/Pause
        btn.addEventListener('click', () => {
            if (video.paused) {
                video.play().then(() => {
                    btn.innerHTML = '<i class="fas fa-pause"></i> <span>Pause</span>';
                }).catch(() => {
                    console.warn('Lecture vidéo bloquée:', videoId);
                });
            } else {
                video.pause();
                btn.innerHTML = '<i class="fas fa-play"></i> <span>Lecture</span>';
            }
        });

        // Mise à jour barre de progression
        if (progressFill && timeDisplay) {
            video.addEventListener('timeupdate', () => {
                if (video.duration) {
                    const percent = (video.currentTime / video.duration) * 100;
                    if (progressFill) progressFill.style.width = percent + '%';
                    const cm = Math.floor(video.currentTime / 60);
                    const cs = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
                    const dm = Math.floor(video.duration / 60);
                    const ds = Math.floor(video.duration % 60).toString().padStart(2, '0');
                    if (timeDisplay) timeDisplay.textContent = `${cm}:${cs} / ${dm}:${ds}`;
                }
            });
        }

        // Clic sur la barre de progression (seeking)
        if (progressBar) {
            progressBar.addEventListener('click', (e) => {
                const rect = progressBar.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                if (video.duration) {
                    video.currentTime = percent * video.duration;
                }
            });
        }

        // Réinitialiser à la fin
        video.addEventListener('ended', () => {
            btn.innerHTML = '<i class="fas fa-play"></i> <span>Lecture</span>';
            if (progressFill) progressFill.style.width = '0%';
        });
    }

    // Initialiser tous les lecteurs vidéo
    initVideoPlayer('video-fao-propulsion', 'play-pause-propulsion', 'progress-bar-propulsion', 'progress-fill-propulsion', 'time-display-propulsion');
    initVideoPlayer('video-fao-hunters', 'play-pause-fao', 'progress-bar-fao', 'progress-fill-fao', 'time-display-fao');
    initVideoPlayer('video-fao-direction', 'play-pause-direction', 'progress-bar-direction', 'progress-fill-direction', 'time-display-direction');
    initVideoPlayer('video-vues-3d', 'play-pause-vues-3d', 'progress-bar-vues-3d', 'progress-fill-vues-3d', 'time-display-vues-3d');
    initVideoPlayer('video-vues-eclatees', 'play-pause-vues-eclatees', 'progress-bar-vues-eclatees', 'progress-fill-vues-eclatees', 'time-display-vues-eclatees');
    initVideoPlayer('video-simulation-direction', 'play-pause-sim-direction', 'progress-bar-sim-direction', 'progress-fill-sim-direction', 'time-display-sim-direction');
    initVideoPlayer('video-simulation-propulsion', 'play-pause-sim-propulsion', 'progress-bar-sim-propulsion', 'progress-fill-sim-propulsion', 'time-display-sim-propulsion');
    initVideoPlayer('video-cinematique-tir', 'play-pause-cine-tir', 'progress-bar-cine-tir', 'progress-fill-cine-tir', 'time-display-cine-tir');
    initVideoPlayer('video-dynamique-propulsion', 'play-pause-dynamique-propulsion', 'progress-bar-dynamique-propulsion', 'progress-fill-dynamique-propulsion', 'time-display-dynamique-propulsion');
    initVideoPlayer('video-dynamique-tir', 'play-pause-dynamique-tir', 'progress-bar-dynamique-tir', 'progress-fill-dynamique-tir', 'time-display-dynamique-tir');
    initVideoPlayer('video-essai-direction', 'play-pause-essai-direction', 'progress-bar-essai-direction', 'progress-fill-essai-direction', 'time-display-essai-direction');
    initVideoPlayer('video-essai-propulsion', 'play-pause-essai-propulsion', 'progress-bar-essai-propulsion', 'progress-fill-essai-propulsion', 'time-display-essai-propulsion');
    initVideoPlayer('video-essai-tir', 'play-pause-essai-tir', 'progress-bar-essai-tir', 'progress-fill-essai-tir', 'time-display-essai-tir');
    initVideoPlayer('video-competition-lyon', 'play-pause-comp-lyon', 'progress-bar-comp-lyon', 'progress-fill-comp-lyon', 'time-display-comp-lyon');
    initVideoPlayer('video-course-robot', 'play-pause-course', 'progress-bar-course', 'progress-fill-course', 'time-display-course');

    // ===================================
    // ANIMATION DES ÉLÉMENTS AU SCROLL
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // ===================================
    // GESTION FORMULAIRE CONTACT
    // ===================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Le formulaire mailto s'ouvre directement dans le client mail
        });
    }

    // ===================================
    // MODAL TABS - onglet overview masqué par défaut
    // ===================================
    const tabOverview = document.getElementById('tab-overview');
    if (tabOverview) {
        tabOverview.style.display = 'none';
    }

});
