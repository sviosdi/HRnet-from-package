# HRnet-from-package

Ce répertoire contient le code de l'application React HRnet écrite en utilisant le composant **Datatable** récupéré sur **npmjs** en tant que dépendance. Cela permet de vérifier que le composant publié sur **npmjs** est réellement utilisable en ajoutant **sviosdi-datatable** dans les dépendances du projet. L'application peut être exécutée en _mode développement_ ou construite et exécutée en _mode production_.
<br>L'application déployée en mode production est disponible ici [HRnet](https://sviosdi.github.io/HRnet-from-package).

# Exécution en mode développement.

```
    yarn dev
```

# Compilation et exécution en mode production.

```
    yarn build    // Compilation => code dans le dossier `dist`
    yarn preview  // Exécution en mode production
```

# Notes pour la publication du site sur GitHub pages.

Pour publier un site React créé avec [vitejs](https://vitejs.dev/) sur GitHub pages.

- Initialiser le site avec : `yarn create vite`
- Editer ou mettre à jour les fichiers sources.
- Concernant le package.json :
  - Ajouter la ligne : `"homepage": "https://sviosdi.github.io/HRnet-from-package"`, quoique ceci ne semble pas influencer la publication.
  - Ajouter le package `gh-pages` en dépendance de développement : `yarn add gh-pages -D`
  - Ajouter aux scripts la ligne : `"deploy": "gh-pages -d dist"`
- Modifier le fichier `vite.config.js` en ajoutant la ligne `base: "/HRnet-from-package"`, car par défaut tous les liens relatifs sont faits avec pour base `/` c-à-d `https://sviosdi.github.io/`
  ```
  export default defineConfig({
    plugins: [react()],
    base: "/HRnet-from-package",
  })
  ```
- Construire le projet avec : `yarn build`
- Publier le site sur GitHub pages : `yarn deploy`
