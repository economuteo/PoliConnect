import { GlobalStyle } from "../assets/wrappers/GlobalStyle";
import Wrapper from "../assets/wrappers/FinishStoryPage";
import {
    FinishStoryNavbarComponent,
    FinishStoryComponent,
    FinishStoryFooterComponent,
} from "../components";

const FinishStoryPage = () => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <FinishStoryNavbarComponent />
                <FinishStoryComponent />
                <FinishStoryFooterComponent />
            </Wrapper>
        </>
    );
};

export default FinishStoryPage;
