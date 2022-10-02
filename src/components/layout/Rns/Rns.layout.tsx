import styles from './Rns.module.scss'
import DefaultTemplate from "../../template/Default/Default.template";

export default function RnsLayout() {
  return (
    <DefaultTemplate>
      <div className={styles.container}>
        <div className={styles.sharePriceContainer}>
          <h2>RNS Announcement</h2>
          <h1>Stockora</h1>
        </div>
      </div>
    </DefaultTemplate>
  )
}