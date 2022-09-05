import React from "react";
import styles from "./InputSearch.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputSearch({ search, setSearch }: Props) {
  return (
    <div className={styles.inputSearch}>
      <input
        value={search}
        onChange={(evento) => setSearch(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}