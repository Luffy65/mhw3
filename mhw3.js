// ************ PULSANTE DEI PREFERITI ************************************
let isFavorite = false; // Variabile per memorizzare lo stato del pulsante dei preferiti

function favoriteFunction() {
    const favoriteButton = this; // 'this' si riferisce al button cliccato
    const favoriteImage = favoriteButton.querySelector('img'); // L'immagine della stella nel button dei preferiti

    isFavorite = !isFavorite; // Inverte lo stato del pulsante dei preferiti

    if (isFavorite) {
        favoriteImage.src = "https://s-lol-web.op.gg/images/icon/icon-bookmark-on-w.svg?v=1710914129937";
        favoriteImage.classList.add("pref-giallo");
        favoriteImage.classList.remove("pref-nongiallo");
        console.log("Aggiunto ai preferiti");
    } else {
        favoriteImage.src = "https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1710914129937";
        favoriteImage.classList.remove("pref-giallo");
        favoriteImage.classList.add("pref-nongiallo");
        console.log("Rimosso dai preferiti");
    }
}

// Seleziona tutti i pulsanti con la classe "favorite"
const preferiti = document.querySelectorAll(".favorite"); 

// Aggiungi l'eventListener a ciascun pulsante con la classe "favorite"
for (preferito of preferiti)
{
    preferito.addEventListener("click", favoriteFunction); 
}

// ************ LIGHT / DARK MODE ************************************
function darkLightFunction() {
    const interosito = document.querySelector("#intero-sito");
    const foot = document.querySelector("#footer");
    const DarkLightButton = document.querySelector(".dark"); // il pulsante dark/light mode

    // Recupera il valore corrente dell'attributo 'data-mode'
    const currentMode = DarkLightButton.dataset.mode;

    // Inverti il ​​valore
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    // Aggiorna attributo 'data-mode'
    DarkLightButton.dataset.mode = newMode; 

    // Aggiorna le classi in base al nuovo stato
    if(newMode == 'light') { // Light mode
        interosito.classList.add("light-mode");
        interosito.classList.remove("dark-mode");
        foot.classList.add("light-mode");
        foot.classList.remove("dark-mode");
        DarkLightButton.classList.add("light");
    }
    else { // Dark mode
        interosito.classList.remove("light-mode");
        interosito.classList.add("dark-mode");
        foot.classList.remove("light-mode");
        foot.classList.add("dark-mode");
        DarkLightButton.classList.remove("light");
    }
    console.log("Sito impostato in " + newMode + " mode"); 
}

// Seleziona il pulsante della dark/light mode
const DarkLightButton = document.querySelector(".dark"); 
DarkLightButton.addEventListener("click", darkLightFunction);

// ************ FAQ ************************************
// Quando si clicca sul pulsante FAQ compare un piccolo menù a tendina con 2 opzioni: "Contact us" e "Help center".
const divSottoFaq = document.querySelector(".FAQ div");
const faqButton = document.querySelector('.button-non-cliccato.menu-faq');  // Riferimento al pulsante FAQ
const articleref = document.querySelector("#intero-sito") // Riferimento all'intero sito.

function closeFAQMenu(event) {
    const menuButton = event.currentTarget; // Il pulsante FAQ
    menuButton.removeEventListener('click', closeFAQMenu);
    menuButton.addEventListener('click', compareFAQ);

    const faqMenu = document.querySelector('.FAQ div div'); // Seleziona il menu
    if (faqMenu) {
        faqMenu.remove(); // Rimuove il menu a tendina
        console.log('faq rimosso');
    }
}

