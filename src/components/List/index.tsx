import { Circle, Trash } from "phosphor-react";
import styles from "./List.styles.module.css";

export function List() {
  return (
    <div className={styles.container}>
      <button type="button">
        <Circle size={24}/>
        <p>Academia</p>
        <Trash size={16}/>
      </button>
    </div>
  );
}
