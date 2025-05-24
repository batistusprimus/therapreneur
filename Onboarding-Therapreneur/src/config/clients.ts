export interface Client {
  id: string;
  name: string;
  password: string;
  googleDocs: {
    [key: string]: string;
  };
}

// Template pour ajouter un nouveau client
export const clientTemplate: Client = {
  id: 'template',
  name: 'Nom du Client',
  password: 'mot-de-passe',
  googleDocs: {
    'Module 1': 'https://docs.google.com/document/d/...',
    'Module 2': 'https://docs.google.com/document/d/...',
  }
};

// Liste des clients
export const clients: Client[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    password: 'password123',
    googleDocs: {
      'Module 1': 'https://docs.google.com/document/d/...',
      'Module 2': 'https://docs.google.com/document/d/...',
    }
  }
];

// Fonction utilitaire pour ajouter un nouveau client
export function addClient(name: string, password: string): Client {
  const newClient: Client = {
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    password,
    googleDocs: {
      // Les Google Docs seront ajoutés manuellement
      'Module 1': 'https://docs.google.com/document/d/...',
      'Module 2': 'https://docs.google.com/document/d/...',
    }
  };
  
  return newClient;
} 