function compareFAQ(event) {
    const menuButton = event.currentTarget; // Il pulsante FAQ
    menuButton.removeEventListener('click', compareFAQ);
    menuButton.addEventListener('click', closeFAQMenu);

    /* Creo il FAQ menu */
    const newDiv = document.createElement("div");
    const newButton1 = document.createElement("button");
    const newButton2 = document.createElement("button");
    const newSpan1 = document.createElement("span");
    const newSpan2 = document.createElement("span");
    const newContent1 = document.createTextNode("Contact Us");
    const newContent2 = document.createTextNode("Help Center");

    newButton1.classList.add("pulsanti-faq");
    newButton2.classList.add("pulsanti-faq");

    newSpan1.appendChild(newContent1);
    newSpan2.appendChild(newContent2);
    newButton1.appendChild(newSpan1);
    newButton2.appendChild(newSpan2);
    newDiv.appendChild(newButton1);
    newDiv.appendChild(newButton2);

    // Aggiungo l'elemento appena creato e il suo contenuto nel DOM
    divSottoFaq.appendChild(newDiv);
}

// Aggiungo l'EventListener
var faqVariable = document.querySelector('.FAQ div div');
faqButton.addEventListener('click', compareFAQ);

// ************ MORE SEASON TIER ************************************
// Cliccando su "more season tier", compare una lista dei rank del giocatore nelle stagioni precedenti.
let isRankHidden = true;
const listaRank = document.querySelector(".more-tier-list"); // Riferimento alla lista da far comparire / nascondere
const pulsanteRank = document.querySelector(".more-tier"); // Riferimento al pulsante da cliccar eper far comparire / nascondere la lista.

function toggleRank() {
    isRankHidden = !isRankHidden;

    if(isRankHidden) {
        listaRank.classList.add("NASCOSTO");
        console.log("Nascosti i rank precedenti");
    }
    else {
        listaRank.classList.remove("NASCOSTO");
        console.log("visibili i rank precedenti");
    }
}

listaRank.classList.add("NASCOSTO"); // In questo modo, al primo caricamento della pagina avremo il menu nascosto.
pulsanteRank.addEventListener('click', toggleRank);

// ************ WELCOME ****************************
// Fa stampare alla console un messaggio in base a un elemento "data-*" contenuto nell'article.
const articolo = document.querySelector("#intero-sito");
const numHomework = articolo.dataset.nhomework;
console.log("Benvenuto nel mini homework " + numHomework + "!");

// ************ ROMAN TO ARABIC MAP ************************
// Serve a converite un numero romano in arabico, mi serve per il dato "tier" che una fetch restituisce.
const romanToArabic = new Map([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
]);

// *********************** API ******************************
apiKey = "RGAPI-d70e8023-73ca-431d-80b4-9c53bcde2516"; /* Scade dopo 24h */

// ** FUNZIONI GENERICHE API
function onResponse(response) {
    if(response.ok == false){
      console.log(response.status);
      console.log("Error: " + response.statusText);
      return null;
    }
    console.log("Risposta ricevuta");
    return response.json();
}

function onError(error) {
    console.log("Error: " + error);
}




// ** ACCOUNT-V1 - getAccountByRiotID
/* Il seguente codice (che dovrebbe essere corretto) non può funzionare poiché è scritto in front-end, in particolare
la fetch viene bloccata per politiche CORS (Cross-Origin Resource Sharing), per ragioni di sicurezza.
Il problema si potrebbe risolvere (forse) mettendo questa fetch in back-end, e passando il suo risultato al front-end, tuttavia
non sappiamo ancora farlo. Uso dunque il mio puuid come costante per ogni query futura.*/
const MyPuuid = "B0LHOkyJt-0RGFGWqZTR_qrZhb8cvS_3t93O9r_9tNv7bSAR9XtJbCQCjjyXZ5_Y5B0g4czoVCoEmQ"

