export default function Logos({ isDarkTheme, className }: LogosProps) {
  return isDarkTheme ? <img className={className} src={"/logos/stockora.svg"}/> :
    <img className={className} src={"/logos/stockora-black.svg"}/>
}

type LogosProps = {
  isDarkTheme: boolean
  className?: string
}