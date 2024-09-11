import { Outlet } from "react-router-dom";
import { FeedNavbar, StoriesComponent, AppFooterComponent } from "../components";

const FeedLayoutPage = () => {
    return (
        <main className="container">
            <FeedNavbar />
            <StoriesComponent />
            <AppFooterComponent />
        </main>
    );
};

export default FeedLayoutPage;
