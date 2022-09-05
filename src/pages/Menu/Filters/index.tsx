import React from "react";
import filters from "./filters.json";
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  SetFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, SetFilter }: Props) {

  function selectFilter(option: IOption) {
    if (filter === option.id) return SetFilter(null);
    return SetFilter(option.id);
  }
  return (
    <div className={styles.filters}>
      {filters.map(option => (
        <button className={classNames({
          [styles.filters__filter]: true,
          [styles['filters__filter--active']]: filter === option.id
        })} key={option.id} onClick={() => selectFilter(option)}>
          {option.label}
        </button>
      ))}
    </div>
  )
}