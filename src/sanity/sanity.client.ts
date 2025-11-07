import { createClient } from "next-sanity";

export const client = createClient({
  // All four values must be set via env vars
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,   // e.g. "t1eitz3d"
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,        // e.g. "production"
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!, // e.g. "2023-10-01"
  useCdn: false,                                           // get fresh, token-auth reads
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,             // Viewer token from Sanity
});