/* 
// CODICE CHE NON PUO' ESSERE ESEGUITO
function onJsonSearch(json) {
    console.log("Player ricercato:", json);
}

function search(event) {
    // Impedisci il submit del form
    event.preventDefault();
    // Leggi valore del campo di testo. In questo form il valore è una stringa NomeGiocatore#tag, ovvero
    // I due valori sono separati dal carattere '#'
    const ricercaInput = document.querySelector("#input-player");
    const ricercaValue = ricercaInput.value; // Stringa che l'utente scrive
    const splitString = ricercaValue.split("#"); // Splitta la stringa in un array appena incontra il carattere "#"
    const nomeGiocatore = splitString[0];
    const tag = splitString[1];
    console.log(nomeGiocatore + " #" + tag);
    // Prepara la richiesta
    rest_url = "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + nomeGiocatore + "/" + tag + "?api_key=" + apiKey;
    // Esegui fetch
    fetch(rest_url).then(onResponse).then(onJsonSearch)
}

const form = document.querySelector('form');
form.addEventListener('submit', search);
*/




// ** SUMMONER V4 - Get summoner by PUUID (accountId, profileIconId, id, summonerLevel)
// SUNMMMONER ID = 5T2ZUo8NOy6NdC8XZO67GqF5k9td-GONY5zM2g9HLXkbnkY
const url3 = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + MyPuuid + "?api_key=" + apiKey;

// ** LEAGUE V4 - Get league entries (rank, wr, wins, losses) in all queues (solo, flex) for a given summoner ID (NON account ID)
function onTokenJsonGetEntries(json)
{
    console.log(json);
    // Creo gli indici per distinguere tra soloQ e Flex
    let soloqIndex;
    let flexIndex;
    if(json[0].queueType === "RANKED_SOLO_5x5")
    {
        soloqIndex = 0;
        flexIndex = 1;
    }
    else
    {
        soloqIndex = 1;
        flexIndex = 0;
    }

    // Salvo i dati in variabili

    // Soloq
    const tier = json[soloqIndex].tier;
    const rank = json[soloqIndex].rank;
    const lp = json[soloqIndex].leaguePoints;
    const wins = json[soloqIndex].wins;
    const losses = json[soloqIndex].losses;

    // Flex
    const tierF = json[flexIndex].tier;
    const rankF = json[flexIndex].rank;
    const lpF = json[flexIndex].leaguePoints;
    const winsF = json[flexIndex].wins;
    const lossesF = json[flexIndex].losses;

    // Creo dei TextNode per tier e rank 

    // Soloq
    // Tier (es: DIAMOND)
    strTier = document.createTextNode(tier[0] + tier.slice(1).toLowerCase() + " "); // Per scrivere la parola con la prima lettera maiuscola e le altre minuscole
    // Rank (es: II)
    strRank = document.createTextNode(romanToArabic.get(rank)); // "rank" è un numero romano, lo converto in arabico

    // Flex
    // Tier (es: DIAMOND)
    strTierF = document.createTextNode(tierF[0] + tierF.slice(1).toLowerCase() + " "); // Per scrivere la parola con la prima lettera maiuscola e le altre minuscole
    // Rank (es: II)
    strRankF = document.createTextNode(romanToArabic.get(rankF));

    // URL parziale delle immagini del tier
    soloq_img_url_p = tierF.toLowerCase() +'.png';
    flex_img_url_p = tier.toLowerCase() +'.png';

    // Metto i TextNode appena creati nell'HTML, e aggiungo altri dati (immagini degli emblemi, lp, wins, losses, win rate)

    // SOLOQ
    // Tier e Rank
    const HTier = document.querySelector('.ranked-solo .tier');
    HTier.appendChild(strTier);
    HTier.appendChild(strRank);
    // Immagine emblema
    const HImmagine = document.querySelector('.ranked-solo .img7')
    HImmagine.src="Ranked_Emblems_Latest/Rank=" + soloq_img_url_p;
    // LP
    const Hlp = document.querySelector('.ranked-solo .lp');
    Hlp.textContent = lp + " LP"; // Senza text node
    // Wins e losses
    const HWinsLosses = document.querySelector('.ranked-solo .win-lose');
    HWinsLosses.textContent = wins + "V " + losses + "L"
    // Win ratio
    const HWinRatio = document.querySelector('.ranked-solo .ratio');
    const winRatio = Math.round(100 * wins / (wins + losses));
    HWinRatio.textContent = "Win Rate " + winRatio + "%"

    // FLEX
    // Tier e Rank
    const HTierF = document.querySelector('.ranked-flex .tier');
    HTierF.appendChild(strTierF);
    HTierF.appendChild(strRankF);
    // Immagine emblema
    const HImmagineF = document.querySelector('.ranked-flex .img9')
    HImmagineF.src="Ranked_Emblems_Latest/Rank=" + flex_img_url_p;
    // LP
    const HlpF = document.querySelector('.ranked-flex .lp');
    HlpF.textContent = lpF + " LP"; // Senza text node
    // Wins e losses
    const HWinsLossesF = document.querySelector('.ranked-flex .win-lose');
    HWinsLossesF.textContent = winsF + "V " + lossesF + "L"
    // Win ratio
    const HWinRatioF = document.querySelector('.ranked-flex .ratio');
    const winRatioF = Math.round(100 * winsF / (winsF + lossesF));
    HWinRatioF.textContent = "Win Rate " + winRatioF + "%"
}

