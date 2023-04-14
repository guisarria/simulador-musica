import Image from 'next/image'
import OutputStar from '../../assets/output-star.svg'
import OutputTextField from './outputTextField'

export default function OutputResult() {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-extra text-white mb-4">Tendência a ser popular</h2>
      <div className="flex align-baseline mx-24 justify-center">
        <Image src={OutputStar} width={100} height={100} alt="Estrela branca" className="z-10" />
        <OutputTextField />
      </div>
    </>
  )
}
