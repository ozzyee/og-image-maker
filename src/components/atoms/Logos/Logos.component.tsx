export default function Logos({ isDarkTheme }: LogosProps) {
  return isDarkTheme ? <img src={"/logos/stockora-black.svg"}/> : <img src={"/logos/stockora.svg"}/>
}

type LogosProps = {
  isDarkTheme: boolean
}