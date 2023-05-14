import { NextPage } from "next";

type PokemonTypePage = {
  params: { slug: string };
};

const PokemonTypePage: NextPage<PokemonTypePage> = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl">Type {params.slug} Page</h1>
    </div>
  );
};

export default PokemonTypePage;
