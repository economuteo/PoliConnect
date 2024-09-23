import { useLocation } from "react-router-dom";

import { LikesNavbarComponent, UsersWhoLikedComponent } from "../components";

import Wrapper from "../assets/wrappers/LikesPage";

const LikesPage = () => {
    const location = useLocation();
    const { usersInformation } = location.state;

    return (
        <Wrapper className="container">
            <LikesNavbarComponent />
            <UsersWhoLikedComponent usersInformation={usersInformation} />
        </Wrapper>
    );
};

export default LikesPage;
