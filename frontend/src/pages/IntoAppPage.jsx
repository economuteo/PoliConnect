import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/IntoAppPage";
import { AppFooterComponent, AppSidebarComponent } from "../components";
import { Outlet } from "react-router-dom";
import useIsSmallDevice from "../customHooks/useIsSmallDevice";

const IntoAppPage = () => {
    const isSmallDevice = useIsSmallDevice();

    return (
        <Wrapper>
            <Outlet />
            <AppFooterComponent />
        </Wrapper>
    );
};

export default IntoAppPage;
