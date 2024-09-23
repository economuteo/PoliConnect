import { useNavigate } from "react-router-dom";

const UsersWhoLikedComponent = ({ usersInformation }) => {
    const navigate = useNavigate();

    const handleSeeUserProfile = (user) => {
        navigate(`/feed/userProfile/${user.username}`, { state: { user } });
    };

    return (
        <div>
            {usersInformation.map((user) => (
                <div key={user._id} className="user">
                    {console.log(user)}
                    <div className="userProfile" onClick={() => handleSeeUserProfile(user)}>
                        <img
                            src={user.profileImage}
                            clasFsName="userProfileImage"
                            alt="userImage"
                        />
                        <p className="userName">{user.username}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersWhoLikedComponent;
