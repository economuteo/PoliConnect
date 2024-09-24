import Wrapper from "../assets/wrappers/UsersWhoLikedComponent";

import { UserShortProfileComponent } from "../components";

const UsersWhoLikedComponent = ({ users }) => {
    return (
        <Wrapper>
            {users.map((user) => (
                <div className="user" key={user._id}>
                    <UserShortProfileComponent user={user} />
                </div>
            ))}
        </Wrapper>
    );
};

export default UsersWhoLikedComponent;
