import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import InputSearch from "./InputSearch";
import { useState } from "react";
import Filters from "./Filters";
import Ordination from "./Ordination";
import Itens from "./Itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, SetFilter] = useState<number | null>(null);
  const [ordination, setOrdination] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__titulo}>Cardápio</h3>
        <InputSearch search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} SetFilter={SetFilter} />
          <Ordination ordination={ordination} setOrdination={setOrdination} />
        </div>
        <Itens search={search} filter={filter} ordination={ordination} />
      </section>
    </main>
  )
}