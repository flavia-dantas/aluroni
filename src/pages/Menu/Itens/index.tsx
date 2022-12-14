import menu from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filter: number | null;
  ordination: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filter, ordination } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof menu) {
    switch (ordination) {
      case "porcao":
        return newList.sort((a, b) => a.size > b.size ? 1 : -1);
      case "qtd_pessoas":
        return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case "preco":
        return newList.sort((a, b) => a.price > b.price ? 1 : -1);
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setList(order(newList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, ordination]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}
