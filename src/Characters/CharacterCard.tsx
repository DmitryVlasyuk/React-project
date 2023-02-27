import { Avatar, Button, Card, CardContent, CardHeader } from "@mui/material";
import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import { ICharState } from "../Redux/Characters/Characters.slice";
// import { ArticleWrapper } from "./styled";

type CharacterProps = {
  card: ICharState;
};

export const CharacterCard: FC<CharacterProps> = ({ card }) => {
  const [characterId, setCharacterId] = useState<null | number>();
  const handleClick = (id: number) => {
    setCharacterId(id);
  };

  return (
    // <ArticleWrapper>
      <Card key={card.id} className='card__wrapper' sx={{ borderRadius: '80px', height: 80, width: 320 }}>
      <Avatar
            alt="character-image"
            src={card.image}
            sx={{ width: 80, height: 80 }}
          />
        <CardContent>
          {characterId && <Navigate to={`/${characterId}`} />}

          <Button onClick={() => handleClick(card.id)} size="small">
            {card.name}
          </Button>
          <CardHeader subheader={card.species} />
          
        </CardContent>
      </Card>
    // </ArticleWrapper>
  );
};
