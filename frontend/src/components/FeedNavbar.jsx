import settings from "../assets/images/settings.png";
import messages from "../assets/images/messages.png";
import Wrapper from "../assets/wrappers/FeedNavbar";

const FeedNavbar = () => {
    return (
        <Wrapper>
            <span className="special">CONNECT</span>
            <div className="images">
                <img src={settings} className="settingsImage" alt="settings" />
                <img src={messages} className="messages" alt="messages" />
            </div>
        </Wrapper>
    );
};

export default FeedNavbar;
