import { NextPage } from "next";

export async function generateStaticParams() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
  const data = await response.json();

  return data.results.map((pokemon: { name: string; url: string }) => ({
    slug: pokemon.name,
  }));
}

type SinglePokemonPageProps = {
  params: { slug: string };
};

const SinglePokemonPage: NextPage<SinglePokemonPageProps> = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl">Pokemon {params.slug} Page</h1>
    </div>
  );
};

export default SinglePokemonPage;
