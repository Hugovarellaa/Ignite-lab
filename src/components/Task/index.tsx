import styles from "./Task.styles.module.css";

export function Task () {
  return (
    <section className={styles.container}>
        <div className={styles.info}>
          <div className={styles.taskInfo}>
            <strong>Tarefas criadas</strong>
            <span>5</span>
          </div>
          <div className={styles.taskDone}>
            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </div>
        <div />
      </section>
  )
}