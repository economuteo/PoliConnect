import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    padding: 20px 0px;
    background-color: #0f2e53;
    cursor: pointer;

    &:hover {
        background-color: #1a3b6b; /* Change background color on hover */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add box shadow on hover */
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
    }
`;

export default Wrapper;
