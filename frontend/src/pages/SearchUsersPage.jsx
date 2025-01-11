import Wrapper from "../assets/wrappers/SearchUsersPage";
import { SearchUsersComponent, SearchUsersNavbarComponent } from "../components";

const SearchUsersPage = () => {
    return (
        <Wrapper className="container">
            <SearchUsersNavbarComponent />
            <SearchUsersComponent />
        </Wrapper>
    );
};

export default SearchUsersPage;
