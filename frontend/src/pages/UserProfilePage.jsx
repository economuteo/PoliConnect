import Wrapper from "../assets/wrappers/UserProfilePage";
import { UserProfileComponent, UserProfileNavbarComponent } from "../components";

const UserProfilePage = () => {
    return (
        <Wrapper>
            <UserProfileNavbarComponent />
            <UserProfileComponent />
        </Wrapper>
    );
};

export default UserProfilePage;
