# Résa

Application de réservation des salles du campus (Node.js, Express, PostgreSQL).

## Prérequis

- Git
- Docker et Docker Compose v2
- Node.js 26, via `nvm` (pour les hooks Git et pour développer hors conteneur)

`npm run doctor` vérifie ton poste.

## Démarrer en 3 commandes

```bash
git clone https://github.com/AirKyzzZ/resa.git
cd resa
cp .env.example .env
docker compose up --build
```

Avant le premier lancement, remplace `PGPASSWORD` dans `.env` par un mot de passe à toi (lettres et chiffres uniquement). L'application est ensuite sur <http://localhost:3000>.

## Développer sans reconstruire l'image

```bash
nvm use
npm ci
docker compose up -d db
npm run dev
```

Seule la base tourne dans Docker, publiée sur le port `PGPORT` (`5433` par défaut). `npm run dev` relance le serveur à chaque modification.

Sans Node.js sur ta machine, `docker compose watch` fait la même chose dans les conteneurs : une modification dans `src/` est copiée dans le conteneur puis l'application redémarre, une modification dans `public/` est copiée sans redémarrage, et l'image est reconstruite si `package.json` ou `package-lock.json` change.

## Dépannage

- **Port déjà utilisé** (`port is already allocated`, `EADDRINUSE`) : change `PORT` ou `PGPORT` dans `.env`.
- **Réinitialiser la base** : `docker compose down -v`, puis `docker compose up --build`. `db/init.sql` ne s'exécute que sur un volume vide, c'est aussi la marche à suivre après un changement de `PGPASSWORD` (sinon `password authentication failed`).
- **Linux, `permission denied` sur Docker** : `sudo usermod -aG docker $USER`, puis déconnecte-toi et reconnecte-toi.
- **`Variables d'environnement manquantes`** au démarrage : compare ton `.env` avec `.env.example`.

## Équipe
