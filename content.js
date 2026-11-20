// Un pinch trackpad arrive en `wheel` avec ctrlKey. Outlook l'intercepte (preventDefault) sur le corps
// d'un mail pour grossir la police, Teams sur un écran partagé pour le grossir. On le coupe avant eux
// (capture sur window, injecté en document_start donc avant leurs listeners) sans preventDefault :
// Chrome fait son zoom visuel.
addEventListener('wheel', e => { if (e.ctrlKey) e.stopImmediatePropagation(); }, { capture: true });
