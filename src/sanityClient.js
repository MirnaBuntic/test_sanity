import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Använd ditt Sanity-projekt-ID från sanity.cli.js
const client = createClient({
  projectId: '7n6fv1n4', // Ditt Sanity-projekt-ID
  dataset: 'production', // Håller sig till samma dataset
  useCdn: true, // Använd cache för snabbare laddning
  apiVersion: '2023-01-01', // Sanitys API-version
});

// Skapa en funktion för att hantera bilder
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;