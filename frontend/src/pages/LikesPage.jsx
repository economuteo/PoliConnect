import Wrapper from "../assets/wrappers/LikesPage";
import { LikesNavbarComponent, UsersWhoLikedComponent } from "../components";

const LikesPage = () => {
    return (
        <Wrapper className="container">
            <LikesNavbarComponent />
            <UsersWhoLikedComponent />
        </Wrapper>
    );
};

export default LikesPage;
