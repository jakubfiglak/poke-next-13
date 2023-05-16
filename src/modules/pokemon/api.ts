import { pokemonSchema } from "./schemas";

export const pokemon = {
  getByName: async (name: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return pokemonSchema.parse(data);
  },
};
