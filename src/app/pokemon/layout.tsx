import type { ReactNode } from "react";

type PokemonLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const PokemonLayout = ({ children }: PokemonLayoutProps) => {
  return (
    <>
      {children}
      <footer>This is the footer present only on /pokemon routes</footer>
    </>
  );
};

export default PokemonLayout;
