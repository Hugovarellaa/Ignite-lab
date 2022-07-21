import layerImg from "../../assets/layer.svg";
import styles from "./SearchBox.styles.module.css";

export function SearchBox() {
  return (
    <main className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <img src={layerImg} alt="Adicionar Todo" />
      </button>
    </main>
  );
}
