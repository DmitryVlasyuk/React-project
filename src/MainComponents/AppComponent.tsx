import { Box } from "@mui/material";
import { ArticleComponent } from "./ArticleComponent";
import { AsideComponent } from "./AsideComponent";
import { Footer } from "./FooterComponent";
import { HeaderComponent } from "./HeaderComponent";
import { NavigationComponent } from "./NavigationComponent";


const AppComponent = () => {
    return (
        <Box className="wrapper__content" sx={{bgcolor: "background.default"}} >
            <NavigationComponent />
            <div className="content">
                <HeaderComponent />
                <div className="wrapper">
                    <ArticleComponent />
                    <AsideComponent />
                </div>
                <Footer title="Footer" description="this is footer" />
            </div>
        </Box>
    )
}

export default AppComponent;