import Image from 'next/image'
import ScoreLow from '../../assets/score-low.gif'
import ScoreMedium from '../../assets/score-medium.gif'
import ScoreHigh from '../../assets/score-high.gif'

export default function Graph() {
  return (
    <div className="flex items-center content-center text-white">
      <div className="mr-8">
        <Image width={30} height={30} alt="Gráfico" src={ScoreLow} className="ml-3" />
        <p>Flopou</p>
        <p>≺40%</p>
      </div>
      <div className="mr-4 content-center items-center text-center">
        <Image width={30} height={30} alt="Gráfico" src={ScoreMedium} className="ml-7" />
        <p>Viral</p>
        <p>40%≻ ≺60%</p>
      </div>
      <div className="score-low">
        <Image width={30} height={30} alt="Gráfico" src={ScoreHigh} className="ml-3" />
        <p>Top 200</p>
        <p>60%≻</p>
      </div>
    </div>
  )
}
