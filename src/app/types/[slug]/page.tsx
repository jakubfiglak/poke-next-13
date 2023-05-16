import { pokemonTypes } from "@/modules/pokemon-types/api";

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
      <div className="flex flex-wrap gap-3">
        {data.pokemon.map(({ pokemon }) => (
          <div key={pokemon.name} className="p-4 border rounded-md">
            <h3 className="uppercase">{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonTypePage;