// Effettuo la fetch
const url4 = "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/5T2ZUo8NOy6NdC8XZO67GqF5k9td-GONY5zM2g9HLXkbnkY?api_key=" + apiKey;
fetch(url4).then(onResponse, onError).then(onTokenJsonGetEntries);





// ** MATCH-V5 - Get a list of match IDs by PUUID. ESEMPI DI MATCH ID: "EUW1_6901880192", "EUW1_6890332368"
// Salvo i match id restituiti dalla fetch nel seguente vettore:
let MatchIDS = [];

function onTokenJsonGetMatches(json)
{
    for (match in json)
    {
        MatchIDS[match] = json[match] // Popolo il vettore dei match id
    }
    console.log("Match IDs ottenuti:", MatchIDS);
}

// Effettuo la fetch
const url2 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + MyPuuid + "/ids?start=0&count=20&api_key=" + apiKey;
fetch(url2).then(onResponse, onError).then(onTokenJsonGetMatches)



/*
// ** MATCH-V5 - Get a match by match id
// La seguente funzione viene chiamata su ogni partita.
function onTokenJsonGetPartita(json)
{
}

// Effettuo le fetch (una per ogni partita. Suppongo di voler caricare 20 partite inizialmente, quindi farò 20 fetch)
// Creo un vettore degli url per fare le relative fetch
let url_partite = [];

// NON FUNZIONA, FORSE PERCHE' DEVE ATTENDERE PRIMA CHE MATCHIDS SI POPOLI
for (let i = 0; i<20; i++)
{
    url_partite[i] = "https://europe.api.riotgames.com/lol/match/v5/matches/" + MatchIDS[i] + "?api_key=" + apiKey;
    fetch(url_partite[i]).then(onResponse, onError).then(onTokenJsonGetPartita);
}
*/






// ** SUMMONER-V4 - Get a summoner by PUUID.
// La uso per ottenere livello e icona del giocatore principale
function onTokenJsonGetSummoner(json)
{
    console.log("summoner:", json);

    const livello = document.querySelector("#evocatore .level .level");
    livello.textContent = json.summonerLevel;

    const icona = document.querySelector("#evocatore .profile-icon .profile-icon");
    icona.src = "https://ddragon.leagueoflegends.com/cdn/" + game_version + "/img/profileicon/" + json.profileIconId + ".png";
}

const url5 = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + MyPuuid + "?api_key=" + apiKey;
fetch(url5).then(onResponse, onError).then(onTokenJsonGetSummoner);








// ** OAuth 2.0 - Wikipedia. Mi baso sul seguente processo: https://api.wikimedia.org/wiki/Authentication#App_authentication

