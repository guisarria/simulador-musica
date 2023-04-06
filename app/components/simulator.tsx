import { AcousticCheck, DancingCheck, EnergeticCheck, ExplicitCheck, InstrumentalCheck, SpokenCheck, WithValenceCheck, WithVivacityCheck } from './checkbox'
import Chart from './chart'
import { MusicGenderSelect, TempoSelect } from './select'
import Image from 'next/image'
import OutputResult from './outputResult'
import { ArtistFollowersField, ArtistNumberField, DurationField, VolumeField } from './textField'
export default function Simulator() {
  return (
    <div className="flex items-center justify-center md:h-screen -mt-12 w-full h-full">
      <div className="bg-black/40 rounded-3xl shadow-xl md:max-w-screen-2xl px-56 py-8 mt-10 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-2 text-center text-white">Popularidade de Músicas</h1>
        <h2 className="text-3xl font-extralight mb-6 text-center text-white">Simulador by Cognitive</h2>
        <div className="flex md:flex-row md:items-baseline flex-col content-center justify-center">
          <div className="flex-1 text-center mr-20">
            <div className="flex-row md:-ml-40">
              <div className="flex content-center justify-center">
                <div className="md:align-baseline md:pr-26">
                  <DancingCheck />
                  <EnergeticCheck />
                  <SpokenCheck />
                  <AcousticCheck />
                  <InstrumentalCheck />
                  <WithVivacityCheck />
                  <WithValenceCheck />
                  <ExplicitCheck />
                </div>
                <div className="flex-1 md:pr-10">
                  <TempoSelect />
                  <DurationField />
                  <ArtistNumberField />
                  <MusicGenderSelect />
                  <ArtistFollowersField />
                  <VolumeField />
                </div>
              </div>
              <button className="bg-blue-950/80 border-2 border-white px-16 py-2 md:mb-0 font-extralight text-xl rounded-full text-white text-center md:-ml-40 mb-10 mt-6">Gerar</button>
            </div>
          </div>
          <div className="flex-2 flex-col items-center content-center justify-center text-center h-72 md:-mr-40">
            <OutputResult />
          </div>
        </div>
      </div>
    </div>
  )
}
