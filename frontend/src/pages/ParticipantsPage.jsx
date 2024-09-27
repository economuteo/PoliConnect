import { useLocation } from "react-router-dom";

import Wrapper from "../assets/wrappers/LikesPage";
import { ParticipantsNavbarComponent, UsersWhoLikedComponent } from "../components";

const ParticipantsPage = () => {
    const location = useLocation();
    const { participants } = location.state;

    return (
        <Wrapper className="container">
            <ParticipantsNavbarComponent className="likesNavbar" />
            <UsersWhoLikedComponent users={participants} />
        </Wrapper>
    );
};

export default ParticipantsPage;
