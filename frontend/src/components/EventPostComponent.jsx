import Wrapper from "../assets/wrappers/EventPostComponent";

const EventPostComponent = ({ eventPost }) => {
    return (
        <Wrapper>
            <img src="" alt="" />
            <p>{eventPost.userUsername}</p>
            <div>
                <p>{eventPost.eventName}</p>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div></div>
            </div>
            <div>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
            </div>
        </Wrapper>
    );
};

export default EventPostComponent;
