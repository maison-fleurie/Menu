# menu-test — Menu digital Maison Fleurie

## Contexte client
Bar à Montpellier. Menu digital accessible via QR code.
Stack volontairement légère — pas de framework, vanilla JS + HTML.
Font custom : Polyamine.otf (chargée localement).
Thème visuel : sombre (#0a0a0a), or (#acaf7d), orange (#ec5a04).

## Stack
- Vanilla HTML/CSS/JS (index.html = point d'entrée unique)
- PWA : manifest.webmanifest + sw.js (service worker)
- Données menu : Supabase [yctaoyxlfzmlzkwwjeti]
- Déployé via GitHub Pages ou Vercel

## Structure
```
index.html          → app entière
sw.js               → service worker PWA
manifest.webmanifest → config PWA
Polyamine.otf       → font custom Maison Fleurie
memory/             → fichiers de contexte Emergent
```

## Sections du menu actuelles
Lire agent_docs/menu-structure.md pour l'état exact des onglets et catégories.

## Règles de modification
- Ne jamais changer les couleurs (#0a0a0a, #acaf7d, #ec5a04) sans validation
- Ne jamais remplacer la font Polyamine par une Google Font
- Toute modif données = passer par Supabase, pas en dur dans le HTML
- Tester l'affichage mobile avant de valider (c'est l'usage principal)

## Commandes
```bash
# Pas de build — ouvrir index.html directement dans le navigateur
# Pour tester le service worker : serveur local requis
npx serve .
```

## Docs détaillées
Lire agent_docs/ avant de commencer :
- agent_docs/menu-structure.md  → onglets, catégories, état actuel
- agent_docs/supabase.md        → tables, schéma, comment modifier les données
