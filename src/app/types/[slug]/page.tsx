import { pokemonTypes } from "@/modules/pokemon-types/api";
import { PokemonCard } from "@/modules/pokemon/components/pokemon-card";

export async function generateStaticParams() {
  const { results: types } = await pokemonTypes.getAll();

  return types.map((type) => ({
    slug: type.name,
  }));
}

type PokemonTypePageProps = {
  params: { slug: string };
};

const PokemonTypePage = async ({ params }: PokemonTypePageProps) => {
  const data = await pokemonTypes.getByName(params.slug);

  return (
    <div>
      <h1 className="text-3xl mb-4">Type {params.slug} Page</h1>
      <ul className="flex flex-wrap gap-3">
        {data.pokemon.map(({ pokemon }) => (
          // @ts-expect-error Async Server Component
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            className="w-48"
          />
        ))}
      </ul>
    </div>
  );
};

export default PokemonTypePage;
