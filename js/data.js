// Album data con categorie e traduzioni
const albums = [
    // Categoria 1: Epica Cosmica
    { 
        title: "Alcon, King of the Universe", 
        img: "images/01_alcon_king_of_the_universe.jpg", 
        audio: "audio/01_alcon_king_of_the_universe.mp3", 
        text: {
            it: "Una ballata epica che racconta l'ascesa di Alcon, sovrano di mondi e signore delle stelle.",
            en: "An epic ballad that tells the rise of Alcon, sovereign of worlds and lord of the stars.",
            fr: "Une ballade épique qui raconte l'ascension d'Alcon, souverain des mondes et seigneur des étoiles.",
            es: "Una balada épica que cuenta el ascenso de Alcon, soberano de mundos y señor de las estrellas.",
            de: "Eine epische Ballade, die den Aufstieg von Alcon, dem Herrscher der Welten und Herrn der Sterne, erzählt."
        }, 
        ytLink: "https://music.youtube.com/playlist?list=OLAK5uy_np1ZAFk1jAy8lmt3sAjoPTZE-LCKOV9t0&si=1_0OF0_xORu2Qa8V", 
        category: 1 
    },
    { 
        title: "Alcon and the Assembly of Knights", 
        img: "images/02_alcon_and_the_assembly_of_knights.jpg", 
        audio: "audio/02_alcon_and_the_assembly_of_knights.mp3", 
        text: {
            it: "La leggenda dell'antico consiglio dei cavalieri, radunati per proteggere l'universo da forze oscure.",
            en: "The legend of the ancient council of knights, gathered to protect the universe from dark forces.",
            fr: "La légende de l'ancien conseil des chevaliers, réunis pour protéger l'univers des forces obscures.",
            es: "La leyenda del antiguo consejo de caballeros, reunidos para proteger el universo de fuerzas oscuras.",
            de: "Die Legende des alten Rates der Ritter, die sich versammeln, um das Universum vor dunklen Kräften zu schützen."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder2", 
        category: 1 
    },
    { 
        title: "Captain of the Cosmos", 
        img: "images/03_captain_of_the_cosmos.jpg", 
        audio: "audio/03_captain_of_the_cosmos.mp3", 
        text: {
            it: "Un viaggio attraverso le galassie al comando di un'astronave leggendaria, alla ricerca di nuove speranze.",
            en: "A journey through the galaxies at the helm of a legendary spaceship, in search of new hopes.",
            fr: "Un voyage à travers les galaxies aux commandes d'un vaisseau spatial légendaire, à la recherche de nouveaux espoirs.",
            es: "Un viaje a través de las galaxias al mando de una nave espacial legendaria, en busca de nuevas esperanzas.",
            de: "Eine Reise durch die Galaxien am Steuer eines legendären Raumschiffs, auf der Suche nach neuen Hoffnungen."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder3", 
        category: 1 
    },
    { 
        title: "The Twelve Knights of Alagon", 
        img: "images/04_the_twelve_knights_of_alagon.jpg", 
        audio: "audio/04_the_twelve_knights_of_alagon.mp3", 
        text: {
            it: "Dodici eroi, dodici destini intrecciati, uniti sotto il vessillo di Alagon per salvare il cosmo.",
            en: "Twelve heroes, twelve intertwined destinies, united under the banner of Alagon to save the cosmos.",
            fr: "Douze héros, douze destins entrelacés, unis sous la bannière d'Alagon pour sauver le cosmos.",
            es: "Doce héroes, doce destinos entrelazados, unidos bajo el estandarte de Alagon para salvar el cosmos.",
            de: "Zwölf Helden, zwölf verflochtene Schicksale, vereint unter dem Banner von Alagon, um den Kosmos zu retten."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder4", 
        category: 1 
    },
    { 
        title: "The Veil of Prophecy", 
        img: "images/05_the_veil_of_prophecy.jpg", 
        audio: "audio/05_the_veil_of_prophecy.mp3", 
        text: {
            it: "Un velo sottile separa la verità dalla leggenda: chi saprà decifrare l'antica profezia?",
            en: "A thin veil separates truth from legend: who will be able to decipher the ancient prophecy?",
            fr: "Un mince voile sépare la vérité de la légende: qui saura déchiffrer l'ancienne prophétie?",
            es: "Un delgado velo separa la verdad de la leyenda: ¿quién podrá descifrar la antigua profecía?",
            de: "Ein dünner Schleier trennt Wahrheit von Legende: Wer wird die alte Prophezeiung entschlüsseln können?"
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder5", 
        category: 1 
    },
    { 
        title: "Orion's Eclipse: The Mage's Prophecy", 
        img: "images/06_orions_eclipse_the_mages_prophecy.jpg", 
        audio: "audio/06_orions_eclipse_the_mages_prophecy.mp3", 
        text: {
            it: "L'eclissi di Orione risveglia antichi poteri. Un mago dimenticato svela il destino dell'universo.",
            en: "Orion's eclipse awakens ancient powers. A forgotten mage reveals the fate of the universe.",
            fr: "L'éclipse d'Orion réveille d'anciens pouvoirs. Un mage oublié révèle le destin de l'univers.",
            es: "El eclipse de Orión despierta poderes antiguos. Un mago olvidado revela el destino del universo.",
            de: "Die Finsternis des Orion erweckt uralte Kräfte. Ein vergessener Magier enthüllt das Schicksal des Universums."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder6", 
        category: 1 
    },
    { 
        title: "Victoria: Dawn of the Cosmos", 
        img: "images/07_victoria_dawn_of_the_cosmos.jpg", 
        audio: "audio/07_victoria_dawn_of_the_cosmos.mp3", 
        text: {
            it: "Victoria guida la rinascita delle stelle dopo la caduta degli antichi imperi.",
            en: "Victoria leads the rebirth of the stars after the fall of the ancient empires.",
            fr: "Victoria guide la renaissance des étoiles après la chute des anciens empires.",
            es: "Victoria guía el renacimiento de las estrellas después de la caída de los antiguos imperios.",
            de: "Victoria führt die Wiedergeburt der Sterne nach dem Fall der alten Reiche an."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder7", 
        category: 1 
    },
    { 
        title: "Mimì and Victoria: Whispers of the Wild", 
        img: "images/08_mimi_and_victoria_whispers_of_the_wild.jpg", 
        audio: "audio/08_mimi_and_victoria_whispers_of_the_wild.mp3", 
        text: {
            it: "Tra foreste stellari e pianeti selvaggi, Mimì e Victoria ascoltano i sussurri degli spiriti cosmici.",
            en: "Among stellar forests and wild planets, Mimì and Victoria listen to the whispers of cosmic spirits.",
            fr: "Parmi les forêts stellaires et les planètes sauvages, Mimì et Victoria écoutent les murmures des esprits cosmiques.",
            es: "Entre bosques estelares y planetas salvajes, Mimì y Victoria escuchan los susurros de los espíritus cósmicos.",
            de: "Zwischen Sternenwäldern und wilden Planeten lauschen Mimì und Victoria dem Flüstern kosmischer Geister."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder8", 
        category: 1 
    },
    { 
        title: "Stargate Odyssey", 
        img: "images/09_stargate_odyssey.jpg", 
        audio: "audio/09_stargate_odyssey.mp3", 
        text: {
            it: "Un'odissea tra i portali stellari, dove ogni viaggio svela un frammento di verità.",
            en: "An odyssey through the stellar portals, where each journey reveals a fragment of truth.",
            fr: "Une odyssée à travers les portails stellaires, où chaque voyage révèle un fragment de vérité.",
            es: "Una odisea a través de los portales estelares, donde cada viaje revela un fragmento de verdad.",
            de: "Eine Odyssee durch die Sternenportale, wo jede Reise ein Fragment der Wahrheit enthüllt."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder9", 
        category: 1 
    },
    { 
        title: "Alcon and Selene (Heart of the Cosmos)", 
        img: "images/10_alcon_and_selene_heart_of_the_cosmos.jpg", 
        audio: "audio/10_alcon_and_selene_heart_of_the_cosmos.mp3", 
        text: {
            it: "La storia d'amore tra Alcon e Selene, cuore pulsante dell'universo, eterno e luminoso.",
            en: "The love story between Alcon and Selene, beating heart of the universe, eternal and luminous.",
            fr: "L'histoire d'amour entre Alcon et Selene, cœur battant de l'univers, éternel et lumineux.",
            es: "La historia de amor entre Alcon y Selene, corazón palpitante del universo, eterno y luminoso.",
            de: "Die Liebesgeschichte zwischen Alcon und Selene, dem schlagenden Herzen des Universums, ewig und leuchtend."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder10", 
        category: 1 
    },
    
    // Categoria 2: Sinfonia dell'Oscurità
    { 
        title: "Crescendo of Shadows", 
        img: "images/11_crescendo_of_shadows.jpg", 
        audio: "audio/11_crescendo_of_shadows.mp3", 
        text: {
            it: "Un crescendo sonoro che evoca ombre danzanti su mondi lontani.",
            en: "A sound crescendo that evokes dancing shadows on distant worlds.",
            fr: "Un crescendo sonore qui évoque des ombres dansantes sur des mondes lointains.",
            es: "Un crescendo sonoro que evoca sombras bailando en mundos distantes.",
            de: "Ein Klangcrescendo, das tanzende Schatten auf fernen Welten heraufbeschwört."
        }, 
        ytLink: "https://music.youtube.com/watch?v=placeholder11", 
        category: 2 
    },
    { 
        title: "Allegro of Shadows", 
        img: "images/12_allegro_of_shadows.jpg", 
        audio: "audio/12_allegro_of_shadows.mp3", 
        text: {