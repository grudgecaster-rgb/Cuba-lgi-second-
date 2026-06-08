// This function listens for a click/tap on the envelope
function setupInput(onOpenCallback) {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    
    envelopeWrapper.addEventListener('click', () => {
        // Trigger the opening sequence when clicked
        onOpenCallback();
    });
}
