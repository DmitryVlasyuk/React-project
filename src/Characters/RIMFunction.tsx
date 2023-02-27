import { getCharacters } from '../api/character.api';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const FillCharacterList = () => {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    getCharacters()
      .then(response => {
        setChars(response)
      })
      .catch(error => console.error(error))
  }, []);
  return chars;
}

const clickHandler = (e) => {
  console.log(e.target.id)
}

export const CharacterComponent = () => {
  const characters = FillCharacterList().slice(-6);
  return (<>{characters.map(char => {
    return (
      <Card key={char.id} className='card__wrapper' sx={{ borderRadius: '80px', height: 80, width: 320 }}>
        <Avatar src={char.image} alt={char.name} sx={{ width: 80, height: 80 }} />
        <CardContent>
          <Typography onClick={clickHandler} id={char.id} gutterBottom variant="h5" component="div">
            {char.name}
          </Typography>
        </CardContent>
      </Card>
    )
  }
  )}
  </>
  )
}

// export const SearchComponent = () => {
//   const characters = FillCharacterList();
//   return (
//     <Autocomplete
//       id="combo-box-demo"
//       options={characters.map(char => { return (char.name) })}
//       sx={{ width: 300, backgroundColor: 'white' }}
//       renderInput={(params) => <TextField {...params} />}
//     />
//   );
// }
