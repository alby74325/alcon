// Inizializzazione per garantire che tutte le funzioni vengano eseguite nel giusto ordine
document.addEventListener('DOMContentLoaded', function() {
    // Variabile per tenere traccia della lingua attuale
    let currentLang = 'it';
    
    // Ottenere i riferimenti alle griglie per ciascuna categoria
    const category1Grid = document.getElementById('category1Grid');
    const category2Grid = document.getElementById('category2Grid');
    const category3Grid = document.getElementById('category3Grid');
    
    // Modal e altri elementi DOM
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalLink = document.getElementById("modalLink");
    const span = document.getElementsByClassName("close")[0];
    
    // Funzione per costruire le card degli album
    function buildCards() {
        // Pulire tutte le griglie
        category1Grid.innerHTML = '';
        category2Grid.innerHTML = '';
        category3Grid.innerHTML = '';
        
        // Creare le card per ogni album
        albums.forEach((album, idx) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${idx * 0.1}s`;
            
            // Creare il contenuto della card dell'album
            card.innerHTML = `
                <div class="card-image">
                    <img src="${album.img}" alt="${album.title}" data-index="${idx}">
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
            imgElement.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'), 10);
                openModal(index);
            });
            
            // Aggiungere la card alla griglia appropriata in base alla categoria
            if (album.category === 1) {
                category1Grid.appendChild(card);
            } else if (album.category === 2) {
                category2Grid.appendChild(card);
            } else if (album.category === 3) {
                category3Grid.appendChild(card);
            }
        });
    }
    
    // Funzionalità del modal
    function openModal(index) {
        const album = albums[index];
        modalTitle.innerText = album.title;
        modalText.innerText = currentLang === 'it' ? album.text[currentLang] : (album.text[currentLang] || album.text.it);
        modalLink.href = album.ytLink || "https://music.youtube.com";
        
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
    
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
    
    span.onclick = function() {
        closeModal();
    };
    
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
            
            if (targetId !== 'discografia') {
                document.getElementById(targetId).style.display = 'block';
            }
            
            // Scorrere fino alla sezione
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Costruire le card all'inizio
    buildCards();
    
    // Funzionalità del selettore di lingua
    const languageBtns = document.querySelectorAll('.language-btn');
    
    // Funzione per cambiare lingua
    function changeLanguage(lang) {
        currentLang = lang;
        
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
        document.getElementById('modalLink').textContent = document.getElementById('modalLink').dataset[lang];
        
        // Nascondere tutti i div della privacy policy in diverse lingue e mostrare quello selezionato
        document.querySelectorAll('[id^="privacy-"]').forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById('privacy-' + lang).style.display = 'block';
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
    if (!localStorage.getItem('cookieChoice')) {
        // Mostrare il banner di consenso ai cookie dopo un breve ritardo
        setTimeout(() => {
            cookieConsent.style.display = 'flex';
        }, 1000);
    }
    
    // Gestire il pulsante di accettazione dei cookie
    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'accepted');
        cookieConsent.style.display = 'none';
    });
    
    // Gestire il pulsante di rifiuto dei cookie
    rejectCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'rejected');
        cookieConsent.style.display = 'none';
    });
    
    // Modal della privacy policy
    const privacyPolicy = document.getElementById('privacy-policy');
    const privacyLink = document.getElementById('privacy-link');
    const closePrivacy = document.getElementById('close-privacy');
    
    privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        privacyPolicy.style.display = 'flex';
        setTimeout(() => {
            privacyPolicy.style.opacity = '1';
        }, 10);
    });
    
    closePrivacy.addEventListener('click', function() {
        privacyPolicy.style.opacity = '0';
        setTimeout(() => {
            privacyPolicy.style.display = 'none';
        }, 300);
    });
});