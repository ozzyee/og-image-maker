import DefaultTemplate from "../../template/Default/Default.template";
import styles from "./Holdings.module.scss"

export default function HoldingsLayout() {
  return (
    <DefaultTemplate>
      <div className={styles.container}>
        <h2>888 Holdings</h2>
        <div className={styles.sharePriceContainer}>
          <div className={styles.info}>
            <p>Share Price</p>
            <p>12000</p>
          </div>
          <div className={styles.info}>
            <p>Share Price</p>
            <p>12000</p>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}