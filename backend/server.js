// Importer Express
const express = require('express');

// Créer une instance de l'application Express
const app = express();

// Définir le port de l'application
const PORT = 5000;

// Tableau de personnages, lieux et objets magiques
const personnages = [
    'Un lion courageux',
    'Une fée',
    'Un dragon'
];
const lieux = [
    'dans une forêt enchantée',
    'une montagne ',
    'dans l espace'
];
const objets = [
    'une baguette magique',
    'un épée',
    'une pierre précieuse magique'
];

// Route pour générer une aventure aléatoire
app.get('/aventure', (req, res) => {
    // Choisir un élément au hasard dans chaque tableau
    const personnage = personnages[Math.floor(Math.random() * personnages.length)];
    const lieu = lieux[Math.floor(Math.random() * lieux.length)];
    const objet = objets[Math.floor(Math.random() * objets.length)];

    // Créer une histoire avec les éléments choisis
    const histoire = `${personnage} se trouve ${lieu} et trouve ${objet}.`;

    // Renvoi de l'histoire sous forme de réponse HTTP
    res.json({ histoire });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
});



