import type { ReactNode } from "react";

type PokemonLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const PokemonLayout = ({ children, modal }: PokemonLayoutProps) => {
  return (
    <>
      {children}
      {modal}
      <footer>This is the footer present only on /pokemon routes</footer>
    </>
  );
};

export default PokemonLayout;
