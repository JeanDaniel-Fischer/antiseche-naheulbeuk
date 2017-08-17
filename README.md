# Anti-sèche
L'objectif de l'application est de générer des anti-sèches personalisées pour chaque livre de sorts du Donjon de Naheulbeuk pour éviter de fouiller dans les 20 pages.

Un certains nombre d'anti-sèche pré-générée sont disponible. Si le livre de sort n'est pas disponible vous pouvez le contribuer avec une merge request avec les indications ci-dessous. L'application est testable [ici](https://naheulbeuk.jdfischer.fr).

# Application de génération
Pour générer les anti-sèches, on utilise l'application angular qui permet de filtrer les sorts et de les disposer selon deux affichages différents.

## Ajouter un livre de sorts
### Ajouter le livre dans le menu
Pour ajouter un livre dans le menu, il suffit de le nommer dans la liste des livres du service SpellBookService dans le fichier spell-book.service.ts.

```
...
export class SpellBookService {
  availableBooks = [ 'adathie' ]; // Ajouter dans cette liste le nom technique.
  ...
}
```
### Ajouter les traductions
L'ajout d'un livre de sorts nécessite de définir la traduction du nom technique. Pour cela ouvrir le fichier i18n/fr.json.
```
{
    "adathie": "Adathie",
    // Ajouter une entrée "<nom technique>": "<nom à afficher>"
    ...
}
```

### Ajouter les sorts
Pour ajouter les sorts il faut créer un fichier json dans le dossier assets qui à pour nom \<nom technique>.json. Par exemple, adathie.json.

Le contenue du fichier doit être de la forme (une valeur à null ne sera pas affichée) :
```
{
    "spells": [
    {
      "category": "attack", // Une des trois valeurs attack, support ou utility
      "level": 1, // Le niveau nécessaire
      "name": "Coup de fourchette", // Le nom du sort
      "castingTime": 1, // Le nombre d'assaut du cast
      "cost": "3 PA", // Coût du sort
      "material": null, // Ingrédients nécessaire
      "damage": "1D6 - 1 (min 1)", // Dommages/Effets
      "note": "Ignore l'armure naturelle", // note diverse
      "test": "Magie Physique", // Epreuve pour réussir le sort
      "critFail": null, // Résultat d'un échec critique
      "critSuccess": "dégats x2" // résultat d'un succés critique
    },
    ...
    ]
}
```