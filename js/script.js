// Inizializzazione per garantire che tutte le funzioni vengano eseguite nel giusto ordine
document.addEventListener('DOMContentLoaded', function() {
    // Variabile per tenere traccia della lingua attuale
    let currentLang = 'it';
    
    // DEBUGGING: Verifichiamo se gli album sono caricati correttamente
    console.log("Albums data loaded:", albums);
    
    // Ottenere i riferimenti alle griglie per ciascuna categoria
    const category1Grid = document.getElementById('category1Grid');
    const category2Grid = document.getElementById('category2Grid');
    const category3Grid = document.getElementById('category3Grid');
    
    // DEBUGGING: Verifichiamo se i container sono trovati correttamente
    console.log("Grid containers:", category1Grid, category2Grid, category3Grid);
    
    // Modal e altri elementi DOM
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalLink = document.getElementById("modalLink");
    const span = document.getElementsByClassName("close")[0];
    
    // Funzione per costruire le card degli album
    function buildCards() {
        try {
            // Pulire tutte le griglie
            if (category1Grid) category1Grid.innerHTML = '';
            if (category2Grid) category2Grid.innerHTML = '';
            if (category3Grid) category3Grid.innerHTML = '';
            
            // DEBUGGING: Verifico se albums è definito e accessibile
            if (!albums || !Array.isArray(albums)) {
                console.error("Albums array is not available or not an array:", albums);
                return;
            }
            
            console.log("Building cards for", albums.length, "albums");
            
            // Creare le card per ogni album
            albums.forEach((album, idx) => {
                try {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.style.animationDelay = `${idx * 0.1}s`;
                    
                    // Verificare se l'immagine esiste
                    const imgPath = album.img || '';
                    console.log(`Album ${idx} image path:`, imgPath);
                    
                    // Creare il contenuto della card dell'album
                    card.innerHTML = `
                        <div class="card-image">
                            <img src="${imgPath}" alt="${album.title}" data-index="${idx}">
                            <div class="overlay"></div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${album.title}</h3>
                            <audio controls>
                                <source src="${album.audio}" type="audio/mpeg">
                                Il tuo browser non supporta l'elemento audio.
                            </audio>
                        </div>
                    `;
                    
                    // Aggiungere l'evento click per aprire il modal
                    const imgElement = card.querySelector('img');
                    if (imgElement) {
                        imgElement.addEventListener('click', function() {
                            const index = parseInt(this.getAttribute('data-index'), 10);
                            openModal(index);
                        });
                    }
                    
                    // Aggiungere la card alla griglia appropriata in base alla categoria
                    const category = album.category;
                    
                    if (category === 1 && category1Grid) {
                        category1Grid.appendChild(card);
                        console.log(`Added album ${album.title} to category 1`);
                    } else if (category === 2 && category2Grid) {
                        category2Grid.appendChild(card);
                        console.log(`Added album ${album.title} to category 2`);
                    } else if (category === 3 && category3Grid) {
                        category3Grid.appendChild(card);
                        console.log(`Added album ${album.title} to category 3`);
                    } else {
                        console.warn(`Could not add album ${album.title} to category ${category}`);
                    }
                } catch (err) {
                    console.error("Error building card for album", idx, err);
                }
            });
        } catch (err) {
            console.error("Error in buildCards function:", err);
        }
    }
    
    // Funzionalità del modal
    function openModal(index) {
        try {
            const album = albums[index];
            modalTitle.innerText = album.title;
            
            // Gestione del testo multilingue con fallback
            const text = album.text || {};
            modalText.innerText = text[currentLang] || text.it || '';
            
            modalLink.href = album.ytLink || "https://music.youtube.com";
            
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        } catch (err) {
            console.error("Error opening modal:", err);
        }
    }
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
    
    if (span) {
        span.onclick = function() {
            closeModal();
        };
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
    
    // Funzionalità di navigazione
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Nascondere tutte le sezioni
            document.querySelectorAll('.coming-soon').forEach(section => {
                section.style.display = 'none';
            });
            
            // Rimuovere la classe active da tutti i link
            document.querySelectorAll('.nav-links a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Aggiungere la classe active al link cliccato
            this.classList.add('active');
            
            // Mostrare la sezione selezionata
            const targetId = this.getAttribute('href').substring(1);
            
            // Gestire diversamente la sezione discografia
            if (targetId !== 'discografia') {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }
            } else {
                // Se è la discografia, assicurarsi che le card siano visibili
                console.log("Showing discography section");
                // Rebuilding cards to ensure all are displayed
                buildCards();
            }
            
            // Scorrere fino alla sezione
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Costruire le card all'inizio
    console.log("Initial buildCards call");
    buildCards();
    
    // Funzionalità del selettore di lingua
    const languageBtns = document.querySelectorAll('.language-btn');
    
    // Funzione per cambiare lingua
    function changeLanguage(lang) {
        currentLang = lang;
        
        console.log("Changing language to:", lang);
        
        // Aggiornare il pulsante della lingua attiva
        languageBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Aggiornare tutti gli elementi traducibili
        document.querySelectorAll(`[data-${lang}]`).forEach(element => {
            element.textContent = element.dataset[lang];
        });
        
        // Aggiornare il testo del pulsante di ascolto nel modale
        const modalLinkElement = document.getElementById('modalLink');
        if (modalLinkElement && modalLinkElement.dataset[lang]) {
            modalLinkElement.textContent = modalLinkElement.dataset[lang];
        }
        
        // Nascondere tutti i div della privacy policy in diverse lingue e mostrare quello selezionato
        document.querySelectorAll('[id^="privacy-"]').forEach(div => {
            div.style.display = 'none';
        });
        
        const privacyElement = document.getElementById('privacy-' + lang);
        if (privacyElement) {
            privacyElement.style.display = 'block';
        }
    }
    
    // Aggiungere l'evento click ai pulsanti della lingua
    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    
    // Banner di consenso ai cookie
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.querySelector('.accept-cookies');
    const rejectCookiesBtn = document.querySelector('.reject-cookies');
    
    // Controllare se l'utente ha già fatto una scelta
    if (cookieConsent && !localStorage.getItem('cookieChoice')) {
        // Mostrare il banner di consenso ai cookie dopo un breve ritardo
        setTimeout(() => {
            cookieConsent.style.display = 'flex';
        }, 1000);
    }
    
    // Gestire il pulsante di accettazione dei cookie
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'accepted');
            if (cookieConsent) cookieConsent.style.display = 'none';
        });
    }
    
    // Gestire il pulsante di rifiuto dei cookie
    if (rejectCookiesBtn) {
        rejectCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'rejected');
            if (cookieConsent) cookieConsent.style.display = 'none';
        });
    }
    
    // Modal della privacy policy
    const privacyPolicy = document.getElementById('privacy-policy');
    const privacyLink = document.getElementById('privacy-link');
    const closePrivacy = document.getElementById('close-privacy');
    
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (privacyPolicy) {
                privacyPolicy.style.display = 'flex';
                setTimeout(() => {
                    privacyPolicy.style.opacity = '1';
                }, 10);
            }
        });
    }
    
    if (closePrivacy) {
        closePrivacy.addEventListener('click', function() {
            if (privacyPolicy) {
                privacyPolicy.style.opacity = '0';
                setTimeout(() => {
                    privacyPolicy.style.display = 'none';
                }, 300);
            }
        });
    }
});