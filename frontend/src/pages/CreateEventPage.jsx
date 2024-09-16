import Wrapper from "../assets/wrappers/CreateEventPage";
import { CreateEventComponent, UserProfileNavbarComponent } from "../components";

const CreateEventPage = () => {
    return (
        <Wrapper className="container">
            <UserProfileNavbarComponent />
            <CreateEventComponent />
        </Wrapper>
    );
};

export default CreateEventPage;
