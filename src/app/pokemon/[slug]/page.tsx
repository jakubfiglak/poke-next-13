import { NextPage } from "next";

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
