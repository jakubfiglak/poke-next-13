import { typeBasicInfoResponseSchema } from "./schemas";

export const pokemonTypes = {
  getAll: async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return typeBasicInfoResponseSchema.parse(data);
  },
};
