import OpenAI from "openai";

export async function testOpenAIKey() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey || apiKey === 'your_new_api_key_here') {
    throw new Error('Clé API OpenAI non configurée');
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Attention: à utiliser uniquement pour les tests
  });

  try {
    const models = await openai.models.list();
    console.log('Connexion OpenAI réussie!');
    return true;
  } catch (error) {
    console.error('Erreur de connexion OpenAI:', error);
    throw error;
  }
}