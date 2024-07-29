import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthNavbar } from "../components";
import { AppContext } from "../contexts/AppContext";

import Wrapper from "../assets/wrappers/AuthentificationLayout";

const AuthentificationLayout = () => {
    const { removeNavbar } = useContext(AppContext);

    return (
        <>
            {!removeNavbar && <AuthNavbar />}
            <Wrapper className="container">
                <Outlet />
            </Wrapper>
        </>
    );
};
export default AuthentificationLayout;
