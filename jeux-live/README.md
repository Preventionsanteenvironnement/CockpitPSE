# Party Live

Mini-plateforme de jeux multijoueurs pour GitHub Pages.

## Pages

- `animateur.html` : cree une partie, affiche QR code, controle les manches, scores et exports.
- `joueur.html` : rejoint une partie avec code ou QR, envoie reponses et votes.
- `editeur.html` : cree, colle, valide, copie, exporte et sauvegarde des JSON de jeux.
- `bibliotheque.html` : liste, filtre, duplique, modifie, supprime et lance les jeux sauvegardes.

## Installation GitHub Pages

1. Publier le dossier `jeux-live/` avec le reste du cockpit.
2. Ouvrir `CockpitPSE/index.html`, section `Classe en temps reel`, puis `Party Live`.
3. Pour tester sans Firebase, utiliser le meme navigateur ou des onglets du meme appareil.
4. Pour une vraie soiree multi-telephones, configurer Firebase Firestore.

## Configuration Firebase

1. Creer un projet Firebase.
2. Activer Firestore.
3. Ouvrir `assets/js/firebase-config.js`.
4. Remplacer `null` par la configuration web Firebase. Le fichier `firebase-config.example.js` donne le modele.
5. Publier.

Structure Firestore prevue :

```text
parties/{partyId}
parties/{partyId}/players
parties/{partyId}/responses
parties/{partyId}/votes
parties/{partyId}/history
```

La V1 synchronise le document `parties/{partyId}` complet quand Firebase est present. Les sous-collections sont documentees pour une evolution plus fine si le volume augmente.

## Structure JSON

Chaque jeu contient au minimum :

```json
{
  "id": "quiz_fun_demo",
  "type": "quiz_fun",
  "titre": "Quiz culture generale fun",
  "description": "Questions rapides.",
  "questions": []
}
```

Types acceptes :

- `battle_slogans`
- `question_classement`
- `mime_challenge`
- `times_up`
- `mot_interdit`
- `quiz_fun`

Des exemples complets sont dans `assets/data/`.
