// Un pinch trackpad arrive en `wheel` avec ctrlKey. Sur le corps d'un mail, Outlook l'intercepte
// (preventDefault) pour grossir la police. On le coupe avant lui (capture sur window, injecté en
// document_start donc avant ses propres listeners) sans preventDefault : Chrome fait son zoom visuel.
addEventListener('wheel', e => { if (e.ctrlKey) e.stopImmediatePropagation(); }, { capture: true });
