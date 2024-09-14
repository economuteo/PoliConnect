import Wrapper from "../assets/wrappers/IntoAppPage";
import { AppFooterComponent } from "../components";

import { Outlet } from "react-router-dom";

const IntoAppPage = () => {
    return (
        <Wrapper>
            <Outlet />
            <AppFooterComponent />
        </Wrapper>
    );
};

export default IntoAppPage;
