import { useEffect, useState } from "react";

import SearchIcon from "../assets/images/search-icon.png";

import Wrapper from "../assets/wrappers/SearchUsersComponent";
import customFetch from "../utils/customFetch";

const SearchUsersComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const getUsers = async () => {
            if (searchTerm) {
                const response = await customFetch.get(
                    `/users/searchUsers?searchTerm=${searchTerm}`
                );
                console.log(response.data);

                setUsers(response.data);
            } else {
                setUsers([]);
            }
        };

        getUsers();
    }, [searchTerm]);

    return (
        <Wrapper>
            <div className="searchUsersField">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <img className="searchIcon" src={SearchIcon} alt="" />
            </div>
            <div className="users">
                {searchTerm === "" && <p className="nothingSearchedYetText">Discover Anything ?</p>}
                {users.map((user) => (
                    <div key={user._id} className="user">
                        <img src={user.profileImage} className="userProfileImage" alt="userImage" />
                        <p className="userName">{user.username}</p>
                        <span className="followButton">Follow</span>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default SearchUsersComponent;
