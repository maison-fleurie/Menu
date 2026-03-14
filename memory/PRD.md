# PRD — Corrections Menu Maison Fleurie (GitHub Pages)

## Projet
Site statique GitHub Pages : https://nachob17.github.io/menu-test/
Repo : https://github.com/NachoB17/menu-test

## Stack
- HTML/CSS/JS pur (site statique)
- Supabase (base de données menu)
- Service Worker (sw.js) pour offline
- Police Polyamine (OTF local) + Inter (Google Fonts)

## Problèmes identifiés
1. **Clé Supabase expirée** → erreur "Invalid API key" → menu ne s'affiche pas
2. **Splash trop long** → délai minimum 400ms + fallback 4000ms = écran d'attente trop long
3. **Police Polyamine** → fichier OTF corrompu (généré par Claude IA) → rejeté par le navigateur
4. **FOUC (flash de contenu)** → font-display: swap + absence de preload → flash de texte non stylisé

## Corrections appliquées (Mars 2026)
- [x] Clé Supabase mise à jour (iat: 1771604270, exp: 2087180270)
- [x] Splash : délai minimum réduit 400ms → 200ms, fallback 4000ms → 800ms
- [x] Préchargement Polyamine : `<link rel="preload" href="./Polyamine.otf" ...>`
- [x] `font-display: swap` → `font-display: block` (évite le flash)
- [x] Cache localStorage bumped : v4 → v5 (force rechargement données fraîches)
- [x] Fichier OTF réel uploadé par l'utilisateur (remplace la version corrompue de Claude)

## Fichier corrigé
`/app/index.html` (à copier/remplacer dans le repo GitHub)

## Erreurs NON liées au code
- `TypeError: document.body is null` → extension navigateur (rc2Contentscript.js)
- `Promised response from onMessage listener went out of scope` → extension navigateur

## Backlog / Améliorations futures
- Bumper la version du cache service worker (sw.js : mf-menu-v1 → v2) pour éviter
  que les anciens visiteurs reçoivent le HTML en cache
- Ajouter un fallback image pour les OG tags
