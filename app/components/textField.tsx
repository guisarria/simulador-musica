"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function TempoField() {
  return (
    <Box
      component="form"
      sx={{
        width: "20ch",
      }}
      noValidate
      autoComplete="off"
      className="m-0 md:my-2 -ml-7"
    >
      <TextField
        sx={{}}
        id="outlined-basic"
        label="Tempo"
        variant="outlined"
        className="bg-black/40 rounded-md h-13 ml-3"
      />
    </Box>
  );
}

export function DurationField() {
  return (
    <Box
      component="form"
      sx={{
        width: "20ch",
      }}
      noValidate
      autoComplete="off"
      className="m-0 md:my-2 -ml-7"
    >
      <TextField
        sx={{}}
        id="outlined-basic"
        label="Duração"
        variant="outlined"
        className="bg-black/40 rounded-md h-13 ml-3"
      />
    </Box>
  );
}

export function ArtistNumberField() {
  return (
    <div className="flex">
      <Box
        component="form"
        sx={{
          width: "20ch",
        }}
        noValidate
        autoComplete="off"
        className="m-0 md:my-2"
      >
        <TextField
          sx={{}}
          id="outlined-basic"
          label="Número de artistas"
          variant="outlined"
          className="bg-black/40 rounded-md h-13 ml-3"
        />
      </Box>
      <div className="flex-1 pl-2 m-auto">
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
            className="invisible absolute -left-[216px] top-3 xl:left-6 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Informação sobre Dançante
          </span>
        </span>
      </div>
    </div>
  );
}

export function ArtistFollowersField() {
  return (
    <div className="flex">
      <Box
        component="form"
        sx={{
          width: "20ch",
        }}
        noValidate
        autoComplete="off"
        className="m-0 md:my-2"
      >
        <TextField
          sx={{}}
          id="outlined-basic"
          label="Seguidores no Spotify"
          variant="outlined"
          className="bg-black/40 rounded-md h-13 ml-3"
        />
      </Box>
      <div className="flex-1 pl-2 pt-6">
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
            className="invisible absolute -left-[216px] top-3 xl:left-6 z-10 ml-2 w-0 m-0 p-0 group-hover:w-48 group-hover:p-4 -translate-y-1/2 rounded bg-blue-950 p-4 text-sm text-white opacity-0 transition-all before:invisible before:absolute before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-blue-950 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
          >
            Informação sobre Seguidores
          </span>
        </span>
      </div>
    </div>
  );
}
