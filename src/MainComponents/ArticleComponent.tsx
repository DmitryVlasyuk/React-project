import { CharacterComponent} from "../Functions/RIMFunction"
import Box from '@mui/material/Box';
export const ArticleComponent = () => {
    return (
        <section className="article__wrapper" id="#article__wrapper">
            <CharacterComponent/>
            <CreateArticle content = {<div className="box"/>}/>
        </section >
    )
}
const CreateArticle = ({content}) => {
    return (
        <Box className="article" sx={{ bgcolor: 'secondary.main' }}>
                {content}
            </Box>
    )
}