import { NextResponse } from 'next/server';

// Base de données des clients (à terme, cela devrait être dans une vraie base de données)
const clients = {
  'jean-remi-tomasini': {
    id: 'jean-remi-tomasini',
    name: 'Jean-Rémi TOMASINI',
    email: 'jeanremit@icloud.com',
    phone: '+33 7 82 81 62 06',
    password: 'UYGVB678'
  }
};

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Recherche du client avec ce mot de passe
    const client = Object.values(clients).find(client => client.password === password);

    if (client) {
      // On ne renvoie pas le mot de passe dans la réponse
      const { password: _, ...clientInfo } = client;
      return NextResponse.json({
        success: true,
        clientId: client.id,
        clientInfo
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Mot de passe incorrect'
    }, { status: 401 });

  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe:', error);
    return NextResponse.json({
      success: false,
      message: 'Une erreur est survenue lors de la vérification du mot de passe'
    }, { status: 500 });
  }
} 