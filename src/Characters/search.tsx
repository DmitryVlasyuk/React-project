import { FC, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { CharactersSelectors, ICharState } from "../Redux/Characters/Characters.slice";
import { CharacterCard } from "./CharacterCard";


export const SearchComponent: FC = () => {
  const [searchTerm, setSearchTerm] = useState<ICharState | null>(null);
  const charactersList = useSelector(CharactersSelectors.getAllCharacters);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={charactersList.slice(0, 20)}
        getOptionLabel={(option) => option.name || ""}
        sx={{ width: 400, padding: 2 }}
        onChange={(e, value) => setSearchTerm(value)}
        renderInput={(params) => <TextField {...params} label="Name" />}
        filterOptions={(options, state) => {
          console.log(`options : ${options}`);
          if (state.inputValue.length > 2) {
            return options.filter((item) =>
              String(item.name)
                .toLowerCase()
                .includes(state.inputValue.toLowerCase())
            );
          }
          return options;
        }}
      />
      <div>{searchTerm ? <CharacterCard card={searchTerm} /> : ""}</div>
    </div>
  );
};
