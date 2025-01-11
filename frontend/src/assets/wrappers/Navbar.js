import styled, { css, keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const stickyStyles = css`
    position: sticky;
    width: 100vw;
    top: 0px;
    padding: 10px 24px;
    border-radius: 0 0 10px 10px;
    background-color: #1b2033;
    z-index: 1;
    animation: ${slideDown} 0.5s ease-in-out forwards;
`;

const Wrapper = styled.nav`
    margin-top: 15px;
    width: 100%;
    ${(props) => props.isSticky && stickyStyles}

    .navIcon {
        width: 45px;
        height: 45px;
        border-radius: 15px;
        cursor: pointer;
    }

    /* Responsiveness */
    @media only screen and (min-width: 600px) {
    }

    @media only screen and (min-width: 1024px) {
        margin-top: 0px;
        .navIcon {
            display: none;
        }
    }
`;

export default Wrapper;
