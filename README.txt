PLASTOPHAGE - app QR plastificato (PWA)
========================================

CONTENUTO
  index.html            l'app (tutto incluso: cifratura, QR, scansione, animazione)
  manifest.webmanifest  descrive l'app installabile
  sw.js                 service worker (funzionamento offline + installazione)
  icon-192.png / icon-512.png / icon-512-maskable.png   icone

PERCHE' SERVE PUBBLICARLA (invece di aprire il file):
  Su un vero indirizzo https funzionano fotocamera, condivisione e salvataggio,
  e l'app diventa installabile. Aprendo il file .html da solo, alcune di queste
  cose restano bloccate dal browser.

--- MODO PIU' SEMPLICE: Netlify Drop (nessun account, 1 minuto) ---
  1. Scompatta questo zip: ottieni la cartella "plastophage-app".
  2. Vai su  https://app.netlify.com/drop
  3. Trascina la CARTELLA "plastophage-app" nell'area indicata.
  4. Netlify ti da' subito un link https (es. https://qualcosa.netlify.app).
  5. Condividi quel link con i familiari.
  (Per aggiornare l'app in futuro: ri-trascini la cartella aggiornata.)

--- ALTERNATIVA: GitHub Pages ---
  1. Crea un repository su github.com e carica i file (non la cartella, i file dentro).
  2. Settings > Pages > Branch: main / root > Save.
  3. Dopo qualche minuto avrai un link https://tuonome.github.io/repo/

INSTALLARE SUL TELEFONO (dopo aver aperto il link):
  iPhone (Safari):  pulsante Condividi  ->  "Aggiungi alla schermata Home".
  Android (Chrome): menu (tre puntini)  ->  "Installa app" / "Aggiungi a schermata Home".
  Poi l'app parte a schermo intero, con icona, e funziona anche offline.

NOTA: il cifrario e' dimostrativo (divertente, non per segreti reali).
NOTA 2: i "QR con link" incorporano l'indirizzo pubblico dell'app, quindi
  si attivano solo DOPO la pubblicazione online. Nell'anteprima l'app lo segnala.
NOTA 3: quando pubblichi una nuova versione, chi ha l'app aperta vede il
  banner "Aggiorna": un tocco e si ricarica. In alternativa basta chiuderla
  e riaprirla una volta.
NOTA 4: dopo una rivelazione riuscita compare "Esporta video (9:16)":
  genera un breve video verticale della rivelazione da condividere
  su stories, TikTok o stati WhatsApp (iPhone: MP4, Android: WebM).
NOTA 5: si possono "plastificare" anche le FOTO: vengono compresse (~30 KB)
  e cifrate dentro il link (niente QR scansionabile: troppi dati per un QR).
  Chi tocca il link inserisce il ceppo e vede la foto emergere dalla plastica.
  La card include un piccolo QR d'appoggio: inquadrato con qualunque
  fotocamera, apre l'app e spiega che la foto viaggia nel link.
