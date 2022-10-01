import styles from "./Background.module.scss"
import { ReactNode } from "react";

export default function Background({ children }:BackgroundProps) {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.lightLine}></div>
        </div>
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
    </>
  )
}

type BackgroundProps = {
  children: ReactNode
}