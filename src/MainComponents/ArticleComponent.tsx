import { CharacterComponent} from "../Characters/RIMFunction"
import Box from '@mui/material/Box';
import { AllCharacters } from "../Characters/characters";
export const ArticleComponent = () => {
    return (
        <Box className="article__wrapper">
            <AllCharacters/>
            {/* <CreateArticle content = {<div className="box"/>}/> */}
        </Box >
    )
}
const CreateArticle = ({content}) => {
    return (
        <Box className="article" sx={{ bgcolor: 'secondary.main' }}>
                {content}
            </Box>
    )
}