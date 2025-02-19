// Funzione per aggiornare tutti i link nella pagina
function updateLinks() {
    let newUrl = "https://nuovo-url.com";
    let newText = "Nuovo Testo del Link";
    
    document.querySelectorAll("a").forEach(link => {
        link.href = newUrl;
        link.textContent = newText;
    });
}

// Eseguire la funzione inizialmente
updateLinks();

// Creare un osservatore per monitorare le modifiche al DOM
let observer = new MutationObserver(updateLinks);
observer.observe(document.body, { childList: true, subtree: true });
