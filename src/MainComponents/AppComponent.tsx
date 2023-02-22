import { ArticleComponent } from "./ArticleComponent";
import { AsideComponent } from "./AsideComponent";
import { Footer } from "./FooterComponent";
import { HeaderComponent } from "./HeaderComponent";
import { NavigationComponent } from "./NavigationComponent";


const AppComponent = () => {
    return (<>

        <div className="wrapper__content" >
            <NavigationComponent />
            <div className="content">
                <HeaderComponent />
                <div className="wrapper">
                    <ArticleComponent />
                    <AsideComponent />
                </div>
                <Footer title="Footer" description="this is footer" />
            </div>
        </div>
    </>
    )
}

export default AppComponent;