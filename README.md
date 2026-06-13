# Biloki

Biloki est une application de gestion moderne construite avec le framework **Laravel**, **React** et **Inertia.js**. Elle permet de gérer efficacement des produits et des clients via une interface fluide et réactive.

## 🚀 Fonctionnalités

- **Gestion des Produits** : Création, édition, suppression et consultation.
- **Gestion des Clients** : Suivi et gestion de la base client.
- **Interface Utilisateur** : Développée avec React et Tailwind CSS pour une expérience utilisateur optimale.
- **Mode Sombre (Dark Mode)** : Interface entièrement compatible avec le mode sombre.
- **Authentification** : Système sécurisé pour l'accès à l'administration.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **PHP** (>= 8.2)
- **Composer**
- **Node.js** & **NPM**
- **SQLite** (configuré par défaut) ou un autre système de gestion de base de données.

## 🛠️ Installation Locale

Suivez les étapes ci-dessous pour configurer le projet dans votre environnement local :

1. **Cloner le projet**
   ```bash
   git clone <url-du-depot>
   cd biloki
   ```

2. **Installer les dépendances PHP**
   ```bash
   composer install
   ```

3. **Installer les dépendances JavaScript**
   ```bash
   npm install
   ```

4. **Configurer l'environnement**
   Copiez le fichier d'exemple pour créer votre propre fichier `.env` :
   ```bash
   cp .env.example .env
   ```
   *Note : Par défaut, le projet est configuré pour utiliser SQLite.*

5. **Générer la clé d'application**
   ```bash
   php artisan key:generate
   ```

6. **Initialiser la base de données**
   Si vous utilisez SQLite, assurez-vous que le fichier existe :
   ```bash
   touch database/database.sqlite
   ```
   Ensuite, exécutez les migrations et peuplez la base de données :
   ```bash
   php artisan migrate --seed
   ```

## 💻 Lancement de l'application

Pour faire fonctionner l'application, vous devez lancer le serveur backend et le compilateur frontend simultanément.

1. **Lancer le serveur Laravel** (dans un premier terminal) :
   ```bash
   php artisan serve
   ```
   L'application sera disponible à l'adresse : [http://localhost:8000](http://localhost:8000).

2. **Lancer le serveur de développement Vite** (dans un second terminal) :
   ```bash
   npm run dev
   ```

## 🏗️ Architecture

- **Backend** : Laravel 11
- **Frontend** : React (TypeScript) via Inertia.js
- **Stylisation** : Tailwind CSS
- **Outil de build** : Vite
