import Background from "../../atoms/Background/Background.component";
import Logos from "../../atoms/Logos/Logos.component";
import { ReactNode } from "react";
import style from "./Default.module.scss"

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <Background>
      <div className={style.logoWrapper}>
        <Logos isDarkTheme={true} className={style.logo}/>
      </div>
      <main>{children}</main>
    </Background>
  )
}

type DefaultTemplateProps = {
  children: ReactNode
}