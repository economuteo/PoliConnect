import { useLocation } from "react-router-dom";

import { LikesNavbarComponent, UsersWhoLikedComponent } from "../components";

import Wrapper from "../assets/wrappers/LikesPage";

const LikesPage = () => {
    const location = useLocation();
    const { users } = location.state;

    return (
        <Wrapper className="container">
            <LikesNavbarComponent className="likesNavbar" />
            <UsersWhoLikedComponent users={users} />
        </Wrapper>
    );
};

export default LikesPage;
