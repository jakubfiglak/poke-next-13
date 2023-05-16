import { pokemonTypes } from "@/modules/pokemon-types/api";
import Link from "next/link";

const TypesPage = async () => {
  const data = await pokemonTypes.getAll();

  return (
    <div>
      <h1 className="text-3xl mb-4">Types Page</h1>
      <ul>
        {data.results.map((type) => (
          <li key={type.name}>
            <Link
              href={`/types/${type.name}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {type.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypesPage;
