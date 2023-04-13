"use client";

import { useEffect, useState } from "react";
import {
  AcousticCheck,
  DancingCheck,
  EnergeticCheck,
  ExplicitCheck,
  InstrumentalCheck,
  SpokenCheck,
  WithValenceCheck,
  WithVivacityCheck,
} from "./checkbox";
import OutputResult from "./outputResult";
import { MusicGenderSelect, TempoSelect } from "./select";
import "./simulator.css";
import {
  ArtistFollowersField,
  ArtistNumberField,
  DurationField,
  VolumeField,
} from "./textField";

export default function Simulator() {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    console.log("activeTab", activeTab);
  }, [activeTab]);
  const handleSlideToPrevious = () => {
    if (activeTab > 0 && activeTab <= 2) {
      setActiveTab((prevState) => prevState - 1);
    }
  };

  const handleSlideToNext = () => {
    if (activeTab >= 0 && activeTab < 2) {
      setActiveTab((prevState) => prevState + 1);
    }
  };

  return (
    <div className="flex items-center justify-center md:h-screen md:-mt-12 w-full h-full sm:h-[calc(100%-3.7rem)]">
      <div className="bg-black/40 rounded-3xl shadow-xl w-full h-[85%] m-0 p-0 md:max-w-screen-2xl sm:h-[90%] lg:px-56 py-8 lg:mt-10 backdrop-blur-sm">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          Popularidade de Músicas
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extra light mb-4 md:mb-6 text-center text-white">
          Simulador by Cognitive
        </h2>
        <div className="flex sm:w-full lg:flex-row xl:w-full lg:mt-12 md:items-center flex-col content-center justify-center h-full md:h-auto">
          <div className="flex-1 text-center sm:flex-[.75] md:flex-1 xl:flex-[100%] md:mr-0 xl:mr-20 md:mb-5 h-full">
            <div className="flex-row md:-ml-16 h-full md:h-auto">
              <div
                className={`flex content-center justify-center h-[calc(80% - 48px)]
              options-parameters${activeTab < 2 ? " active" : ""}
  `}
              >
                <div
                  className={`md:align-baseline sm:visible flex flex-col sm:opacity-100 sm:left-auto sm:w-fit sm:h-auto relative opacity-0 invisible w-0 h-0 m-0 overflow-hidden md:pr-26 md:min-w-[280px] h-full
              options${activeTab === 0 ? " active" : ""}
          `}
                >
                  <DancingCheck />
                  <EnergeticCheck />
                  <SpokenCheck />
                  <AcousticCheck />
                  <InstrumentalCheck />
                  <WithVivacityCheck />
                  <WithValenceCheck />
                  <ExplicitCheck />
                </div>
                <div
                  className={`flex-1 sm:flex-[unset] md:pr-10 flex flex-col justify-center items-center
              parameters${activeTab === 1 ? " active" : ""}
          `}
                >
                  <TempoSelect />
                  <DurationField />
                  <ArtistNumberField />
                  <MusicGenderSelect />
                  <ArtistFollowersField />
                  <VolumeField />
                </div>
              </div>
              <button className="bg-blue-950/80 border-2 border-white px-16 py-2 md:mb-0 font-extralight text-xl rounded-full text-white text-center mt-4 md:-ml-40 md:mb-10 md:mt-6">
                Gerar
              </button>
            </div>
          </div>
          <div
            className={`flex-2 flex-col items-center content-center justify-center text-center lg:h-72 lg:-mr-16
          results${activeTab === 2 ? " active" : ""}
        `}
          >
            <OutputResult />
          </div>
          <div
            id="optionsBtn"
            className="optionsBtn bg-gray-500 h-10 w-10 fixed clip left-3 top-1/2 z-10 cursor-pointer"
            style={{
              clipPath:
                "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
            }}
            onClick={handleSlideToPrevious}
          ></div>
          <div
            id="parametersBtn"
            className="parametersBtn bg-gray-500 h-10 w-10 fixed clip right-3 top-1/2 z-10 cursor-pointer"
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
            }}
            onClick={handleSlideToNext}
          ></div>
        </div>
      </div>
    </div>
  );
}
