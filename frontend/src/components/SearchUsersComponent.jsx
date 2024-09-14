import { useState } from "react";

import SearchIcon from "../assets/images/search-icon.png";

import Wrapper from "../assets/wrappers/SearchUsersComponent";

const SearchUsersComponent = () => {
    // Initialize state to manage the search input value
    const [searchTerm, setSearchTerm] = useState("");

    // Handle the change event to update the state
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Wrapper>
            <div className="searchUsersField">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <img src={SearchIcon} alt="" />
            </div>
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
            {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
        </Wrapper>
    );
};

export default SearchUsersComponent;
