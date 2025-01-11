import Wrapper from "../../assets/wrappers/OnBoardingComponent";
import ProfileIcon from "../../assets/images/profile.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OnBoardingRegistrationComponent = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        setTimeout(() => {
            navigate("/authentification");
        }, 500);
    };

    return (
        <Wrapper className="container">
            <img src={ProfileIcon} className="SVGComponent" />
            <p className="title">Ready to join the community?</p>
            <Button
                variant="contained"
                sx={{
                    fontFamily: "Poppins SemiBold",
                    margin: "30px",
                    borderRadius: "20px",
                    height: {
                        xs: "45px",
                        md: "60px",
                    },
                    width: "100%",
                    maxWidth: {
                        xs: "251px",
                        md: "400px", // 50% width on medium screens
                    },
                    fontSize: {
                        xs: "0.75rem", // Smaller font size on extra-small screens
                        md: "1.25rem", // Default font size on medium screens
                        lg: "1.125rem", // Larger font size on large screens
                    },
                }}
                onClick={handleRegisterClick}>
                Register Now
            </Button>
        </Wrapper>
    );
};

export default OnBoardingRegistrationComponent;
