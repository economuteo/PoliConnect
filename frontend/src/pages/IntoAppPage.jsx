import { AppFooterComponent } from "../components";

import { Outlet } from "react-router-dom";

const IntoAppPage = () => {
    return (
        <main style={{ height: "100vh" }}>
            <Outlet />
            <AppFooterComponent />
        </main>
    );
};

export default IntoAppPage;
