import { NextPage } from "next";
import { Modal } from "@/components/modal";

type SinglePokemonPageProps = {
  params: { slug: string };
};

const SinglePokemonPage: NextPage<SinglePokemonPageProps> = ({ params }) => {
  return (
    <Modal>
      <h1 className="text-3xl">Pokemon {params.slug} Modal</h1>
    </Modal>
  );
};

export default SinglePokemonPage;
