# 🌤️ Meteo App (Studio API & Geolocalizzazione)

Un'applicazione web dinamica sviluppata come progetto di studio per approfondire l'integrazione di servizi esterni tramite **API** e la gestione della risposta asincrona in JavaScript. L'app permette di visualizzare le condizioni meteo attuali e le previsioni settimanali.

## 🚀 Obiettivi del Progetto
- **Studio delle API**: Il cuore del progetto è l'interfacciamento con i server di **OpenWeatherMap** per il recupero di dati meteorologici reali in formato JSON.
- **Sviluppo 100% Manuale**: Codice scritto interamente da zero (No AI), per comprendere a fondo la gestione delle chiamate `XMLHttpRequest` e il parsing dei dati.
- **Geolocalizzazione**: Implementazione della funzione per localizzare l'utente tramite coordinate GPS al caricamento della pagina.
- **Logica del DOM**: Rendering dinamico di icone e sfondi in base alle condizioni meteo restituite dall'API.

## 🛠️ Stack Tecnologico
- **HTML5 / CSS3**: Layout con icone meteo animate via CSS e design moderno.
- **Vanilla JavaScript**: Gestione della logica di geolocalizzazione, delle chiamate API e del rendering dei componenti.
- **OpenWeatherMap API**: Utilizzata per i dati in tempo reale su temperatura, vento e umidità.

## 📂 Struttura dei File
- `index.html`: Struttura principale con gestione automatica della posizione (`onload`).
- `style.css`: Stili grafici e animazioni per le icone meteo.
- `index.js`: Logica dell'applicazione (chiamate asincrone e gestione dati).
- `icona.png`: Logo dell'applicazione.

## ⚠️ Note Tecniche
L'app è stata realizzata a scopo didattico per testare la comunicazione Client-Server. Per funzionare, richiede una connessione internet attiva per contattare l'API di OpenWeatherMap.

## 🚀 Come avviarlo
1. Scarica la cartella.
2. Apri `index.html` nel tuo browser.
3. Accetta la richiesta di posizione per vedere il meteo locale!