import Wrapper from "../assets/wrappers/UserProfilePage";
import { UserProfileComponent, UserProfileNavbarComponent } from "../components";

const UserProfilePage = () => {
    return (
        <Wrapper className="container">
            <UserProfileNavbarComponent />
            <UserProfileComponent />
        </Wrapper>
    );
};

export default UserProfilePage;
