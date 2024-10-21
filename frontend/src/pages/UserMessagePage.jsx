import Wrapper from "../assets/wrappers/UserMessagePage";
import { ChatBoxComponent, UserMessageNavbarComponent } from "../components";

const UserMessagePage = () => {
    return (
        <Wrapper>
            <UserMessageNavbarComponent />
            <ChatBoxComponent />
        </Wrapper>
    );
};

export default UserMessagePage;
