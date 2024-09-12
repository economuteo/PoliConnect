import { AppFooterComponent } from "../components";

import { Outlet } from "react-router-dom";

const IntoAppPage = () => {
    return (
        <main>
            <Outlet />
            <AppFooterComponent />
        </main>
    );
};

export default IntoAppPage;
