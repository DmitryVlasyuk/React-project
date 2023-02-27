import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
export const NavigationComponent = () => {
    const theme = useTheme();
    const CreateLiElement = ({ name }) => {
        return (
            <li><a className="navigation__item" href='/'>{name}</a></li>
        )
    }
    const [hideMenu, setHideMenu] = useState(true);
    const CreateNavList = () => {
        return (
            <ul className={`${hideMenu ? "hide-menu" : "show-menu"}`}>
                <CreateLiElement name="Home" />
                <CreateLiElement name="Products" />
                <CreateLiElement name="Articles" />
                <CreateLiElement name="News" />
                <CreateLiElement name="About" />
                <CreateLiElement name="Our team" />
            </ul>
        )

    }

    return (
        // className="navigation"
        <Box sx={{color: "primary"}}>
            {/* <div className="burger__menu"> */}
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ ml: 1, mt: 1, color: 'white' }}
                onClick={() => setHideMenu(!hideMenu)}
            >
                <MenuIcon />
            </IconButton>
            <CreateNavList />

            {/* </div> */}
        </Box>
    )
}

