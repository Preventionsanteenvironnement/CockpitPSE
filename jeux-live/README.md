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
3. Verifier `assets/js/firebase-config.js`, deja renseigne avec la configuration web du cockpit.
4. Publier les regles Firestore qui autorisent `party_live_parties/{partyId}`.
5. Publier.

Structure Firestore utilisee :

```text
party_live_parties/{partyId}
```

La V1 synchronise le document complet de la partie dans `party_live_parties/{partyId}` quand Firebase est present. Les regles Firestore doivent autoriser `read, write` sur cette collection pour permettre aux telephones de rejoindre par QR code.

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
