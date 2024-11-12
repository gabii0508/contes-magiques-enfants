const fetch = require('node-fetch');  // Si tu utilises Node.js, tu as besoin de node-fetch pour faire des requêtes HTTP

// URL de ton serveur Express
const url = 'http://localhost:5000/aventure';

// Fonction pour obtenir une aventure magique
async function getAventure() {
    try {
        // Faire une requête GET vers l'API /aventure
        const response = await fetch(url);
        
        // Vérifier si la réponse est correcte (code 200)
        if (response.ok) {
            const data = await response.json();  // Récupérer les données JSON renvoyées par l'API
            console.log('Histoire générée :', data.histoire);  // Afficher l'histoire dans la console
        } else {
            console.log('Erreur dans la récupération de l\'aventure');
        }
    } catch (error) {
        console.error('Erreur de requête:', error);  // Afficher l'erreur s'il y en a une
    }
}

// Appeler la fonction pour récupérer et afficher une aventure
getAventure();
