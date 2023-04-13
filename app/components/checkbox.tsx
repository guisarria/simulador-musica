'use client'
import React, { useState } from 'react'

export function DancingCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Dançante
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-32 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:left-full before:z-10 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Descreve o quanto uma música é adequada para dançar com base em uma
            combinação de elementos musicais, incluindo tempo, estabilidade do
            ritmo, força da batida e regularidade geral. Selecione se a música
            for mais dançável.
          </span>
        </span>
      </div>
    </div>
  );
}

export function EnergeticCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Energética
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-16 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-24 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Representa uma medida perceptiva de intensidade e atividade.
            Normalmente, as faixas enérgicas parecem rápidas, altas e
            barulhentas. Por exemplo, death metal tem alta energia, enquanto um
            prelúdio de Bach é baixo na escala.
          </span>
        </span>
      </div>
    </div>
  );
}

export function SpokenCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Falada
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-3 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Detecta a presença de palavras faladas em uma faixa. Quanto mais a
            gravação conter música e fala em seções, como no Rap. Selecione se
            houver semelhanças com fala.
          </span>
        </span>
      </div>
    </div>
  );
}

export function AcousticCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Acústica
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-3 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Selecione caso a faixa seja acústica.
          </span>
        </span>
      </div>
    </div>
  );
}

export function InstrumentalCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Instrumental
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-3 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Indica se a música não contém vocais. Os sons “Ooh” e “aah” são
            tratados como instrumentais nesse contexto. Faixas de rap, por
            exemplo, são claramente “vocais”. Quanto mais próximo o valor for de
            1,0, maior a probabilidade da faixa não conter conteúdo vocal.
          </span>
        </span>
      </div>
    </div>
  );
}
export function WithVivacityCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Com vivacidade
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] top-3 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Detecta a presença de uma audiência na gravação. Selecione se a
            gravação for ao vivo.
          </span>
        </span>
      </div>
    </div>
  );
}

export function WithValenceCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Com valência
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-4 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] -top-4 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-36 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Selecione se a música soa mais positiva (por exemplo, felize,
            eufórica), enquanto àquelas com valores mais baixos soam mais
            negativas (por exemplo, tristes, deprimidas e zangadas).
          </span>
        </span>
      </div>
    </div>
  );
}
export function ExplicitCheck() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex sm:m-2">
      <div className="relative flex flex-wrap items-center antialiased">
        <input
          className="w-[22px] h-[22px] mr-[8px] md:w-6 md:h-6 transition-colors bg-transparent border rounded-md appearance-none cursor-pointer peer border-white checked:border-gray-500 checked:bg-gray-500 checked:hover:border-gray-600 checked:hover:bg-gray-600 focus:outline-none checked:focus:border-gray-700 checked:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          value={"dancing"}
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="pl-1 cursor-pointer text-white peer-disabled:cursor-not-allowed peer-disabled:text-white text-lg md:text-xl font-light"
          htmlFor="id-c01"
        >
          Conteúdo explícito
        </label>
        <svg
          className="absolute left-0.5 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          aria-labelledby="title-1 description-1"
          role="graphics-symbol"
        >
          <title id="title-1">Ícone check mark</title>
          <desc id="description-1">
            Botão de checagem caso o ícone de input foi clicado ou não.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
          />
        </svg>
      </div>
      <div className="flex-1 pl-2 pt-1">
        <span
          className="relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none"
          aria-describedby="tooltip-03"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#0E002B" />
            <path
              d="M53.904 16.032C58 16.032 61.616 16.832 64.752 18.432C67.952 20.032 70.416 22.336 72.144 25.344C73.936 28.288 74.832 31.712 74.832 35.616C74.832 42.528 72.688 47.616 68.4 50.88C64.176 54.08 58.384 55.68 51.024 55.68L50.736 66.24H44.976L44.592 50.88H47.088C53.68 50.88 58.864 49.856 62.64 47.808C66.48 45.696 68.4 41.632 68.4 35.616C68.4 31.392 67.056 28.032 64.368 25.536C61.744 23.04 58.256 21.792 53.904 21.792C49.552 21.792 46.096 22.976 43.536 25.344C40.976 27.712 39.696 30.944 39.696 35.04H33.264C33.264 31.2 34.128 27.872 35.856 25.056C37.648 22.176 40.08 19.968 43.152 18.432C46.288 16.832 49.872 16.032 53.904 16.032ZM47.856 84.48C46.448 84.48 45.264 84 44.304 83.04C43.408 82.08 42.96 80.896 42.96 79.488C42.96 78.08 43.408 76.928 44.304 76.032C45.264 75.072 46.448 74.592 47.856 74.592C49.2 74.592 50.32 75.072 51.216 76.032C52.176 76.928 52.656 78.08 52.656 79.488C52.656 80.896 52.176 82.08 51.216 83.04C50.32 84 49.2 84.48 47.856 84.48Z"
              fill="white"
            />
          </svg>
          <span
            role="tooltip"
            id="tooltip-03"
            className="invisible absolute -left-[216px] -top-10 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-16 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Selecione caso a música contenha conteúdo explícito.
          </span>
        </span>
      </div>
    </div>
  );
}
