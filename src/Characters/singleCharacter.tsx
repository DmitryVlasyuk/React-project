import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/character.api";
import { ICharState } from "../Redux/Characters/Characters.slice";
import { CharacterCard } from "./CharacterCard";
// import { ContentWrapper, InfoWrapper } from "./styled";

export const SingleCharacter: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharState>();

  useEffect(() => {
    if (id) getCharacter(id).then((result) => setCharacter(result));
  }, [id]);

  return (
    // <ContentWrapper>
    <>
      {character ? <CharacterCard card={character} /> : "Ooops..."}
      {/* <InfoWrapper> */}
        <span>
          <p>Status:</p> {character?.status}
        </span>
        <span>
          <p>Gender:</p> {character?.gender}
        </span>
      {/* </InfoWrapper> */}
    {/* </ContentWrapper> */}
    </>
  );
};
