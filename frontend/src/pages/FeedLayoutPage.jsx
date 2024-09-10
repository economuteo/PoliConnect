import { Outlet } from "react-router-dom";
import { FeedNavbar, StoriesComponent } from "../components";

const FeedLayoutPage = () => {
    return (
        <main className="container">
            <FeedNavbar />
            <StoriesComponent />
        </main>
    );
};

export default FeedLayoutPage;
