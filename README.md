# 📚 Biblio App — TP TypeScript & React (M2)

Mini-application de gestion de bibliothèque construite avec **Vite + React + TypeScript**.

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## 📁 Structure

```
src/
├── types/
│   └── Book.ts              # Interface Book + BooksDictionary + BookStatus
├── utils/
│   └── bookUtils.ts         # Fonctions utilitaires (filtres, toggle, id)
├── components/
│   ├── BookItem.tsx         # Affiche un livre
│   ├── BookList.tsx         # Affiche une liste de livres
│   ├── BookForm.tsx         # Formulaire d'ajout
│   └── GenericList.tsx      # Composant générique réutilisable (bonus)
├── App.tsx                  # Composant principal
└── App.css                  # Styles
```

## ✅ Correspondance exercices

| Partie | Exercice | Fichier(s) principal(aux) |
|--------|----------|---------------------------|
| 1 | Ex 1 — Interface `Book` + dictionnaire | `types/Book.ts` |
| 1 | Ex 2 — `available` + filtre disponibilité | `types/Book.ts`, `utils/bookUtils.ts` |
| 2 | Ex 3 — Composant `BookItem` | `components/BookItem.tsx` |
| 2 | Ex 4 — Composant `BookList` | `components/BookList.tsx` |
| 3 | Ex 5 — `useState` + ajout | `App.tsx` |
| 3 | Ex 6 — Formulaire | `components/BookForm.tsx` |
| 4 | Ex 7 — Dictionnaire `Record<string, Book>` | `App.tsx`, `utils/bookUtils.ts` |
| 4 | Ex 8 — Filtre + sélection + statut | `App.tsx`, `bookUtils.ts`, `BookItem.tsx` |
| Bonus | Composant générique | `components/GenericList.tsx` |

## 🛡️ Qualité du code

- **Mode `strict` TypeScript activé**
- **Aucune utilisation de `any`**
- Types union (`BookStatus`) pour empêcher les valeurs invalides
- Immutabilité respectée (jamais de mutation directe du state)
- Composants découpés et props typées