import Link from "next/link";

const PokemonPage = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Pokemon Page</h1>
      <ul>
        <li className="hover:text-cyan-400 transition-colors">
          <Link href="/pokemon/charmander">Charmander</Link>
        </li>
        <li className="hover:text-cyan-400 transition-colors">
          <Link href="/pokemon/bulbasaur">Bulbasaur</Link>
        </li>
        <li className="hover:text-cyan-400 transition-colors">
          <Link href="/pokemon/squirtle">Squirtle</Link>
        </li>
      </ul>
    </div>
  );
};

export default PokemonPage;
