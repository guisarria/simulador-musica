"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "190px",
    },
  },
};

const names = [
  "Pop",
  "Funk",
  "Gospel",
  "MPB",
  "Reggae",
  "Arrocha",
  "Axe",
  "Disco",
  "Forro",
  "Frevo",
  "Hip-Hop",
  "Indie",
  "Metal",
  "Pagode",
  "Rap",
  "Rock",
  "Samba",
  "Sertanejo",
  "Soul",
  "Trap",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MusicGenderSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleGenderChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 190 }}>
        <InputLabel id="demo-multiple-name-label" sx={{
          textAlign: "left"
        }}>Gênero</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          style={{ marginLeft: "-10px", width: "190px" }}
          value={personName}
          onChange={handleGenderChange}
          input={<OutlinedInput label="Name" style={{ width: "190px", textAlign: "left" }} />}
          MenuProps={MenuProps}
          className="bg-black/40 rounded-md h-13 -ml-[-10px]"
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={{textAlign: "left"}}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
