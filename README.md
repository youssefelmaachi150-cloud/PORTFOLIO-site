# Portfolio – Youssef EL MAACHI

## Description du projet
Portfolio professionnel de **Youssef EL MAACHI**, étudiant en 3ᵉ année de BUT Génie Mécanique et Productique (UVSQ), spécialité simulation numérique et réalité virtuelle. Le site est une réplique visuelle complète du portfolio de Fadil BACHIR, avec l'intégralité des assets (images, logos, CSS, JS) du site original.

---

## Fonctionnalités implémentées

### ✅ Sections principales
- **Hero** : Présentation de Youssef avec nom, description, stats (5+ projets, 8+ technologies, 3 ans d'études), partenaires industriels, boutons CTA
- **Projets** : 2 projets avec modales détaillées (SKY ROTOR & HUNTERS)
- **Stages** : 3 expériences professionnelles (LDM, ENP Promofi, Thales AVS à venir)
- **Parcours** : Formation académique (BUT GMP UVSQ + Bac ND Les Oiseaux)
- **Compétences** : CATIA V5 (90%), SolidWorks (75%), AutoCAD (70%), Fusion 360 (65%), PTC CREO (60%), FAO, Simulation, PLM, Métrologie, Langues
- **Certifications** : TOEIC (prévu 2026) + 2ème Prix Fabrication HUNTERS
- **Contact** : Formulaire + coordonnées

### ✅ Fonctionnalités interactives
- Navigation responsive avec hamburger menu
- Modales détaillées pour chaque projet avec onglets
- Lecteurs vidéo personnalisés (play/pause, barre de progression)
- Lightbox pour les images
- Scroll-to-top button
- Animations AOS (Animate On Scroll)
- Navigation active au scroll

---

## URLs et entrées fonctionnelles

| Section | Ancre |
|---------|-------|
| Accueil (Hero) | `#accueil` |
| Projets académiques | `#projets` |
| Stages professionnels | `#stages` |
| Parcours / Formation | `#parcours` |
| Compétences techniques | `#competences` |
| Certifications | `#certifications` |
| Contact | `#contact` |

---

## Structure des fichiers

```
index.html           ← Page principale (unique page)
css/style.css        ← Feuille de style complète
js/main.js           ← JavaScript (modales, vidéos, animations, navigation)
images/
  hero/              ← Photo profil placeholder SVG, fond hélicoptère wireframe, logos Thales/UVSQ
  sky-rotor/         ← Images et assets du projet SKY ROTOR
  hunters/           ← Images et assets du projet HUNTERS
  simulation-plaque/ ← Images simulation plaque
  parcours/          ← Logos UVSQ, Thales, Saint-Exupéry
  skills/            ← Logos logiciels (CATIA, 3DEXPERIENCE, CREO, SolidWorks, Fusion 360…)
  certifications/    ← Logos TOEIC, Dassault
```

---

## Informations personnelles de Youssef EL MAACHI

| Champ | Valeur |
|-------|--------|
| Email | youssef.elmaachi@etu.uvsq.fr |
| Téléphone | À renseigner |
| LinkedIn | À renseigner |
| Localisation | UVSQ – Mantes-la-Jolie |

---

## Fonctionnalités non implémentées / à finaliser

- **Photo de profil** : Un fichier SVG placeholder est en place ; remplacer par une vraie photo JPG/PNG de Youssef dans `images/hero/photo-profil-youssef.jpg`
- **Vidéos** : Les fichiers `.mp4` (simulations FAO, cinématiques, compétition) sont référencés mais non uploadés — les ajouter à la racine du projet
- **Téléphone et LinkedIn** : À compléter dans le contact
- **Logo SolidWorks** : Logo non téléchargeable librement — remplacé par un badge "SW" stylisé ; remplacer par le vrai logo si disponible
- **Lettre de recommandation** : Le PDF `Lettre-recommandation-FBachir.pdf` référencé dans l'original n'est pas pertinent pour Youssef

---

## Prochaines étapes recommandées

1. **Uploader une vraie photo de Youssef** dans `images/hero/` (renommer en `photo-profil-youssef.jpg` ou `.png`)
2. **Uploader les fichiers vidéo** MP4 à la racine du projet (voir la liste dans index.html)
3. **Compléter les coordonnées** (téléphone, LinkedIn) dans la section contact
4. **Ajouter d'autres projets** éventuels (projet simulation plaque, etc.)
5. **Personnaliser le rôle de Youssef** dans la modal HUNTERS avec plus de détails
6. **Déployer via l'onglet Publish**

---

## Technologies utilisées

- HTML5 / CSS3 / JavaScript (Vanilla)
- Google Fonts : Inter + Poppins
- Font Awesome 6.4.0 (CDN)
- AOS – Animate On Scroll 2.3.4 (CDN)
- Design : Dark gradient, bleu primaire #0816a1

---

*Portfolio créé en février 2026 – Réplique du site Fadil BACHIR adaptée pour Youssef EL MAACHI*
