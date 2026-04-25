# ⛺ Camp de District de Sideci — JEA

> Système de badges QR intelligents pour le bureau officiel du Camp de District de Sideci  
> **Jeunesse Évangélique Africaine**

---

## 📁 Structure du projet

```
camp-sideci/
│
├── index.html       ← Page principale (liste de tous les membres)
├── membre.html      ← Page affichée au scan du QR code
├── admin.html       ← Interface d'administration (protégée par mot de passe)
├── data.json        ← Source unique des données membres
├── style.css        ← Feuille de style globale
├── script.js        ← Scripts et animations
└── logo_jea.png     ← Logo officiel JEA
```

---

## 🧠 Comment ça fonctionne

```
data.json  ←  source unique de toutes les données
    │
    ├──▶  index.html    → affiche la liste des membres
    ├──▶  membre.html   → affiche le profil au scan du QR
    └──▶  admin.html    → interface de gestion (temps réel)
```

Quand quelqu'un **scanne le QR code** d'un badge, son téléphone ouvre automatiquement :

```
https://Orel-Digital-service.github.io/Repository-name-camp-de-district-desideci/membre.html?id=1
```

La page lit `data.json` et affiche :
- **Nom & Prénom** du membre
- **Titre** (CTA, CT, CP, SP…)
- **Rôle dans le bureau**

---

## 🔐 Interface Admin

**URL d'accès :**
```
https://Orel-Digital-service.github.io/Repository-name-camp-de-district-desideci/admin.html
```

**Mot de passe :** `sideci2025`

### Fonctionnalités
- ✅ Rafraîchissement automatique toutes les **0.3 secondes**
- ✅ Détection en temps réel des nouveaux membres (badge **NOUVEAU** vert)
- ✅ Génération automatique des QR codes pour chaque membre
- ✅ Téléchargement individuel ou groupé de tous les QR codes
- ✅ Export du fichier `data.json`

---

## ➕ Ajouter un membre

Il suffit d'éditer `data.json` sur GitHub et d'ajouter une ligne dans le tableau `membres` :

```json
{ "id": 16, "nom": "Nouveau Nom", "titre": "CT", "role": "Nouveau Rôle" }
```

> ⚠️ Chaque membre doit avoir un `id` **unique**. L'admin se met à jour automatiquement.

---

## 👥 Membres du Bureau

| # | Nom | Titre | Rôle |
|---|-----|-------|------|
| 01 | Legnan Joël | CTA | Directeur du Camp |
| 02 | Willy | CTA | Directeur Adjoint |
| 03 | Meli Aristide | CTA | Secrétaire du Camp |
| 04 | GONTO Josias | CT | Commissaire de Police |
| 05 | Hurus | CT | Commissaire de Police Adjoint |
| 06 | CHEF Kouame Kouassi Bekanti Marc Orel | SP | Secrétaire de la Police & Communication |
| 07 | Mariam | CD | Responsable Cuisine |
| 08 | Rebecca | CD | Responsable Cuisine Adjointe |
| 09 | Armand | CT | Responsable Sport |
| 10 | Decaho Leopold | CP | Responsable Prière |
| 11 | Gombleu Aquilas | CP | Responsable Prière Adjoint |
| 12 | CHEF N'guessan Emmanuel | SP | Responsable Mission & Communication |
| 13 | Kouame Patrick | ELT | Responsable Animation |
| 14 | inconnutos | — | Infirmier du Camp |
| 15 | Commun Émilie | CP | Trésorière du Camp |

---

## 🚀 Hébergement

Le site est hébergé gratuitement sur **GitHub Pages** :

```
https://Orel-Digital-service.github.io/Repository-name-camp-de-district-desideci
```

### Mettre à jour un fichier sur GitHub
1. Ouvre le fichier sur GitHub
2. Clique le crayon ✏️
3. Fais tes modifications
4. Clique **"Commit changes"**
5. Attends 1 à 2 minutes → le site se met à jour automatiquement

---

## 🖨️ Impression des badges

1. Télécharge tous les QR codes depuis l'interface admin
2. Imprime la planche
3. Découpe chaque QR code
4. Colle sur le badge du membre correspondant
5. Au scan → le profil s'affiche instantanément 📱

---

## 🛠️ Technologies utilisées

- HTML5 / CSS3 / JavaScript (Vanilla)
- [QRCode.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) — génération des QR codes
- GitHub Pages — hébergement gratuit
- Google Fonts — Bebas Neue + Outfit

---

*Projet réalisé pour la Jeunesse Évangélique Africaine — Camp de District de Sideci* ⛺
