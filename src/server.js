require("dotenv").config();

const REQUIRED_ENV = ["PGHOST", "PGUSER", "PGPASSWORD", "PGDATABASE"];
const missingEnv = REQUIRED_ENV.filter((name) => !process.env[name]);

if (missingEnv.length > 0) {
  console.error(
    `Variables d'environnement manquantes : ${missingEnv.join(", ")}. Copie .env.example vers .env et renseigne-les.`,
  );
  process.exit(1);
}

const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Résa démarré sur http://localhost:${port}`);
});
