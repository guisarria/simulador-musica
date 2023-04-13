import Image from 'next/image'
import OutputStar from '../../assets/output-star.svg'
import OutputTextField from './outputTextField'
import Graph from './graph'

export default function OutputResult() {
  return (
    <>
      <h2 className="text-3xl font-extralight text-white mb-4">Tendência a ser popular</h2>
      <div className="flex align-baseline mx-24">
        <Image src={OutputStar} width={100} height={100} alt="Estrela branca" className="z-10" />
        <OutputTextField />
      </div>
      <Graph />
    </>
  )
}
