import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { pokemon } from "@/modules/pokemon/api";
import Image from "next/image";

type PokemonCardProps = {
  name: string;
  className?: string;
};

export const PokemonCard = async ({ name, className }: PokemonCardProps) => {
  const data = await pokemon.getByName(name);

  return (
    <Link
      href={`/pokemon/${name}`}
      className={twMerge(
        "p-4 border rounded-md text-center flex flex-col",
        className
      )}
    >
      <h3 className="uppercase mb-2">{name}</h3>
      <Image
        alt={data.name}
        src={data.sprites.front_default}
        height={80}
        width={80}
        className="mx-auto mb-2"
      />
      <div className="flex gap-2 flex-wrap mt-auto">
        {data.types.map(({ type: { name } }) => (
          <span key={name} className="border rounded-full px-3 py-1 text-xs">
            {name}
          </span>
        ))}
      </div>
    </Link>
  );
};