// WIKIPEDIA 1: dato l'access token, ottiene l'articolo del giorno (il giorno in questione è salvato nella variabile today)
function onTokenJsonWikipedia1(json) {
    console.log(json);
    const token = json["access_token"];
  
    // Sito guida: https://api.wikimedia.org/wiki/Getting_featured_content_from_Wikipedia_with_Python
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const date =  year + '/' + month + '/' + day;

    let language = 'en';
    let base_url = 'https://api.wikimedia.org/feed/v1/wikipedia/';
    let url = base_url + language + '/featured/' + date;

    fetch(url, {
    headers: {
        'Authorization': 'Bearer ' + token
    }
    }).then(onResponse).then(onTokenJsonWikipedia2);
}

// WIKIPEDIA 2: Dato l'articolo del giorno (json), crea una piccola schermata che lo contiene
function onTokenJsonWikipedia2(json) {
    console.log("Contenuto json wikipedia:", json);

    if(json == null){
        console.log("Articolo del giorno non trovato:", error);
        return;
    }

    let titolo = json["tfa"]["title"];
    let desktop_url = json["tfa"]["content_urls"]["desktop"]["page"];
    let extract = json["tfa"]["extract"];
    let thumbnail_url;
    // Non tutti gli articoli del giorno hanno una thumbnail, quindi devo fare la seguente verifica
    if(json["tfa"]["thumbnail"] != undefined)
        thumbnail_url = json["tfa"]["thumbnail"]["source"];
    else thumbnail_url = null;

    // Creo un articolo
    const article = document.createElement("article");
    
    // Creo elementi che inserirò nell'articolo
    const articleTitle = document.createElement("span");
    articleTitle.textContent = titolo;
    articleTitle.classList.add("articleTitle");

    const url = document.createElement("a");
    url.href = desktop_url;
    url.textContent = "Link all'articolo completo"
    url.classList.add("url");

    const articleDescription = document.createElement("div"); 
    articleDescription.textContent = extract;
    articleDescription.classList.add("description");

    const thumbnail = document.createElement("img");
    if(thumbnail_url!= null){
        thumbnail.src = thumbnail_url;
    }
    
    // Inserisco gli elementi nell'articolo
    const HAPI = document.querySelector("#wikipediaAPI");
    HAPI.appendChild(article);
    article.appendChild(articleTitle);
    article.appendChild(thumbnail);
    article.appendChild(articleDescription);
    article.appendChild(url);
}

// Dati client ID e client secret, ottengo un Access token tramite la fetch
function getAccessToken() {
    const client_id = "7a4afe4f4f6cbd7636d90428521c0b81";
    const client_secret = "b967685a09e139425650a74c24ac6d9c19e72838";
  
    const form_data = new FormData();
    form_data.append("grant_type", "client_credentials");
    form_data.append("client_id", client_id);
    form_data.append("client_secret", client_secret);
    
    fetch("https://meta.wikimedia.org/w/rest.php/oauth2/access_token", {
        method: "POST",
        body: form_data
    }).then(onResponse).then(onTokenJsonWikipedia1);
}

// Fa comparire / scomparire la schermata di wikipedia
function toggleWikipedia(){
    const HAPI = document.querySelector("#wikipediaAPI");
    const toggle = document.querySelector("#wikipediaToggle")

    if(HAPI.classList.contains("hidden")) {
        HAPI.classList.remove("hidden");
        toggle.textContent="Nascondi l'articolo del giorno!";
    }
    else {
        HAPI.classList.add("hidden");
        toggle.textContent="Mostra l'articolo del giorno!";
    }
}

// Chiamo la funzione per usare l'API di wikipedia
getAccessToken();

// Applico un event listener al pulsante che fa comparire l'articolo del giorno
const HwikipediaToggle = document.querySelector("#wikipediaToggle");
HwikipediaToggle.addEventListener("click", toggleWikipedia);





// ** Ottengo la versione attuale del gioco
let game_version;

async function getGameVersion(){
  const game_version_response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  game_version_json = await game_version_response.json();
  game_version = game_version_json[0];
}

getGameVersion();