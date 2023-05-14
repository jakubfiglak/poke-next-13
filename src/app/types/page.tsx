import Link from "next/link";
import { z } from "zod";

const responseSchema = z.object({
  count: z.number(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    })
  ),
});

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return responseSchema.parse(data);
}

const TypesPage = async () => {
  const data = await getData();

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
