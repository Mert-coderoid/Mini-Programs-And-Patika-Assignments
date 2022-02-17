import styles from "./styles.module.css"

export default function A() {
   console.log(styles);
   return (
      <div className={styles.title}>
         A
      </div>
   )
}
